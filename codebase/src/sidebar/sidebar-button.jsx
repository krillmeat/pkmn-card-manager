import React, {useEffect,useState} from 'react';


export const SidebarButton = ({label,click = ()=>{} }) => {
  return(<li>
    <button onClick={click}>{label}</button>
  </li>)
}
