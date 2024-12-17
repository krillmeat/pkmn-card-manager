import React, {useEffect,useState,useMemo} from 'react';
import { Energy } from '../energy';

export const PkmnAttack = ({data,index,modifiers}) => {

  const modClasses = useMemo(()=>{
    let _array = [];
    if(modifiers.attackLong) _array.push('mod-attack-long');
    if(index === 1 && modifiers.attackTwoSmall) _array.push('mod-attack-small');
    if(!data.dmg) _array.push('mod-attack-no-dmg')
    return _array.join(" ");
  },[modifiers])

  return <div className={'attack number-'+(index+1)+" "+modClasses}>
            <div className='left'>
              {data.cost.map(energy => {
                return <Energy type={energy}/>  
              })}
            </div>
            <div className="center">
              <p className='attack-name'>{data.name}</p>
              {!!data.text && <p className='attack-text'>{data.text}</p>}
            </div>
            {!!data.dmg && <div className='right'>
              <p className={`attack-dmg${typeof data.dmg === 'string' ? ' offset' : ''}`}>{data.dmg}</p>
            </div>}
          </div>
}
