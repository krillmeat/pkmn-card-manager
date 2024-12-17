import React, {useEffect,useMemo,useState} from 'react';
import { Energy } from '../energy';

import POKE_BODY_ICON from '../../images/icons/pokeBody.svg';
import POKE_POWER_ICON from '../../images/icons/pokePower.svg';

const COST_CLASSES = {
  0: 'free',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four'
}

const Attack = ({data}) => {
  return <div className='effect attack'>
    <div className='top'>
      <div className={'cost '+COST_CLASSES[data.cost.length]}>{
        data.cost.map(energy => <Energy type={energy} />)
      }</div>
      <p className='name'>{data.name}</p>
      <p className='dmg'>{data.dmg}</p>
    </div>
    {!!data.text && <div className='text'>{data.text}</div>}
  </div>
}

const Body = ({data}) => {
  return <div className='effect body'>
    <div className='top'>
      <img src={POKE_BODY_ICON} />
      <p className='name'>{data.name}</p>
    </div>
    <p className='text'>{data.text}</p>
  </div>
}

const Power = ({data}) => {
  return <div className='effect power'>
    <div className='top'>
      <img src={POKE_POWER_ICON} />
      <p className='name'>{data.name}</p>
    </div>
    <p className='text'>{data.text}</p>
  </div>
}


export const EffectAreaModern = ({effects}) => {

  const calcEffectTop = useMemo(()=>{

    if(effects.length === 1) return 'effect-spacing-0';
    if(effects.length === 3) return 'effect-spacing-triple';
    if(!effects[0].text && !effects[1].text) return 'effect-spacing-3';

    let oL = !!effects[0].text ? Math.ceil(effects[0].text.length / 52) : 0; // Effect One's Lines
    let tL = !!effects[1].text ? Math.ceil(effects[1].text.length / 52) : 0; // Effect Two's Lines
    let totalLines = oL + tL;

    if(totalLines === 3) return 'effect-spacing-3';
    if(totalLines === 4 || totalLines === 5) return 'effect-spacing-2';
    if(totalLines === 5 || totalLines === 6) return 'effect-spacing-1';
    if(totalLines === 7 || totalLines === 8) return 'effect-spacing-5';
    if(totalLines > 8) return 'effect-spacing-6';

    return `effect-spacing-0`;
  },[effects])

  return(<div className='effect-area modern'><div className={calcEffectTop}>
    {effects.map(effect => {
      if(effect.type === 'attack') return <Attack data={effect} />
      if(effect.type === 'body') return <Body data={effect} />
      if(effect.type === 'power') return <Power data={effect} />
      return null;
    })}
  </div></div>)
}
