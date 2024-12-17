import React, {useContext, useEffect,useState} from 'react';

import './card-list.css';

import { CardContext } from '../app';
import { FORMATS } from '../data/formats.data';

import { BASE_SET_ORDER } from '../data/bf/bf.card';
import { PkmnCard } from './card-pkmn';
import { TrainerCard } from './trainer/card-trainer';
import { BN_CARDS } from '../data/bn/bn.card';
import { HGSS_CARDS } from '../data/hgss/hgss.card';

export const CardList = () => {

  const [context] = useContext(CardContext);
  const format = context.format;

  // const ALL_CARD_DATA = BN_CARDS;
  const ALL_CARD_DATA = HGSS_CARDS;

  const TEMP_CARDS = ['UD_24','UD_27','UD_60','HS_109','HS_35','HS_59','TM_98','TM_92','UL_23', 'TM_93', 'TM_94'];

  // const CARD_ORDER = FORMATS[format].cardOrder.JP;
  const CARD_ORDER = TEMP_CARDS;
  // console.log("CARD_ORDER:",CARD_ORDER)

  return(
  <div className='card-list'>
  {
    CARD_ORDER.map(card => {
      let CARD_DATA = ALL_CARD_DATA[card.split("_")[0]][card];
      return(
  <div className='card-wrap size-lg lang-jp'>
   {CARD_DATA.cardType === 'pkmn' && <PkmnCard CARD_DATA={CARD_DATA} format={format} /> }
   {CARD_DATA.cardType === 'trainer' && <TrainerCard CARD_DATA={CARD_DATA} /> }
  </div>)
  } )}
  </div>)
}
