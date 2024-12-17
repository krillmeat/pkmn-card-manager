import React, {useContext,useEffect,useMemo,useState} from 'react';
import { Energy } from './energy';

import { EffectArea } from './card-parts/effect-area';

import GenOneBasic from '../images/cards/frames/frame_genone_basic.svg';
import GenOneStageOne from '../images/cards/frames/frame_genone_stageOne.svg';
import GenOneStageTwo from '../images/cards/frames/frame_genone_stageTwo.svg';

import GenTwoBasic from '../images/cards/frames/frame_gentwo_basic.svg';
import GenTwoStageOne from '../images/cards/frames/frame_gentwo_stageOne.svg';
import GenTwoStageTwo from '../images/cards/frames/frame_gentwo_stageTwo.svg';

import { CARD_FRAME_IMG } from '../images/cards/frames/frames.img';

import { CardPoints } from './card-parts/card-points';

import './styles/hgss-card.css';
import { PKMNHP } from './card-parts/pkmn-hp';
import { WeakResistRC } from './card-parts/weak-resist-rc';
import { EffectAreaModern } from './card-parts/effect-area-modern';
import { PKMNStage } from './card-parts/pkmn-stage';

// const FRAMES = {
//   GenOne: {
//     basic: GenOneBasic,
//     stageOne: GenOneStageOne,
//     stageTwo: GenOneStageTwo,
//   },
//   GenTwo: {
//     basic: GenTwoBasic,
//     stageOne: GenTwoStageOne,
//     stageTwo: GenTwoStageTwo,
//   }
// }

const isTitled = cardName => cardName.indexOf("Dark ") !== -1;

// // const getGen = gen => !!gen ? (gen === 1 ? 'GenOne' : 'GenTwo') : 'GenOne';

export const PkmnCard = ({CARD_DATA}) => {

  return( <>

    <div className='pkmn-type'><Energy type={CARD_DATA.type} /></div>

    <PKMNStage stage={CARD_DATA.stage} evoFrom={CARD_DATA.evoFrom} />
    <PKMNHP hp={CARD_DATA.hp} />

    <EffectAreaModern effects={CARD_DATA.effects} />

    <WeakResistRC weak={CARD_DATA.weakness} resist={CARD_DATA.resistance} rc={CARD_DATA.rc} />
</>)
}
