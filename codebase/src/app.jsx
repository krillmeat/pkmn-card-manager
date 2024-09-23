import React, { useEffect, useState } from 'react';
import './reset.css';
import Core from './core/core';
import { buildCoreObject } from './cards.util';
import {FORMATS} from './data/formats.data'
import { getFormatParam } from './url.util';
import { useCoreObj } from './card/useCoreObj';
import { useCardArray } from './card/useCardArray';
import { SidebarNav } from './sidebar/sidebar.nav';
import { DeckView } from './decks/decks';

export const CardContext = React.createContext();

const PAGES = {
  core: Core
}

const DEFAULT_CONTEXT = {
  page: 'core',
  format: getFormatParam(),
}

export const App = () => {
  
  const [page,setPage] = useState('core');
  const [context, setContext] = useState(DEFAULT_CONTEXT);

  const coreObj = useCoreObj(context.format);
  const cardArray = useCardArray(context.format, coreObj);

  useEffect(()=>{
    if(!coreObj || !cardArray) return;
    if(Object.keys(coreObj).length === 0 || cardArray.lenght === 0) return;

    setContext({
      ...context,
      coreObj,
      cardArray,
      deckOrder: Object.keys(FORMATS[getFormatParam()].decks)
    })

    console.log("CORE OBJ: ",coreObj);
    console.log("CARD ARRAY: ",cardArray);
  },[coreObj,cardArray]);

  if(!context || !context?.coreObj || !context?.cardArray || context?.cardArray?.length === 0) return <p>Gathering Data</p>;

  return (
    <div className="App">
      <CardContext.Provider value={[context,setContext]}>
        <SidebarNav />
        {context.page === 'core' && <Core />}
        {context.page === 'decks' && <DeckView />}
      </CardContext.Provider>
    </div>
  );
}
