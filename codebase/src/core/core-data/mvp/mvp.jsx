import React, {useContext, useEffect,useState} from 'react';
import { CardContext } from '../../../app';
import { getTotalCount } from '../../decklists/decks.core';

const higherThanAny = (total,currentList) => {
  for(let c of currentList){
    if(total > c.total) return true;
  }

  return false;
}

const getLowest = currentList => {
  let lowest;
  for(let c in currentList){
    if(currentList[c].total) console.log("")
  }

  return lowest;
}

const addNewRemoveLowest = (newest,currentList) => {

}

export const MVPs = () => {

  const [context] = useContext(CardContext);

  const getMVPs = amount => {
    let mvps = [];
    for(let card of context.cardArray){
      let total = getTotalCount(card.decks);
      if(mvps.length === 0) { mvps.push({number: card.number, count: total}); continue; }
      if(higherThanAny(total,mvps)) { console.log("FOUND A HIGHER ONE"); continue; }
    }

    return mvps;
  }

  return(<div className='box'>
    <h2>MVPs</h2>
    {getMVPs(1).map(card => <p key={'mvp-'+card.number.replace("_","")}>{card.number}</p>)}
  </div>)
}
