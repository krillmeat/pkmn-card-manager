import React, {useContext, useEffect,useState} from 'react';
import { CompletionBar } from './completion-bar';
import {CardContext} from '../../../app';
import { FORMATS } from '../../../data/formats.data';
import { getSet } from '../../../cards.util';


export const CompletionAnalytics = () => {

  const [context] = useContext(CardContext);

  const calcTotalOwned = (cardArray,players = 2, coreOnly = false) => {
    let total = 0;
    for(let card of cardArray){
      if(FORMATS[context.format].cards[getSet(card.number)][card.number].cardType === 'bEnergy') continue;
      let haveCoreSingle = card.counts.core - card.need.core.single;
      let haveCoreDouble = card.counts.core - card.need.core.double;
      let haveDeck = card.counts.deck - card.need.deck;

      total += haveCoreSingle;
      if(players === 2) total += haveCoreDouble;
      if(!coreOnly) total += haveDeck;
    }
    return total;
  }

  const calcCoreTotal = (cardArray, players = 2, coreOnly = false) => {
    let total = 0;
    for(let card of cardArray){
      if(FORMATS[context.format].cards[getSet(card.number)][card.number].cardType === 'bEnergy') continue;
      total += (card.counts.core * players);
      if(!coreOnly) total += card.counts.deck;
    }
    return total;
  }

  return(<div className='box completion'>
    <h2>Completion</h2>
    <CompletionBar curr={calcTotalOwned(context.cardArray)} max={calcCoreTotal(context.cardArray)} label='Total (Two-Player)' />
    <CompletionBar curr={calcTotalOwned(context.cardArray,1)} max={calcCoreTotal(context.cardArray,1)} label='Total (One-Player)' />

    <CompletionBar curr={calcTotalOwned(context.cardArray,2,true)} max={calcCoreTotal(context.cardArray,2,true)} label='Core (Two-Player)' />
    <CompletionBar curr={calcTotalOwned(context.cardArray,1,true)} max={calcCoreTotal(context.cardArray,1,true)} label='Core (One-Player)' />
  </div>)
}
