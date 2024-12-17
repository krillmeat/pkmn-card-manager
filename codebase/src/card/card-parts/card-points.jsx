import React, {useEffect,useState,useMemo} from 'react';


export const CardPoints = ({points}) => {

  const pointArray = useMemo(()=>{
    let _array = [];
    for(let i = 0; i < points; i++){ _array.push(i) }
    return _array;
  },[points]);

  return(<div className='points'>
    {pointArray.map(i=>{
      return <p>✦</p>
    })}
  </div>)
}
