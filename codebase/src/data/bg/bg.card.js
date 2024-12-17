import { BF_CARDS } from "../bf/bf.card";

const ROCKET = {
  RO_7: {name: 'Dark Golbat', cardType:'pkmn', type: 'grass'},
  RO_15: {name: 'Here Comes Team Rocket', cardType:'trainer'},
  RO_17: {name: 'Rainbow Energy', cardType:'sEnergy'},
  RO_66: {name: 'Rattata', cardType:'pkmn', type: 'colorless'},
  RO_68: {name: 'Squirtle', cardType:'pkmn', type: 'water'},
  RO_69: {name: 'Voltorb', cardType:'pkmn', type: 'lightning'},

  RO_77: {name: 'Nightly Garbage Run', cardType:'trainer', subType:'rocket'},
  RO_78: {name: 'Goop Gas Attack', cardType:'trainer'},

  RO_83: {name: 'Dark Raichu', cardType:'pkmn', type: 'lightning'},
};

const GYM_HEROES = {
  G1_16: {name: 'Erika', cardType:'trainer'},
  G1_26: {name: "Erika's Victreebel", cardType:'pkmn', type: 'grass'},

  G1_49: {name: "Erika's Weepinbell", cardType:'pkmn', type: 'grass'},

  G1_67: {name: "Brock's Mankey", cardType:'pkmn', type: 'fighting'},

  G1_76: {name: "Erika's Bellsprout", cardType:'pkmn', type: 'grass'},

  G1_104: {name: "The Rocket's Training Gym", cardType:'trainer', subType:'stadium'},
  G1_111: {name: 'Good Manners', cardType:'trainer'},
  G1_118: {name: 'Secret Mission', cardType:'trainer'},
  G1_125: {name: "Sabrina's Gaze", cardType:'trainer'},
  G1_126: {name: 'Trash Exchange', cardType:'trainer'},
};

const GYM_CHALLENGE = {
  G2_121: {name: "Sabrina's Psychic Control", cardType:'item'},
  G2_126: {name: 'Warp Point', cardType:'trainer'},
};

const SOUTHERN_ISLANDS = {
  SI_3: {name:'Onix', cardType:'pkmn',type:'fighting'}
}

export const BG_CARDS = {
  ...BF_CARDS,
  RO: ROCKET,
  G1: GYM_HEROES,
  G2: GYM_CHALLENGE,
  SI: SOUTHERN_ISLANDS
}
