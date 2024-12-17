import React from 'react';
import { CompletionBar } from '../../core/core-data/completion/completion-bar';

import './deck-data-area.css';


export const DeckDataArea = ({currDeck,totalOwned,source}) => {
  return(<div className='data-area'>
    <div className='deck-heading'>
      <h2>{currDeck.replace("_"," ")}</h2>
      <div>
        <CompletionBar curr={totalOwned} max={60} label='Deck Completion'/>
      </div>
      {!!source &&<div className='source'>
        <p className='author'>Author: {source.author} <a href={source.link}>[source]</a></p>
        {source.modifiedForEN && <p className='modified-note'>This decklist has been modified to fit the EN format.</p>}
      </div>}
    </div>
  </div>)
}
