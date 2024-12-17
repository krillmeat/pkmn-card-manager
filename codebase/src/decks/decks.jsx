import React, { useContext, useRef, useState, useEffect, useMemo } from 'react';

import { CardContext } from '../app';
import { FORMATS } from '../data/formats.data';
import { IMG } from '../images/images';
import { CardTable } from '../table/table';

import './decks.css';
import { PKMN_SORT_ORDER, TYPE_ORDER, removeExcess } from '../card/sort.util';
import { DeckDataArea } from './data-area/deck-data-area';
import { ArchetypeSelect } from './archetype-select';
import { showOwnedParam } from '../url.util';
import { DecklistCard } from './decklist-card/decklist-card';

// TODO: Move to generic area
const CARD_TYPE_ORDER = ['pkmn','trainer','item','supporter','tool','stadium','sEnergy','bEnergy'];

const getCardTypeSortValue = (a,b) => {
  if(CARD_TYPE_ORDER.indexOf(a.data.cardType) > CARD_TYPE_ORDER.indexOf(b.data.cardType)) return 1;
  if(CARD_TYPE_ORDER.indexOf(a.data.cardType) < CARD_TYPE_ORDER.indexOf(b.data.cardType)) return -1;
  if(CARD_TYPE_ORDER.indexOf(a.data.cardType) === CARD_TYPE_ORDER.indexOf(b.data.cardType)) return 0;
}

const getTypeSortValue = (a,b) => {
  if((a.data.cardType === 'pkmn' || a.data.cardType === 'bEnergy') && (b.data.cardType === 'pkmn' || b.data.cardType === 'bEnergy')){
    if(TYPE_ORDER.indexOf(a.data.type) > TYPE_ORDER.indexOf(b.data.type)) return 1;
    if(TYPE_ORDER.indexOf(a.data.type) < TYPE_ORDER.indexOf(b.data.type)) return -1;
    if(TYPE_ORDER.indexOf(a.data.type) === TYPE_ORDER.indexOf(b.data.type)) return 0;
  }
  return 0;
}

const getPkmnSortValue = (a,b) => {
  if(PKMN_SORT_ORDER.indexOf(removeExcess(a.data.name)) > PKMN_SORT_ORDER.indexOf(removeExcess(b.data.name))) return 1;
  if(PKMN_SORT_ORDER.indexOf(removeExcess(a.data.name)) < PKMN_SORT_ORDER.indexOf(removeExcess(b.data.name))) return -1;
  if(PKMN_SORT_ORDER.indexOf(removeExcess(a.data.name)) === PKMN_SORT_ORDER.indexOf(removeExcess(b.data.name))) return 0;
}

export const sortDeck = (a,b) => {
  if(!a.data) console.log("Missing Card Data: ",a)
    if(!b.data) console.log("Missing Card Data: ",b)
  let _sort = 0;
  let cardTypeSort = getCardTypeSortValue(a,b);
  if(cardTypeSort === 0){
    let typeSort = getTypeSortValue(a,b);
    if(typeSort === 0 && a.data.cardType === 'pkmn' && b.data.cardType === 'pkmn'){
      _sort = getPkmnSortValue(a,b);
    } else{ _sort = typeSort }
  }else { _sort = cardTypeSort }
  return _sort;
}

export const DeckView = () => {
  const [context] = useContext(CardContext);

  const [currDeck,setCurrDeck] = useState(Object.keys(FORMATS[context.format].decks)[0]);

  const deckSelectRef = useRef();
  const deckHeaderRef = useRef();

  const [decklistHeight,setDecklistHeight] = useState(48);

  const showOwned = showOwnedParam();

  useEffect(()=>{
    let dsH = Math.ceil(deckSelectRef.current.offsetHeight);
    let dhH = Math.ceil(deckHeaderRef.current.offsetHeight);

    let topOffset = 16 + 8 + 32;
        topOffset += context.format === 'bn' ? 75 : 0;

    setDecklistHeight( (window.innerHeight - dsH - dhH) - (topOffset) );
  })

  const filterOnlyDeck = deck => card => !!card.decks[deck]

  const decklist = useMemo(()=>{
    if(!context.cardArray) return [];
    return context.cardArray.filter(filterOnlyDeck(currDeck)).sort(sortDeck);
  },[currDeck]);

  const totalOwned = useMemo(()=> {
    let totalNeed = 0;
    for(let card of decklist){
      let deckNeed = card.decks[currDeck];
      let haveMore = card.have - deckNeed >= 0;
      if(!haveMore) totalNeed += deckNeed - card.have;
    }
    return 60 - totalNeed;
  },[decklist,currDeck]);

  return(<div className='deck-view'>
    { context.format === 'bn' && <ArchetypeSelect decks={FORMATS[context.format].decks} /> }
    <div className='deck-select' ref={deckSelectRef}>
      {Object.keys(FORMATS[context.format].decks).map(deck => {
        let mascot = FORMATS[context.format].decks[deck].mascots[0];
        let secondMascot = FORMATS[context.format].decks[deck].mascots[1];
        return <div className={'deck-choice '+(currDeck === deck && 'active')}>
          <button onClick={()=>{ setCurrDeck(deck) }}>
            <img src={IMG.PKMN[mascot]} />
            {!!secondMascot && <img src={IMG.PKMN[secondMascot]} />}
            <p>{deck.replace("_"," ")}</p>
          </button>
        </div>
      })}
    </div>


    <div ref={deckHeaderRef}>
      <DeckDataArea currDeck={currDeck} totalOwned={totalOwned} source={FORMATS[context.format].decks[currDeck].source} />
      <DecklistCard deckList={decklist} currDeck={currDeck} format={context.format} img={FORMATS[context.format].decks[currDeck].img} />
    </div>


    <div className='decklist' style={{height: `${decklistHeight}px`}}>
      <CardTable cardList={decklist} view={'deck'} currDeck={currDeck} showOwned={showOwned}/>
    </div>
  </div>)
}