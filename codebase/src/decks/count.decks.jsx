import React, {useEffect,useMemo,useState} from 'react';
import { CardCount } from '../core/count/card-count';

import CompleteAll from '../images/icons/complete-all.png';

const deckNeed = (card,currDeck) => {
  let deckCount = card.decks[currDeck];
  let need = deckCount;
      need -= card.have;
      need = need < 0 ? 0 : need;
  return need;
};


export const DeckCounts = ({cardList, currDeck}) => {

  return(<>
      
      {cardList.map((card,index) => {
        return (<div className={`row r${index}`} key={`card-counts-${card.number.replace("_","").toLowerCase()}`}>
          <div className='count'>
            <CardCount core count={card.decks[currDeck]}/>
          </div>
          <div className='need'>
            <CardCount need core count={deckNeed(card,currDeck)}/>
          </div>
          <div className='completion'>
            <p><img src={deckNeed(card,currDeck) === 0 && CompleteAll}/></p>
          </div>
        </div>)
      })}
  </>)
}
