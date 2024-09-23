import React, {useContext, useEffect,useMemo,useState} from 'react';
import { CardContext } from '../../app';

import './card-info.css';
import { FORMATS } from '../../data/formats.data';
import { getSet } from '../../cards.util';
import { IMG } from '../../images/images';


export const CardInfo = ({cardList}) => {

  const [context] = useContext(CardContext);

  if(!cardList || cardList.length === 0) return null;

  return(<div className='table-section card-info'>
    
    {cardList.map((card,index) => {
      let data = FORMATS[context.format].cards[getSet(card.number)][card.number];
      return (<div className={`row r${index}`} key={`card-info-${card.number.replace("_","").toLowerCase()}`}>
        <p className='number'>{card.number.replace("_","")}</p>
        <p className='type-icon'>{data.type && <img src={IMG.ENERGY[data.type.toUpperCase()] }/>}</p>
        <p className='name'>{data.name}</p>
      </div>)
    })}

  </div>)
}
