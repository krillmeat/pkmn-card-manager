import React, {useContext, useEffect,useState} from 'react';
import { CardContext } from '../app';
import { FORMATS } from '../data/formats.data';
import { IMG } from '../images/images';

export const CoreHeading = ({info = true, decks = false, counts = true, showOwned=false}) => {

  const [context] = useContext(CardContext);

  const onScroll = e => { document.querySelector(".table-section.decks").scrollLeft = e.target.scrollLeft }

  return(<div className='heading'>
    {info && <div className='info'>Card</div>}
    {decks && <div className='decks' onScroll={onScroll}>
      {context.deckOrder.map(deck => {
        let mascot = FORMATS[context.format].decks[deck].mascots[0];
        let img = IMG.PKMN[mascot];
        return (<div className='img-wrap' key={`deck-icon-${mascot}`}>
          <img src={img}/>
        </div>)
      })}
      <div className='img-wrap'> <img src={IMG.PKMN['ditto-s']}/> </div>
    </div>}
    {counts && <div className={'count'+(showOwned ? ' show-owned' : ' hide-owned')}>Counts</div> }
  </div>)
}
