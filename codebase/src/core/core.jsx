import React, {useContext, useEffect,useMemo,useState} from 'react';

import './core.css';
import { CardContext } from '../app';
import { useSortedCardList } from '../card/useSortedCardList';
import { CoreHeading } from './heading';
import { CoreData } from './core-data/core-data';
import { CardTable } from '../table/table';


const Core = () => {

  const [context] = useContext(CardContext);

  const sortedCardList = useSortedCardList();

  if(!sortedCardList) return <p>Sorting...</p>

  return(<>
    <CoreData />
    <div className='core'>
      <CardTable cardList={sortedCardList} decks/>
    </div>
  </>)
}

export default Core;
