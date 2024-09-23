import React, {useEffect,useState} from 'react';

const calcPercent = (curr,max) => Math.ceil((curr/max) * 100);


export const CompletionBar = ({curr,max,label}) => {

  return(<div className='completion-bar'>
    <div className='top'>
      <p>{label}</p>
      <p>{curr}/{max}</p>
    </div>
    <div className='frame'>
      <div className='amount' style={{width: `${calcPercent(curr,max)}%`}}></div>
    </div>
  </div>)
}
