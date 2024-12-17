import React, {useEffect,useMemo,useState} from 'react';
import { IMG } from '../images/images';

import './archetype.css';


export const ArchetypeSelect = ({decks}) => {

  const archetypes = useMemo(()=>{
    let _obj = {};
    let _array =[];

    for(let deck of Object.keys(decks)){
      let mascots = decks[deck].mascots;
      let m1 = mascots[0];
      let m2 = mascots[1];
      if(!!_obj[m1]){
        _obj[m1]++;
      } else{ _obj[m1] = 1 }

      if(!!m2){
        if(!!_obj[m2]){
          _obj[m2]++;
        } else{ _obj[m2] = 1 }
      }
    }


    for(let key of Object.keys(_obj)){
      _array.push(key);
    }

    return _array;
  },[decks]);

  return(<div className='archetype-select'>
    {archetypes.map(archetype => {
      return <div className='archetype'><img src={IMG.PKMN[archetype]}/></div>
    })}
    <div className='archetype'><img src={IMG.PKMN['ditto-s']}/></div>
  </div>)
}
