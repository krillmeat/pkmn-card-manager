import React, {useMemo} from 'react';


export const PKMNHP = ({hp = 40}) => {

  const className = useMemo(()=> hp >= 100 ? 'pkmn-hp triple-digit' : 'pkmn-hp', [hp]);

  return(<p className={className}><span>
      <span className='label'>HP</span><span className='value'>{hp}</span>
    </span></p>)
}
