import React, {useContext, useEffect,useState} from 'react';
import {CardContext} from '../app';
import { SidebarButton } from './sidebar-button';

import './nav.css';


export const SidebarNav = () => {

  const [context,setContext] = useContext(CardContext);

  const setPage = page => {
    setContext({
      ...context,
      page: page
    })
  }

  return(<nav className='sidebar'>
    <ul>
      <SidebarButton label='Core' click={() => { setPage('core') }} />
      <SidebarButton label='Decks'  click={() => { setPage('decks') }} />
    </ul>
  </nav>)
}
