import React, {useEffect,useMemo,useState} from 'react';

const isDoubleDigit = count => count > 9;
const isZero = count => count === 0

export const CardCount = ({count,decklist = false}) => {

  const classes = useMemo(()=>{
    return `c ${isDoubleDigit(count) ? 'small-text' : ''} ${isZero(count) ? 'fade' : ''}`;
  },[count]);

  if(decklist && count === 0) return (<p className={classes}></p>);

  return(<p className={classes}>{count}</p>)
}
