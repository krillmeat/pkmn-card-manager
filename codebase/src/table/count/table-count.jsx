import React, {useEffect,useState} from 'react';
import { CoreCounts } from '../../core/count/count.core';
import { DeckCounts } from '../../decks/count.decks';

// import './card-count.css';
import './table-count.css';

export const Counts = ({cardList,view='core',currDeck='',showOwned=false}) => {
  if(!cardList || cardList.length === 0) return null;
  return(<div className={`table-section counts ${showOwned ? 'show-owned' : 'hide-owned'}`}>
    {view === 'core' && <CoreCounts cardList={cardList} showOwned={showOwned}/>}
    {view === 'deck' && <DeckCounts cardList={cardList} currDeck={currDeck} showOwned={showOwned}/>}
  </div>)
}
