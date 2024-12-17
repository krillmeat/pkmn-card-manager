import React, {useEffect,useMemo,useState} from 'react';


export const PokePower = ({index,data,shifted=false,modifiers}) => {

  const modClasses = useMemo(()=>{
    let _array = [];
    if(modifiers.powerLong) _array.push('mod-power-long');
    if(modifiers.powerSmall) _array.push('mod-power-small');
    return _array.join(" ");
  },[modifiers])

  return(<div className={'poke-power number-'+(index+1)+" "+modClasses}>
    <div className='top'>
      <div className='left'><p className='label'>[PKMN Power]</p></div>
      <div className='right'><p className='name'>{data.name}</p></div>
    </div>
    <p className='text'><span>{data.text}</span></p>
</div>)
}
