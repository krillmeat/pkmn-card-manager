import React, {useEffect,useMemo,useState} from 'react';

// import GenOneBasic from '../../../images/cards/frames/frame_genone_basic.svg';
// import GenOneStageOne from '../../../images/cards/frames/frame_genone_stageOne.svg';
// import GenOneStageTwo from '../../../images/cards/frames/frame_genone_stageTwo.svg';

// import GenTwoBasic from '../../../images/cards/frames/frame_gentwo_basic.svg';
// import GenTwoStageOne from '../../../images/cards/frames/frame_gentwo_stageOne.svg';
// import GenTwoStageTwo from '../../../images/cards/frames/frame_gentwo_stageTwo.svg';

import { CARD_FRAME_IMG } from '../../../images/cards/frames/frames.img';

export const CardFrame = ({CARD_DATA,format}) => {

  const SUB_TYPE = useMemo(()=>{
    if(CARD_DATA.cardType === 'pkmn') return CARD_DATA.stage;
    return CARD_DATA.cardType || ''; 
  },[CARD_DATA])

  return(<div className='card-frame'>
    <img src={CARD_FRAME_IMG[format][SUB_TYPE]?.LINES} />
  </div>)
}
