import { getFormatCards, getFormatOwned, getFormatRestrictedMatchups } from "../boot.util";
import { sortBasicEnergy, sortPkmn } from "./sort-order";

/**
 * Goes through all of the Decks and organizes every card into a consumable object
 * @param {Object} decks 
 * @returns Object orgainzed of all the cards and the amount in each deck
 */
export const buildCoreObject = decks => {
  let obj = {};

  // Loop through all of the Decks in a Block, and find every instance of every card
  for(let deck of Object.keys(decks)){
    let _deck = decks[deck].cards;
    for(let card of Object.keys(_deck)){
      let _card = _deck[card];
        obj[card] = {
          [deck]: _card,
          ...obj[card]
        }
    }
  }

  return obj;
}

const isDeckPartOfRestrictedMatchup = deckName => {
  for(let matchup of getFormatRestrictedMatchups()){
    if(matchup.includes(deckName)) return true;
  }

  return false;
}

const isCardPartOfRestrictedMatchup = cardCounts => {
  for(let deck of Object.keys(cardCounts)){
    if(isDeckPartOfRestrictedMatchup(deck)) return true;
  }

  return false;
}

const getHighestCountOfMatchup = (cardCounts,matchup) => {
  let highest = matchup[0];

  for(let deck of matchup){
    if(cardCounts[deck] > cardCounts[highest]) highest = cardCounts[deck];
  }

  if(!cardCounts[highest] || cardCounts[highest] === 0) return;

  return highest;
}

export const mergeRestrictions = _card => {
  let _deckCounts = {..._card};
  console.log("DC ? ",_deckCounts);
  if(Object.keys(_card).length === 1) return _card;
  if(!isCardPartOfRestrictedMatchup(_card)) return _card;

  for(let matchup of getFormatRestrictedMatchups()){
    let root = getHighestCountOfMatchup(_card,matchup);

    if(!root) continue; // If it's part of a matchup, but neither deck actually has a copy

    let _matchup = [...matchup];
        _matchup.splice(_matchup.indexOf(root),1);

    for(let m of _matchup){
      if(m === root) continue;
      _deckCounts[m] = 0;
    }
  }
  return _deckCounts;
}


export const getHighestCount = cardCounts => {
  let highestCount = 0;
  let highestDeck = Object.keys(cardCounts)[0];
  for(let deck of Object.keys(cardCounts)){
    let count = cardCounts[deck];
    if(count > highestCount){ highestCount = count; highestDeck = deck }
  }
    
  return {deck: highestDeck, count: highestCount};
}

// First, find the highest. Then, find the second-highest. That's your Core Value.
export const calcCoreValue = _cardCounts => {

  // Merge Values First

  let cardCounts = mergeRestrictions(_cardCounts);


  if(Object.keys(cardCounts).length === 1){ return 0 }
  let highestCount = getHighestCount(cardCounts);

  // if(highestCount > 4){ console.log("Energy") }

  let nextHighest = 0;

  for(let deck of Object.keys(cardCounts)){
    let _count = cardCounts[deck];

    if(highestCount.deck === deck) continue; // You never want to compare the highest count with itself (otherwise, they are always max)

    if(_count === highestCount.count) return highestCount.count; // Get out if the highest count is matched, that's the highest
    if(_count > nextHighest){ nextHighest = _count }
  }

  return nextHighest;
}

export const isEnergy = cardNo => {
  let ENERGY = ['HS_115','HS_116','HS_117','HS_118','HS_119','HS_120','HS_121','HS_122'];

  return ENERGY.includes(cardNo);
}

const filterCore = card => card.counts.core > 0;
const filterDeck = card => card.counts.core === 0 && card.counts.deck > 0;

let formatCards = getFormatCards();

const filterType = type => card => {
  let data = formatCards[card.number.split("_")[0]][card.number]; 
  if(!data) {console.log("Missing: ",card.number); return false; }
  return data.cardType === type
}

