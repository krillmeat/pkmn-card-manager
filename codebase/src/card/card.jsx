import React, {useEffect,useState,useMemo} from 'react';

import './card.css';
import { CardFrame } from './card-parts/card-frame/card-frame';
import { PkmnCard } from './card-pkmn';
import { TrainerCard } from './trainer/card-trainer';

const TRAINER_TYPES = ['trainer','item','supporter','tool','stadium'];


export const Card = ({CARD_DATA,format}) => {

  const cardClass = useMemo(()=>{
    let _classes = ['card'];

    _classes.push(format);
    _classes.push(CARD_DATA.cardType);

    if(CARD_DATA.cardType === 'pkmn'){
      _classes.push(CARD_DATA.stage);
      _classes.push(CARD_DATA.type);
    }

    
    // _classes.push('in-color');

    return _classes.join(" ");
  },[CARD_DATA,format]);

  return(<div className={cardClass}>

    <CardFrame CARD_DATA={CARD_DATA} format={format} />

    <div className='card-text'>
      <p className={`card-name`}><span>{CARD_DATA.name}</span></p>

      {CARD_DATA.cardType === 'pkmn' && <PkmnCard CARD_DATA={CARD_DATA} format={format} /> }
      {TRAINER_TYPES.includes(CARD_DATA.cardType) && <TrainerCard CARD_DATA={CARD_DATA} /> }

    </div>

  </div>)
}
