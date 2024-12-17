import React, {useEffect,useMemo,useState} from 'react';
import { Energy } from '../energy';

const Weakness = ({weak}) => {
  return <div className='weakness'>
    <span className='label'>weakness</span>
    <Energy type={weak}/>
  </div>
}

const Resistance = ({resist}) => {
  return <div className='resistance'>
    <span className='label'>resistance</span>
    {!!resist && <Energy type={resist}/>}
  </div>
}

const RetreatCost = ({rc}) => {
  const RC_ARRAY = useMemo(()=>{
    let _a = [];
    for(let i = 0; i < rc; i++){ _a.push(0) }
    return _a;
  },[rc]);
  return <div className='rc'>
    <span className='label'>retreat cost</span>
    <div className='rc-list'>{RC_ARRAY.length > 0 && RC_ARRAY.map(index => <Energy type='colorless' />)}</div>
  </div>
}


export const WeakResistRC = ({weak, resist, rc}) => {
  return(<div className='wrrc'>
    <Weakness weak={weak} />
    <Resistance resist={resist} />
    <RetreatCost rc={rc} />
  </div>)
}
