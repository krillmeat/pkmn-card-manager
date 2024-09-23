import React, { useContext, useRef, useState, useEffect, useMemo } from 'react';

import { CardContext } from '../app';
import { FORMATS } from '../data/formats.data';
import { IMG } from '../images/images';
import { CompletionBar } from '../core/core-data/completion/completion-bar';
import { CardTable } from '../table/table';

import './decks.css';

export const DeckView = () => {
  const [context] = useContext(CardContext);

  const [currDeck,setCurrDeck] = useState(Object.keys(FORMATS[context.format].decks)[0]);

  const deckSelectRef = useRef();
  const deckHeaderRef = useRef();

  const [decklistHeight,setDecklistHeight] = useState(48);

  useEffect(()=>{
    let dsH = Math.ceil(deckSelectRef.current.offsetHeight);
    let dhH = Math.ceil(deckHeaderRef.current.offsetHeight);
    setDecklistHeight( (window.innerHeight - dsH - dhH) - (16 + 8 + 32) );
  })

  const filterOnlyDeck = deck => card => !!card.decks[deck]

  const decklist = useMemo(()=>{
    if(!context.cardArray) return [];
    return context.cardArray.filter(filterOnlyDeck(currDeck))
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
    <div className='deck-select' ref={deckSelectRef}>
      {Object.keys(FORMATS[context.format].decks).map(deck => {
        let mascot = FORMATS[context.format].decks[deck].mascots[0];
        return <div className={'deck-choice '+(currDeck === deck && 'active')}>
          <button onClick={()=>{ setCurrDeck(deck) }}>
            <img src={IMG.PKMN[mascot]} />
            <p>{deck.replace("_"," ")}</p>
          </button>
        </div>
      })}
    </div>


    <div className='deck-heading' ref={deckHeaderRef}>
      <h2>{currDeck}</h2>
      <div>
        <CompletionBar curr={totalOwned} max={60} label='Deck Completion'/>
      </div>
    </div>


    <div className='decklist' style={{height: `${decklistHeight}px`}}>
      <CardTable cardList={decklist} view={'deck'} currDeck={currDeck}/>
    </div>
  </div>)
}
