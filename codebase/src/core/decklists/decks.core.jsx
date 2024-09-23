import React, {useContext} from 'react';
import { CardContext } from '../../app';
import { CardCount } from '../count/card-count';

import './decks-core.css';

export const getTotalCount = (deckCounts) => {
  let total = 0;

  for(let deck of Object.keys(deckCounts)){
    total+=deckCounts[deck];
  }

  return total;
}

export const Decklists = ({cardList}) => {

  const [context] = useContext(CardContext);

  const onScroll = e => { document.querySelector(".core .heading .decks").scrollLeft = e.target.scrollLeft }

  if(!cardList || cardList.length === 0) return null;

  return(<div className='table-section decks' onScroll={onScroll}>
    {cardList.map((card,index) => { 
      return (<div className={`row r${index}`} key={`card-counts-${card.number.replace("_","").toLowerCase()}`}>
        {context.deckOrder.map(deck => {
          return <CardCount decklist count={context.coreObj[card.number][deck]}/>
        })}
        <CardCount ditto count={getTotalCount(context.coreObj[card.number])} />
      </div>)
    })}
  </div>)
}
