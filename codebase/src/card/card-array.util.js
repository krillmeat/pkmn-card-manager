import { FORMATS } from "../data/formats.data";
import { noNegative, getSet } from "../cards.util";

const isDeckPartOfRestrictedMatchup = (deckName,format) => {
  for(let matchup of FORMATS[format].restricted){
    if(matchup.includes(deckName)) return true;
  }

  return false;
}

const isCardPartOfRestrictedMatchup = (cardCounts,format) => {
  for(let deck of Object.keys(cardCounts)){
    if(isDeckPartOfRestrictedMatchup(deck,format)) return true;
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

const mergeRestrictions = (_card, format) => {
  let _deckCounts = {..._card};
  if(Object.keys(_card).length === 1) return _card;
  if(!isCardPartOfRestrictedMatchup(_card,format)) return _card;

  for(let matchup of FORMATS[format].restricted){
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

const getHighestCount = cardCounts => {
  let highestCount = 0;
  let highestDeck = Object.keys(cardCounts)[0];
  for(let deck of Object.keys(cardCounts)){
    let count = cardCounts[deck];
    if(count > highestCount){ highestCount = count; highestDeck = deck }
  }
    
  return {deck: highestDeck, count: highestCount};
}

// First, find the highest. Then, find the second-highest. That's your Core Value.
const calcCoreValue = (_cardCounts,format) => {

  // Merge Values First
  let cardCounts = mergeRestrictions(_cardCounts,format);


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

export const buildCardObj = (cardNumber, decks, format) => {
  let _obj = {};

  let coreValue = calcCoreValue(decks,format);

  _obj.number = cardNumber;
  _obj.decks = decks;
  
  _obj.counts = {
    core: coreValue,
    deck: getHighestCount(decks).count - coreValue
  }
  
  _obj.have = FORMATS[format].owned[getSet(cardNumber)][cardNumber];
  _obj.need = buildNeedObject(_obj.counts,_obj.have);

  _obj.data = FORMATS[format].cards[getSet(cardNumber)][cardNumber];
  
  return _obj;
}
