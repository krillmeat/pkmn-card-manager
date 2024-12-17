import React from 'react';

import GRASS_ENERGY from '../images/cards/energy/energy_grass.svg';
import FIRE_ENERGY from '../images/cards/energy/energy_fire.svg';
import WATER_ENERGY from '../images/cards/energy/energy_water.svg';
import LIGHTNING_ENERGY from '../images/cards/energy/energy_lightning.svg';
import PSYCHIC_ENERGY from '../images/cards/energy/energy_psychic.svg';
import FIGHTING_ENERGY from '../images/cards/energy/energy_fighting.svg';
import DARKNESS_ENERGY from '../images/cards/energy/energy_darkness.svg';
import METAL_ENERGY from '../images/cards/energy/energy_metal.svg';
import COLORLESS_ENERGY from '../images/cards/energy/energy_colorless.svg';

const ENERGY = {
  grass: GRASS_ENERGY,
  fire: FIRE_ENERGY,
  water: WATER_ENERGY,
  lightning: LIGHTNING_ENERGY,
  psychic: PSYCHIC_ENERGY,
  fighting: FIGHTING_ENERGY,
  darkness: DARKNESS_ENERGY,
  metal: METAL_ENERGY,
  colorless: COLORLESS_ENERGY,
}


export const Energy = ({type}) => {
  return(<div className={'energy '+type}><img src={ENERGY[type]} /></div>)
}
