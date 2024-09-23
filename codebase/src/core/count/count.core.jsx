import React from 'react';
import {CardCount} from './card-count';

import CompleteAll from '../../images/icons/complete-all.png';
import CompleteSingle from '../../images/icons/complete-single.png';
import CompleteCollection from '../../images/icons/complete-collection.png';

const calcCompletion = (need) => {
  // if( need.core.single + need.core.double + need.deck <=  ) return CompleteCollection;
  if( need.core.single + need.core.double + need.deck === 0 ) return CompleteAll;
  if( need.core.single + need.deck === 0 ) return CompleteSingle;
  return "";
}

export const CoreCounts = ({cardList}) => {

  return(<>
    
    {cardList.map((card,index) => {
      return (<div className={`row r${index}`} key={`card-counts-${card.number.replace("_","").toLowerCase()}`}>
        <div className='count'>
          <CardCount core count={card.counts.core}/>
          <CardCount deck count={card.counts.deck}/>
        </div>
        <div className='need'>
          <CardCount need core count={card.need.core.single}/>
          <CardCount need core count={card.need.core.double}/>
          <CardCount need deck count={card.need.deck}/>
        </div>
        <div className='completion'>
          <p><img src={calcCompletion(card.need)}/></p>
        </div>
      </div>)
    })}

  </>)
}
