import React, {useContext, useEffect,useState} from 'react';
import { HGSS_CARDS } from '../../data/hgss/hgss.card';
import { PkmnCard } from '../card-pkmn';
import { CardContext } from '../../app';

import './card-window.css';
import { TrainerCard } from '../trainer/card-trainer';
import { Card } from '../card';


export const CardWindow = ({number, closeCallback}) => {
  const [context] = useContext(CardContext);
  let set = number.split("_")[0];
  const CARD_DATA = HGSS_CARDS[set][number];
  return <div className='card-window' onClick={closeCallback}>
    <div className='modal'>
      <div className='card-wrap size-lg lang-jp'>
        {/* {CARD_DATA.cardType === 'pkmn' && <PkmnCard CARD_DATA={CARD_DATA} format={context.format} /> }
        {CARD_DATA.cardType === 'trainer' && <TrainerCard CARD_DATA={CARD_DATA} format={context.format} />} */}
        <Card CARD_DATA={CARD_DATA} format={context.format} />
      </div>
    </div>
  </div>
}
