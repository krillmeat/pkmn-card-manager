import React, {useEffect,useState} from 'react';

const DISPLAY_STAGES = {
  basic: 'basic',
  basicPrime: 'basic',
  stageOne: 'stage 1',
  stageOnePrime: 'stage 1',
  stageTwo: 'stage 2',
  stageTwoPrime: 'stage 2'
}


export const PKMNStage = ({stage, evoFrom}) => {
  return(<>
    <p className='pkmn-stage'><span>{DISPLAY_STAGES[stage]}</span></p>
    {!!evoFrom && <p className='evo-from'><span>Evolves from {evoFrom}</span></p>}
  </>)
}
