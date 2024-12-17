import React, {useContext, useEffect,useMemo,useState} from 'react';
import { CardContext } from '../../app';

import './card-info.css';
import { FORMATS } from '../../data/formats.data';
import { getSet } from '../../cards.util';
import { IMG } from '../../images/images';
import { CardWindow } from '../../card/card-window/card-window';


export const CardInfo = ({cardList}) => {

  const [context] = useContext(CardContext);

  const [shownCard, setShownCard] = useState();

  const clickCard = cardNumber => {
    if(!shownCard){
      console.log("CLICKED ON: ",cardNumber);
      setShownCard(cardNumber);
    } else{ setShownCard(undefined) }
  }

  if(!cardList || cardList.length === 0) return null;


  

  return(<div className='table-section card-info'>
    {shownCard && <CardWindow number={shownCard} closeCallback={()=>{setShownCard(undefined)}} />}
    {cardList.map((card,index) => {
      let data = FORMATS[context.format].cards[getSet(card.number)][card.number];
      return (<div className={`row r${index}`} key={`card-info-${card.number.replace("_","").toLowerCase()}`} onClick={()=>{clickCard(card.number)}}>
        <p className='number'>{card.number.replace("_","")}</p>
        <p className='type-icon'>{data.type && <img src={IMG.ENERGY[data.type.toUpperCase()] }/>}</p>
        <p className='name'>{data.name}</p>
      </div>)
    })}

  </div>)
}
