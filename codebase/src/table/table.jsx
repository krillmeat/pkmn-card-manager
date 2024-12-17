import React from 'react';
import {CardInfo} from '../core/card-info/card-info.core';
import { Decklists } from '../core/decklists/decks.core';
import {Counts as OldCounts} from '../core/count/count.core';
import { Counts } from './count/table-count';

import './table.css';
import { CoreHeading } from '../core/heading';


export const CardTable = ({cardList, info = true, decks = false, counts = true, view='core', currDeck='', showOwned=false}) => {
  return(<div className={`card-table ${!decks && 'no-decks'}`}>
    <CoreHeading decks={decks} view={view} showOwned={showOwned}/>
    <div className='body'><div className='wrap'>
        {info && <CardInfo cardList={cardList}/>}
        {view === 'core' && <Decklists cardList={cardList}/>}
        {counts && <Counts cardList={cardList} view={view} currDeck={currDeck} showOwned={showOwned}/>}
      </div></div>
  </div>)
}