// const BASIC_ENERGY = ['HS_115','HS_116','HS_117','HS_118','HS_119','HS_120','HS_121','HS_122'];
// const filterEnergy = card => BASIC_ENERGY.includes(card.number);

export const sortCardArray = cardArray => {

  let pkmnCore = sortPkmn(cardArray.filter(filterCore).filter(filterType('pkmn')));
  let pkmnDeck = sortPkmn(cardArray.filter(filterDeck).filter(filterType('pkmn')));

  let trainerCore = cardArray.filter(filterCore).filter(filterType('trainer'));
  let trainerDeck = cardArray.filter(filterDeck).filter(filterType('trainer'));

  let itemCore = cardArray.filter(filterCore).filter(filterType('item'));
  let itemDeck = cardArray.filter(filterDeck).filter(filterType('item'));

  let supporterCore = cardArray.filter(filterCore).filter(filterType('supporter'));
  let supporterDeck = cardArray.filter(filterDeck).filter(filterType('supporter'));

  let toolCore = cardArray.filter(filterCore).filter(filterType('tool'));
  let toolDeck = cardArray.filter(filterDeck).filter(filterType('tool'));

  let stadiumCore = cardArray.filter(filterCore).filter(filterType('stadium'));
  let stadiumDeck = cardArray.filter(filterDeck).filter(filterType('stadium'));

  let specialEnergyCore = cardArray.filter(filterCore).filter(filterType('sEnergy'));
  let specialEnergyDeck = cardArray.filter(filterDeck).filter(filterType('sEnergy'));

  let basicEnergy = cardArray.filter(filterType('bEnergy')).sort(sortBasicEnergy);

  return [...pkmnCore, ...trainerCore, ...itemCore, ...supporterCore, ...toolCore,  ...stadiumCore, ...specialEnergyCore,
          ...pkmnDeck, ...trainerDeck, ...itemDeck, ...supporterDeck, ...toolDeck, ...stadiumDeck, ...specialEnergyDeck, ...basicEnergy];
}















const getSeriesFromCardNumber = cardNo => {
  // TODO: Obviously, figure this out
  //       Maybe I don't do this, and the query param handles which core you're in
  return 'HGSS'
}

const noNegative = number => number < 0 ? 0 : number;

const buildNeedObject = (counts,have) => {
  // This is assuming a two-player core
  let rem = have;

  let coreSingle = noNegative(counts.core - rem);
      rem = noNegative(rem-counts.core);
      
  let deck = noNegative(counts.deck - rem);
      rem = noNegative(rem-counts.deck);

  let coreDouble = noNegative(counts.core - rem);
      rem = noNegative(rem-counts.core);

  return {
    core: {
      single: coreSingle,
      double: coreDouble
    },
    deck: deck,
    extra: rem
  }
}

/**
 * Takes the Core Object (which just includes the number of copies per deck),
 * and creates a more useful object for consumers that includes:
 * 
 * Number | Decks | Counts | Have | Need
 * @param {string} cardNo card set and number, spaced by a _ [XX_00]
 * @param {Object} decks List of cards and all of the decks they are in
 * @returns Object that has all of the needed data for the cards
 */
const buildCardObj = (cardNo, decks) => {
  let _obj = {};

  let cv = calcCoreValue(decks);

  _obj.number = cardNo;
  _obj.decks = decks;
  _obj.counts = {
    core: cv,
    deck: getHighestCount(decks).count - cv
  }

  _obj.have = getFormatOwned()[cardNo.split("_")[0]][cardNo],
  _obj.need = buildNeedObject(_obj.counts,_obj.have);

  return _obj;
}

export const buildCardArray = (coreObj) => {
  let _combinedArray = [];
  let _unfiltered = [];

  for(let card of Object.keys(coreObj)){
    let _card = buildCardObj(card, coreObj[card]);
    _unfiltered.push(_card);
  }

  _combinedArray = [..._unfiltered]

  return _combinedArray;
}
