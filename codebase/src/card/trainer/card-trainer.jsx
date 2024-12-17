import React, {useEffect,useMemo,useState} from 'react';

import Trainer from '../../images/cards/frames/frame_trainer.svg';
import './card-trainer.css';
import { getNumberOfRows } from '../card-builder.util';
import { CardPoints } from '../card-parts/card-points';

const shouldShowTrainerLabel = format => format === 'whatever'; // TODO - Look into whether this is needed at all
const SUB_TEXT = {
  supporter: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card."
}

export const TrainerCard = ({CARD_DATA,format}) => {

  return <>
    { shouldShowTrainerLabel(format) && <p className='trainer-label'>{CARD_DATA.cardType}</p> }

    <p className='text'>
      <span className='main'>{CARD_DATA.text}</span>
      <span className='sub'>{SUB_TEXT[CARD_DATA.cardType]}</span>
    </p>
  </>


  // const modifiers = useMemo(()=>{
  //   let _mods = [];
  //   if(!CARD_DATA.effect) return;
  //   let rowCount = getNumberOfRows(CARD_DATA.effect,32);
    
  //   if(rowCount > 8){ _mods.push('mod-smallest-text')}
  //   else if(rowCount > 6){ _mods.push('mod-small-text') }

  //   if(!!CARD_DATA.subType && CARD_DATA.name.length > 15) _mods.push('mod-small-name');

  //   return _mods.join(" ");
  // },[CARD_DATA])

  // return(<div className={'card trainer ' + (modifiers)}>
  //   <img src={Trainer} />
  //   <div className='card-text'>
  //     <p className='trainer-name'><span>{CARD_DATA.name}</span></p>

  //     {CARD_DATA.subType === 'tool' &&<p className='trainer-sub-type'><span>Pok&eacute;mon Tool</span></p> }

  //     <p className='effect'>
  //       {CARD_DATA.subType === 'tool' && <span className='tool-rule'>Attach this card to 1 of your Pokémon that doesn’t have a Pokémon Tool attached to it.</span>}
  //       <span>{CARD_DATA.effect}</span>
  //     </p>
  //     { !!CARD_DATA.points && <CardPoints points={CARD_DATA.points.BF} /> }
  //   </div>
  // </div>)
}
