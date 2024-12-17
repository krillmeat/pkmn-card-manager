import React, {useEffect,useMemo,useState} from 'react';
import { PkmnAttack } from './attack';
import { PokePower } from './pkmn-power';
import { getNumberOfRows } from '../card-builder.util';

import './effect-area.css';
import { useEffectModifiers } from './effect-area/useEffectModifiers';


export const EffectArea = ({data}) => {

  const getModifiers = () => "";

  const modifiers = useEffectModifiers(data.effects);

  const modClass = useMemo(()=>{
    let _array = [];
    if(modifiers.shiftAttackTextLeftOne) _array.push("mod-shift-attacks-left-one");
    if(modifiers.shiftAttackTextLeftTwo) _array.push("mod-shift-attacks-left-two");
    if(modifiers.tightenVerticalSpace) _array.push("mod-vert-tighten");
    if(modifiers.expandVerticalSpace) _array.push("mod-vert-expand");
    return _array.join(" ");
  },[modifiers])


  return(<div className={`effect-area number-${data.effects.length} ${modClass}`}>
    {data.effects.map((effect,index) => {
      return <>
      {effect.type === 'power' && <PokePower index={index} data={effect} modifiers={modifiers} />}
      {effect.type === 'attack' && <PkmnAttack index={index} data={effect} modifiers={modifiers}/>}
      </>
    })}
    </div>)
}
