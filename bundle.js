'use strict';

const HS = {
  //POKEMON
  HS_1: {
    name: 'Arcanine',
    cardType: 'pkmn',
    type: 'fire'
  },
  HS_2: {
    name: 'Azumarill',
    cardType: 'pkmn',
    type: 'water'
  },
  HS_3: {
    name: 'Clefable',
    cardType: 'pkmn'
  },
  HS_4: {
    name: 'Gyardos',
    cardType: 'pkmn',
    type: 'water'
  },
  HS_5: {
    name: 'Hitmontop',
    cardType: 'pkmn'
  },
  HS_6: {
    name: 'Jumpluff',
    cardType: 'pkmn',
    type: 'grass'
  },
  HS_7: {
    name: 'Ninetales',
    cardType: 'pkmn',
    type: 'fire'
  },
  HS_8: {
    name: 'Noctowl',
    cardType: 'pkmn'
  },
  HS_9: {
    name: 'Quagsire',
    cardType: 'pkmn',
    type: 'water'
  },
  HS_10: {
    name: 'Raichu',
    cardType: 'pkmn',
    type: 'lightning'
  },
  HS_11: {
    name: 'Shuckle',
    cardType: 'pkmn'
  },
  HS_12: {
    name: 'Slowking',
    cardType: 'pkmn',
    type: 'psychic'
  },
  HS_13: {
    name: 'Wobbuffet',
    cardType: 'pkmn',
    type: 'psychic'
  },
  HS_14: {
    name: 'Ampharos',
    cardType: 'pkmn',
    type: 'lightning'
  },
  HS_15: {
    name: 'Ariados',
    cardType: 'pkmn',
    type: 'grass'
  },
  HS_16: {
    name: 'Butterfree',
    cardType: 'pkmn'
  },
  HS_17: {
    name: 'Cleffa',
    cardType: 'pkmn',
    type: 'colorless'
  },
  HS_18: {
    name: 'Exeggutor',
    cardType: 'pkmn'
  },
  HS_19: {
    name: "Farfetch'd",
    cardType: 'pkmn'
  },
  HS_20: {
    name: 'Feraligatr',
    cardType: 'pkmn',
    type: 'water'
  },
  HS_21: {
    name: 'Furret',
    cardType: 'pkmn'
  },
  HS_22: {
    name: 'Granbull',
    cardType: 'pkmn'
  },
  HS_23: {
    name: 'Hypno',
    cardType: 'pkmn',
    type: 'psychic'
  },
  HS_24: {
    name: 'Lapras',
    cardType: 'pkmn'
  },
  HS_25: {
    name: 'Ledian',
    type: 'grass'
  },
  HS_26: {
    name: 'Meganium',
    type: 'grass'
  },
  HS_27: {
    name: 'Persian',
    type: 'colorless'
  },
  HS_28: {
    name: 'Pichu',
    cardType: 'pkmn',
    type: 'lightning'
  },
  HS_29: {
    name: 'Sandslash'
  },
  HS_30: {
    name: 'Smoochum',
    type: 'psychic'
  },
  HS_31: {
    name: 'Sunflora',
    cardType: 'pkmn',
    type: 'grass'
  },
  HS_32: {
    name: 'Typhlosion',
    type: 'fire'
  },
  HS_33: {
    name: 'Tyrogue',
    cardType: 'pkmn',
    type: 'fighting'
  },
  HS_34: {
    name: 'Weezing'
  },
  HS_35: {
    name: 'Bayleef',
    cardType: 'pkmn',
    type: 'grass'
  },
  HS_36: {
    name: 'Blissey',
    type: 'colorless'
  },
  HS_37: {
    name: 'Corsola',
    type: 'water'
  },
  HS_38: {
    name: 'Croconaw',
    cardType: 'pkmn',
    type: 'water'
  },
  HS_39: {
    name: 'Delibird',
    type: 'water'
  },
  HS_40: {
    name: 'Donphan'
  },
  HS_41: {
    name: 'Dunsparce'
  },
  HS_42: {
    name: 'Flaafy',
    type: 'lightning'
  },
  HS_43: {
    name: 'Heracross'
  },
  HS_44: {
    name: 'Igglybuff'
  },
  HS_45: {
    name: 'Mantine',
    type: 'water'
  },
  HS_46: {
    name: 'Metapod'
  },
  HS_47: {
    name: 'Miltank',
    type: 'colorless'
  },
  HS_48: {
    name: 'Parasect',
    type: 'grass'
  },
  HS_49: {
    name: 'Quilava',
    cardType: 'pkmn',
    type: 'fire'
  },
  HS_58: {
    name: 'Chansey',
    cardType: 'pkmn',
    type: 'colorless'
  },
  HS_59: {
    name: 'Chikorita',
    cardType: 'pkmn',
    type: 'grass'
  },
  HS_61: {
    name: 'Cyndaquil',
    cardType: 'pkmn',
    type: 'fire'
  },
  HS_77: {
    name: 'Phanpy',
    cardType: 'pkmn',
    type: 'fighting'
  },
  HS_81: {
    name: 'Slowpoke',
    cardType: 'pkmn',
    type: 'water'
  },
  HS_85: {
    name: 'Sunkern',
    cardType: 'pkmn',
    type: 'grass'
  },
  HS_86: {
    name: 'Totodile',
    cardType: 'pkmn',
    type: 'water'
  },
  // TMAINERS/SPECIAL ENERGY
  HS_90: {
    name: 'Copycat',
    cardType: 'supporter'
  },
  HS_92: {
    name: 'Fisherman',
    cardType: 'supporter'
  },
  HS_96: {
    name: 'Pokegear',
    cardType: 'trainer'
  },
  HS_97: {
    name: 'Pokemon Collector',
    cardType: 'supporter'
  },
  HS_98: {
    name: 'Pokemon Communication',
    cardType: 'trainer'
  },
  HS_99: {
    name: 'Pokemon Reversal',
    cardType: 'trainer'
  },
  HS_100: {
    name: "Professor Elm's Training Method",
    cardType: 'supporter'
  },
  HS_101: {
    name: "Professor Oak's New Theory",
    cardType: 'supporter'
  },
  HS_102: {
    name: 'Switch',
    cardType: 'trainer'
  },
  HS_103: {
    name: 'Double Colorless Energy',
    cardType: 'sEnergy'
  },
  HS_104: {
    name: 'Rainbow Energy',
    cardType: 'sEnergy'
  },
  // PRIMES
  HS_106: {
    name: 'Blissey',
    cardType: 'pkmn',
    type: 'colorless'
  },
  HS_107: {
    name: 'Donphan',
    cardType: 'pkmn',
    type: 'fighting'
  },
  HS_108: {
    name: 'Feraligatr',
    cardType: 'pkmn',
    type: 'water'
  },
  HS_109: {
    name: 'Meganium',
    cardType: 'pkmn',
    type: 'grass'
  },
  HS_110: {
    name: 'Typhlosion',
    cardType: 'pkmn',
    type: 'fire'
  },
  //ENERGIES
  HS_115: {
    name: 'Grass Energy',
    cardType: 'bEnergy',
    type: 'grass'
  },
  HS_116: {
    name: 'Fire Energy',
    cardType: 'bEnergy',
    type: 'fire'
  },
  HS_117: {
    name: 'Water Energy',
    cardType: 'bEnergy',
    type: 'water'
  },
  HS_118: {
    name: 'Lightning Energy',
    cardType: 'bEnergy',
    type: 'lightning'
  },
  HS_119: {
    name: 'Psychic Energy',
    cardType: 'bEnergy',
    type: 'psychic'
  },
  HS_120: {
    name: 'Fighting Energy',
    cardType: 'bEnergy',
    type: 'fighting'
  },
  HS_121: {
    name: 'Darkness Energy',
    cardType: 'bEnergy',
    type: 'dark'
  },
  HS_122: {
    name: 'Metal Energy',
    cardType: 'bEnergy',
    type: 'metal'
  }
};
const UL = {
  UL_1: {
    name: 'Jirachi',
    cardType: 'pkmn',
    type: 'psychic'
  },
  UL_8: {
    name: 'Shaymin',
    cardType: 'pkmn',
    type: 'grass'
  },
  UL_13: {
    name: 'Blastoise',
    cardType: 'pkmn',
    type: 'water'
  },
  UL_23: {
    name: 'Roserade',
    cardType: 'pkmn',
    type: 'grass'
  },
  UL_38: {
    name: 'Pupitar',
    cardType: 'pkmn',
    type: 'fighting'
  },
  UL_40: {
    name: 'Seadra',
    cardType: 'pkmn',
    type: 'water'
  },
  UL_42: {
    name: 'Wartortle',
    cardType: 'pkmn',
    type: 'water'
  },
  UL_43: {
    name: 'Aipom',
    cardType: 'pkmn',
    type: 'colorless'
  },
  UL_48: {
    name: 'Chinchou',
    cardType: 'pkmn',
    type: 'lightning'
  },
  UL_49: {
    name: 'Horsea',
    cardType: 'pkmn',
    type: 'water'
  },
  UL_51: {
    name: 'Larvitar',
    cardType: 'pkmn',
    type: 'fighting'
  },
  UL_61: {
    name: 'Roselia',
    cardType: 'pkmn',
    type: 'grass'
  },
  UL_63: {
    name: 'Squirtle',
    cardType: 'pkmn',
    type: 'water'
  },
  UL_68: {
    name: 'Vulpix',
    cardType: 'pkmn',
    type: 'fire'
  },
  UL_70: {
    name: 'Zubat',
    cardType: 'pkmn',
    type: 'psychic'
  },
  UL_72: {
    name: 'Dual Ball',
    cardType: 'trainer'
  },
  UL_77: {
    name: "Interviewer's Questions",
    cardType: 'supporter'
  },
  UL_78: {
    name: 'Judge',
    cardType: 'supporter'
  },
  UL_80: {
    name: 'PlusPower',
    cardType: 'trainer'
  },
  UL_82: {
    name: 'Rare Candy',
    cardType: 'trainer'
  },
  UL_83: {
    name: 'Super Scoop Up',
    cardType: 'trainer'
  },
  UL_84: {
    name: 'Crobat',
    cardType: 'pkmn',
    type: 'psychic'
  },
  UL_85: {
    name: 'Kingdra',
    cardType: 'pkmn',
    type: 'water'
  },
  UL_86: {
    name: 'Lanturn',
    cardType: 'pkmn',
    type: 'lightning'
  },
  UL_88: {
    name: 'Tyranitar',
    cardType: 'pkmn',
    type: 'dark'
  },
  UL_89: {
    name: 'Ursaring',
    cardType: 'pkmn',
    type: 'colorless'
  },
  UL_94: {
    name: 'Suicune & Entei Legend (top)',
    cardType: 'pkmn'
  },
  UL_95: {
    name: 'Suicune & Entei Legend (bottom)',
    cardType: 'pkmn'
  }
};
const UD = {
  UD_1: {
    name: 'Bellossom',
    cardType: 'pkmn',
    type: 'grass'
  },
  UD_8: {
    name: 'Smeargle',
    cardType: 'pkmn',
    type: 'colorless'
  },
  UD_10: {
    name: 'Umbreon',
    cardType: 'pkmn',
    type: 'dark'
  },
  UD_17: {
    name: 'Leafeon',
    cardType: 'pkmn',
    type: 'grass'
  },
  UD_23: {
    name: 'Vespiquen',
    cardType: 'pkmn',
    type: 'grass'
  },
  UD_24: {
    name: 'Vileplume',
    cardType: 'pkmn',
    type: 'grass'
  },
  UD_25: {
    name: 'Weavile',
    cardType: 'pkmn',
    type: 'dark'
  },
  UD_27: {
    name: 'Gloom',
    cardType: 'pkmn',
    type: 'grass'
  },
  UD_31: {
    name: 'Muk',
    cardType: 'pkmn',
    type: 'psychic'
  },
  UD_44: {
    name: 'Combee',
    cardType: 'pkmn',
    type: 'grass'
  },
  UD_48: {
    name: 'Eevee',
    cardType: 'pkmn',
    type: 'colorless'
  },
  UD_54: {
    name: 'Houndour',
    cardType: 'pkmn',
    type: 'dark'
  },
  UD_60: {
    name: 'Oddish',
    cardType: 'pkmn',
    type: 'grass'
  },
  UD_66: {
    name: 'Slowpoke',
    cardType: 'pkmn',
    type: 'water'
  },
  UD_68: {
    name: 'Sneasel',
    cardType: 'pkmn',
    type: 'dark'
  },
  UD_71: {
    name: 'Burned Tower',
    cardType: 'stadium'
  },
  UD_73: {
    name: 'Energy Exchanger',
    cardType: 'trainer'
  },
  UD_74: {
    name: 'Flower Shop Lady',
    cardType: 'supporter'
  },
  UD_77: {
    name: "Sage's Training",
    cardType: 'supporter'
  },
  UD_79: {
    name: 'Darkness Energy',
    cardType: 'sEnergy'
  },
  UD_81: {
    name: 'Espeon',
    cardType: 'pkmn'
  },
  UD_82: {
    name: 'Houndoom',
    cardType: 'pkmn'
  },
  UD_89: {
    name: 'Rayquaza & Deoxys Legend (top)',
    cardType: 'pkmn'
  },
  UD_90: {
    name: 'Rayquaza & Deoxys Legend (bottom)',
    cardType: 'pkmn'
  }
};
const TM = {
  TM_10: {
    name: 'Spiritomb',
    cardType: 'pkmn',
    type: 'psychic'
  },
  TM_11: {
    name: 'Venomoth',
    cardType: 'pkmn',
    type: 'grass'
  },
  TM_21: {
    name: 'Elekid',
    cardType: 'pkmn',
    type: 'lightning'
  },
  TM_27: {
    name: 'Magmortar',
    cardType: 'pkmn',
    type: 'fire'
  },
  TM_35: {
    name: 'Haunter',
    cardType: 'pkmn',
    type: 'psychic'
  },
  TM_40: {
    name: 'Machoke',
    cardType: 'pkmn',
    type: 'fighting'
  },
  TM_42: {
    name: 'Magmar',
    cardType: 'pkmn',
    type: 'fire'
  },
  TM_43: {
    name: 'Magneton',
    cardType: 'pkmn',
    type: 'lightning'
  },
  TM_63: {
    name: 'Gastly',
    cardType: 'pkmn',
    type: 'psychic'
  },
  TM_67: {
    name: 'Machop',
    cardType: 'pkmn',
    type: 'fighting'
  },
  TM_68: {
    name: 'Magnemite',
    cardType: 'pkmn',
    type: 'lightning'
  },
  TM_81: {
    name: 'Venonat',
    cardType: 'pkmn',
    type: 'grass'
  },
  TM_83: {
    name: 'Voltorb',
    cardType: 'pkmn',
    type: 'lightning'
  },
  TM_84: {
    name: 'Yanma',
    cardType: 'pkmn',
    type: 'grass'
  },
  TM_85: {
    name: 'Blackbelt',
    cardType: 'supporter'
  },
  TM_87: {
    name: 'Junk Arm',
    cardType: 'trainer'
  },
  TM_88: {
    name: 'Seeker',
    cardType: 'supporter'
  },
  TM_89: {
    name: 'Twins',
    cardType: 'supporter'
  },
  TM_90: {
    name: 'Rescue Energy',
    cardType: 'sEnergy'
  },
  TM_92: {
    name: 'Celebi',
    cardType: 'pkmn',
    type: 'grass'
  },
  TM_93: {
    name: 'Electrode',
    cardType: 'pkmn',
    type: 'lightning'
  },
  TM_94: {
    name: 'Gengar',
    cardType: 'pkmn',
    type: 'psychic'
  },
  TM_95: {
    name: 'Machamp',
    cardType: 'pkmn',
    type: 'fighting'
  },
  TM_96: {
    name: 'Magnezone',
    cardType: 'pkmn',
    type: 'lightning'
  },
  TM_97: {
    name: 'Mew',
    cardType: 'pkmn',
    type: 'psychic'
  },
  TM_98: {
    name: 'Yanmega',
    cardType: 'pkmn',
    type: 'grass'
  }
};
const CL = {
  CL_18: {
    name: 'Pachirisu',
    cardType: 'pkmn',
    type: 'lightning'
  },
  CL_29: {
    name: 'Mr. Mime',
    cardType: 'pkmn',
    type: 'psychic'
  },
  CL_47: {
    name: 'Mime Jr.',
    cardType: 'pkmn',
    type: 'psychic'
  },
  CL_73: {
    name: 'Teddiursa',
    cardType: 'pkmn',
    type: 'colorless'
  },
  CL_80: {
    name: 'Lost Remover',
    cardType: 'trainer'
  },
  CL_81: {
    name: 'Lost World',
    cardType: 'stadium'
  },
  CL_84: {
    name: 'Research Record',
    cardType: 'trainer'
  }
};
const HGSS_CARDS = {
  HS: HS,
  UL: UL,
  UD: UD,
  TM: TM,
  CL: CL,
  HSP: {}
};

const BLW = {
  BLW_1: {
    name: 'Snivy',
    cardType: 'pkmn',
    type: 'grass'
  },
  BLW_76: {
    name: 'Klinklang',
    cardType: 'pkmn',
    type: 'metal'
  },
  BLW_81: {
    name: 'Lillipup',
    cardType: 'pkmn',
    type: 'colorless'
  },
  BLW_82: {
    name: 'Herdier',
    cardType: 'pkmn',
    type: 'colorless'
  },
  BLW_92: {
    name: 'Energy Retrieval',
    cardType: 'item'
  },
  BLW_93: {
    name: 'Energy Search',
    cardType: 'item'
  },
  BLW_94: {
    name: 'Energy Switch',
    cardType: 'item'
  },
  BLW_96: {
    name: 'PlusPower',
    cardType: 'item'
  },
  BLW_99: {
    name: 'Pokemon Communication',
    cardType: 'item'
  },
  BLW_101: {
    name: 'Professor Juniper',
    cardType: 'supporter'
  },
  BLW_104: {
    name: 'Switch',
    cardType: 'item'
  },
  BLW_105: {
    name: 'Grass Energy',
    cardType: 'bEnergy',
    type: 'grass'
  },
  BLW_106: {
    name: 'Fire Energy',
    cardType: 'bEnergy',
    type: 'fire'
  },
  BLW_107: {
    name: 'Water Energy',
    cardType: 'bEnergy',
    type: 'water'
  },
  BLW_108: {
    name: 'Lightning Energy',
    cardType: 'bEnergy',
    type: 'lightning'
  },
  BLW_109: {
    name: 'Psychic Energy',
    cardType: 'bEnergy',
    type: 'psychic'
  },
  BLW_110: {
    name: 'Fighting Energy',
    cardType: 'bEnergy',
    type: 'fighting'
  },
  BLW_111: {
    name: 'Darkness Energy',
    cardType: 'bEnergy',
    type: 'dark'
  },
  BLW_112: {
    name: 'Metal Energy',
    cardType: 'bEnergy',
    type: 'metal'
  }
};
const EPO = {
  EPO_43: {
    name: 'Gothita',
    cardType: 'pkmn',
    type: 'psychic'
  },
  EPO_45: {
    name: 'Gothorita',
    cardType: 'pkmn',
    type: 'psychic'
  },
  EPO_47: {
    name: 'Gothitelle',
    cardType: 'pkmn',
    type: 'psychic'
  },
  EPO_90: {
    name: 'Bianca',
    cardType: 'supporter'
  },
  EPO_92: {
    name: 'Crushing Hammer',
    cardType: 'item'
  },
  EPO_94: {
    name: 'Max Potion',
    cardType: 'item'
  },
  EPO_95: {
    name: 'Pokemon Catcher',
    cardType: 'item'
  },
  EPO_96: {
    name: 'Recycle',
    cardType: 'item'
  }
};
const NVI = {
  NVI_22: {
    name: 'Tympole',
    cardType: 'pkmn',
    type: 'water'
  },
  NVI_23: {
    name: 'Palpitoad',
    cardType: 'pkmn',
    type: 'water'
  },
  NVI_24: {
    name: 'Seismitoad',
    cardType: 'pkmn',
    type: 'water'
  },
  NVI_35: {
    name: 'Blitzle',
    cardType: 'pkmn',
    type: 'lightning'
  },
  NVI_38: {
    name: 'Tynamo',
    cardType: 'pkmn',
    type: 'lightning'
  },
  NVI_40: {
    name: 'Eelektrik',
    cardType: 'pkmn',
    type: 'lightning'
  },
  NVI_48: {
    name: 'Trubbish',
    cardType: 'pkmn',
    type: 'psychic'
  },
  NVI_91: {
    name: 'Eviolite',
    cardType: 'tool'
  },
  NVI_92: {
    name: 'N',
    cardType: 'supporter'
  },
  NVI_95: {
    name: 'Super Rod',
    cardType: 'item'
  }
};
const NXD = {
  NXD_48: {
    name: 'Zebstrika',
    cardType: 'pkmn',
    type: 'lightning'
  },
  NXD_54: {
    name: 'Mewtwo EX',
    cardType: 'pkmn',
    type: 'psychic'
  },
  NXD_59: {
    name: 'Musharna',
    cardType: 'pkmn',
    type: 'psychic'
  },
  NXD_69: {
    name: 'Sneasel',
    cardType: 'pkmn',
    type: 'dark'
  },
  NXD_87: {
    name: 'Exp. Share',
    cardType: 'tool'
  },
  NXD_88: {
    name: 'Heavy Ball',
    cardType: 'item'
  },
  NXD_89: {
    name: 'Level Ball',
    cardType: 'item'
  },
  NXD_91: {
    name: 'Skyarrow Bridge',
    cardType: 'stadium'
  },
  NXD_92: {
    name: 'Double Colorless Energy',
    cardType: 'sEnergy'
  },
  NXD_93: {
    name: 'Prism Energy',
    cardType: 'sEnergy'
  }
};
const DEX = {
  DEX_11: {
    name: 'Accelgor',
    cardType: 'pkmn',
    type: 'grass'
  },
  DEX_27: {
    name: 'Piplup',
    cardType: 'pkmn',
    type: 'water'
  },
  DEX_28: {
    name: 'Prinplup',
    cardType: 'pkmn',
    type: 'water'
  },
  DEX_29: {
    name: 'Empoleon',
    cardType: 'pkmn',
    type: 'water'
  },
  DEX_38: {
    name: 'Raikou EX',
    cardType: 'pkmn',
    type: 'lightning'
  },
  DEX_51: {
    name: 'Yamask',
    cardType: 'pkmn',
    type: 'psychic'
  },
  DEX_62: {
    name: 'Sableye',
    cardType: 'pkmn',
    type: 'dark'
  },
  DEX_63: {
    name: 'Darkrai EX',
    cardType: 'pkmn',
    type: 'dark'
  },
  DEX_75: {
    name: 'Klink',
    cardType: 'pkmn',
    type: 'metal'
  },
  DEX_76: {
    name: 'Klang',
    cardType: 'pkmn',
    type: 'metal'
  },
  DEX_92: {
    name: 'Dark Claw',
    cardType: 'item'
  },
  DEX_93: {
    name: 'Dark Patch',
    cardType: 'item'
  },
  DEX_94: {
    name: 'Enhanced Hammer',
    cardType: 'item'
  },
  DEX_96: {
    name: 'N',
    cardType: 'supporter'
  },
  DEX_98: {
    name: 'Professor Juniper',
    cardType: 'supporter'
  },
  DEX_99: {
    name: 'Random Receiver',
    cardType: 'item'
  },
  DEX_100: {
    name: 'Rare Candy',
    cardType: 'item'
  },
  DEX_102: {
    name: 'Ultra Ball',
    cardType: 'item'
  }
};
const DRX = {
  DRX_46: {
    name: 'Mew EX',
    cardType: 'pkmn',
    type: 'psychic'
  },
  DRX_50: {
    name: 'Drifloon',
    cardType: 'pkmn',
    type: 'psychic'
  },
  DRX_51: {
    name: 'Drifblim',
    cardType: 'pkmn',
    type: 'psychic'
  },
  DRX_53: {
    name: 'Trubbish',
    cardType: 'pkmn',
    type: 'psychic'
  },
  DRX_54: {
    name: 'Garbodor',
    cardType: 'pkmn',
    type: 'psychic'
  },
  DRX_71: {
    name: 'Terrakion EX',
    cardType: 'pkmn',
    type: 'fighting'
  },
  DRX_81: {
    name: 'Registeel EX',
    cardType: 'pkmn',
    type: 'metal'
  },
  DRX_84: {
    name: 'Altaria',
    cardType: 'pkmn',
    type: 'dragon'
  },
  DRX_85: {
    name: 'Rayquaza EX',
    cardType: 'pkmn',
    type: 'dragon'
  },
  DRX_86: {
    name: 'Gible',
    cardType: 'pkmn',
    type: 'dragon'
  },
  DRX_89: {
    name: 'Gabite',
    cardType: 'pkmn',
    type: 'dragon'
  },
  DRX_90: {
    name: 'Garchomp',
    cardType: 'pkmn',
    type: 'dragon'
  },
  DRX_104: {
    name: 'Swablu',
    cardType: 'pkmn',
    type: 'colorless'
  },
  DRX_110: {
    name: 'Bouffalant',
    cardType: 'pkmn',
    type: 'colorless'
  },
  DRX_114: {
    name: 'Giant Cape',
    cardType: 'item'
  },
  DRX_115: {
    name: 'Rescue Scarf',
    cardType: 'tool'
  },
  DRX_116: {
    name: 'Tool Scrapper',
    cardType: 'item'
  },
  DRX_118: {
    name: 'Blend Energy WLFM',
    cardType: 'sEnergy'
  },
  DRX_128: {
    name: 'Rayquaza',
    cardType: 'pkmn',
    type: 'dragon'
  }
};
const DRV = {};
const BCR = {
  BCR_29: {
    name: 'Squirtle',
    cardType: 'pkmn',
    type: 'water'
  },
  BCR_31: {
    name: 'Blastoise',
    cardType: 'pkmn',
    type: 'water'
  },
  BCR_49: {
    name: 'Keldeo EX',
    cardType: 'pkmn',
    type: 'water'
  },
  BCR_51: {
    name: 'Voltorb',
    cardType: 'pkmn',
    type: 'lightning'
  },
  BCR_61: {
    name: 'Duskull',
    cardType: 'pkmn',
    type: 'psychic'
  },
  BCR_62: {
    name: 'Dusclops',
    cardType: 'pkmn',
    type: 'psychic'
  },
  BCR_63: {
    name: 'Dusknoir',
    cardType: 'pkmn',
    type: 'psychic'
  },
  BCR_68: {
    name: 'Munna',
    cardType: 'pkmn',
    type: 'psychic'
  },
  BCR_83: {
    name: 'Trapinch',
    cardType: 'pkmn',
    type: 'fighting'
  },
  BCR_89: {
    name: 'Landorus EX',
    cardType: 'pkmn',
    type: 'fighting'
  },
  BCR_98: {
    name: 'Vibrava',
    cardType: 'pkmn',
    type: 'dragon'
  },
  BCR_99: {
    name: 'Flygon',
    cardType: 'pkmn',
    type: 'dragon'
  },
  BCR_100: {
    name: 'Black Kyurem',
    cardType: 'pkmn',
    type: 'dragon'
  },
  BCR_108: {
    name: 'Ditto',
    cardType: 'pkmn',
    type: 'colorless'
  },
  BCR_122: {
    name: 'Stoutland',
    cardType: 'pkmn',
    type: 'colorless'
  },
  BCR_126: {
    name: 'Audino',
    cardType: 'pkmn',
    type: 'colorless'
  },
  BCR_127: {
    name: 'Aspertia City Gym',
    cardType: 'item'
  },
  BCR_128: {
    name: 'Energy Search',
    cardType: 'item'
  },
  BCR_134: {
    name: 'Skyla',
    cardType: 'supporter'
  },
  BCR_135: {
    name: 'Switch',
    cardType: 'item'
  },
  BCR_136: {
    name: 'Town Map',
    cardType: 'item'
  },
  BCR_137: {
    name: 'Computer Search',
    cardType: 'item'
  },
  BCR_140: {
    name: 'Gold Potion',
    cardType: 'item'
  }
};
const PLS = {
  PLS_65: {
    name: 'Trubbish',
    cardType: 'pkmn',
    type: 'psychic'
  },
  PLS_90: {
    name: 'Klinklang',
    cardType: 'pkmn',
    type: 'metal'
  },
  PLS_93: {
    name: 'Cobalion EX',
    cardType: 'pkmn',
    type: 'metal'
  },
  PLS_95: {
    name: 'Black Kyurem EX',
    cardType: 'pkmn',
    type: 'dragon'
  },
  PLS_108: {
    name: 'Lugia EX',
    cardType: 'pkmn',
    type: 'colorless'
  },
  PLS_117: {
    name: 'Bicycle',
    cardType: 'item'
  },
  PLS_118: {
    name: 'Colress',
    cardType: 'supporter'
  },
  PLS_119: {
    name: 'Colress Machine',
    cardType: 'item'
  },
  PLS_120: {
    name: 'Escape Rope',
    cardType: 'item'
  },
  PLS_121: {
    name: 'Ether',
    cardType: 'item'
  },
  PLS_122: {
    name: 'Eviolite',
    cardType: 'item'
  },
  PLS_123: {
    name: 'Hypnotoxic Laser',
    cardType: 'item'
  },
  PLS_126: {
    name: 'Virbank City Gym',
    cardType: 'stadium'
  },
  PLS_127: {
    name: 'Plasma Energy',
    cardType: 'sEnergy'
  },
  PLS_128: {
    name: 'Dowsing Machine',
    cardType: 'item'
  },
  PLS_130: {
    name: 'Victory Piece',
    cardType: 'item'
  }
};
const PLF = {
  PLF_4: {
    name: 'Exeggcute',
    cardType: 'pkmn',
    type: 'grass'
  },
  PLF_12: {
    name: 'Flareon',
    cardType: 'pkmn',
    type: 'fire'
  },
  PLF_31: {
    name: 'Kyurem',
    cardType: 'pkmn',
    type: 'water'
  },
  PLF_33: {
    name: 'Electrode',
    cardType: 'pkmn',
    type: 'lightning'
  },
  PLF_38: {
    name: 'Thundurus EX',
    cardType: 'pkmn',
    type: 'lightning'
  },
  PLF_47: {
    name: 'Mr. Mime',
    cardType: 'pkmn',
    type: 'psychic'
  },
  PLF_53: {
    name: 'Deoxys EX',
    cardType: 'pkmn',
    type: 'psychic'
  },
  PLF_56: {
    name: 'Cofagrigus',
    cardType: 'pkmn',
    type: 'psychic'
  },
  PLF_65: {
    name: 'Sneasel',
    cardType: 'pkmn',
    type: 'dark'
  },
  PLF_66: {
    name: 'Weavile',
    cardType: 'pkmn',
    type: 'dark'
  },
  PLF_67: {
    name: 'Absol',
    cardType: 'pkmn',
    type: 'dark'
  },
  PLF_89: {
    name: 'Eevee',
    cardType: 'pkmn',
    type: 'colorless'
  },
  PLF_99: {
    name: 'Float Stone',
    cardType: 'tool'
  },
  PLF_100: {
    name: 'Frozen City',
    cardType: 'stadium'
  },
  PLF_101: {
    name: 'Ghetsis',
    cardType: 'supporter'
  },
  PLF_102: {
    name: 'Shadow Triad',
    cardType: 'supporter'
  },
  PLF_103: {
    name: 'Superior Energy Retrieval',
    cardType: 'item'
  },
  PLF_105: {
    name: 'Plasma Ball',
    cardType: 'item'
  },
  PLF_107: {
    name: 'Life Dew',
    cardType: 'tool'
  },
  PLF_108: {
    name: 'Rock Guard',
    cardType: 'tool'
  }
};
const PLB = {
  PLB_1: {
    name: 'Surskit',
    cardType: 'pkmn',
    type: 'grass'
  },
  PLB_2: {
    name: 'Masquerain',
    cardType: 'pkmn',
    type: 'grass'
  },
  PLB_7: {
    name: 'Shelmet',
    cardType: 'pkmn',
    type: 'grass'
  },
  PLB_9: {
    name: 'Virizion EX',
    cardType: 'pkmn',
    type: 'grass'
  },
  PLB_11: {
    name: 'Genesect EX',
    cardType: 'pkmn',
    type: 'grass'
  },
  PLB_41: {
    name: 'Sigilyph',
    cardType: 'pkmn',
    type: 'psychic'
  },
  PLB_52: {
    name: 'Sawk',
    cardType: 'pkmn',
    type: 'fighting'
  },
  PLB_60: {
    name: 'Jirachi EX',
    cardType: 'pkmn',
    type: 'metal'
  },
  PLB_66: {
    name: 'Palkia EX',
    cardType: 'pkmn',
    type: 'dragon'
  },
  PLB_81: {
    name: 'Iris',
    cardType: 'supporter'
  },
  PLB_86: {
    name: 'Reversal Trigger',
    cardType: 'tool'
  },
  PLB_88: {
    name: 'Silver Bangle',
    cardType: 'tool'
  },
  PLB_89: {
    name: 'Silver Mirror',
    cardType: 'tool'
  },
  PLB_92: {
    name: 'G Booster',
    cardType: 'item'
  },
  PLB_94: {
    name: 'Master Ball',
    cardType: 'item'
  },
  PLB_95: {
    name: 'Scoop Up Cyclone',
    cardType: 'item'
  }
};
const LTR = {
  LTR_24: {
    name: 'Victini EX',
    cardType: 'pkmn',
    type: 'fire'
  },
  LTR_67: {
    name: 'Trubbish',
    cardType: 'pkmn',
    type: 'psychic'
  },
  LTR_68: {
    name: 'Garbodor',
    cardType: 'pkmn',
    type: 'psychic'
  }
};
const RC = {
  RC_11: {
    name: 'Meloetta EX',
    cardType: 'pkmn',
    type: 'psychic'
  },
  RC_20: {
    name: 'Elesa',
    cardType: 'supporter'
  }
};
const BWP = {
  BWP_28: {
    name: 'Tropical Beach',
    cardType: 'stadium'
  }
};
const BW_CARDS = {
  BLW: BLW,
  EPO: EPO,
  NVI: NVI,
  NXD: NXD,
  DEX: DEX,
  DRX: DRX,
  DRV: DRV,
  BCR: BCR,
  PLS: PLS,
  PLF: PLF,
  PLB: PLB,
  LTR: LTR,
  RC: RC,
  BWP: BWP
};

const getFormatParam = () => {
  let queryParam = window.location.search.substring(1);
  let splitParams = queryParam.split("&");
  for (let p of splitParams) {
    if (p.indexOf("format") != -1) return p.split("=")[1];
  }
  return "";
};
const getFormatCards = () => {
  let format = getFormatParam();
  if (format === 'hgss') return HGSS_CARDS;
  if (format === 'bw') return BW_CARDS;
  return {};
};

getFormatCards();

const getCardName = string => {
  let _string = string;
  _string = _string.substring(_string.indexOf(" "));
  _string = _string.substring(0, _string.indexOf(" ("));
  return _string;
};
const getSet = string => {
  let start = string.indexOf("(");
  let end = string.indexOf(")");
  let setInfo = string.substring(start + 1, end);
  return setInfo.replace(" ", "_");
};
const buildObject = value => {
  let cards = {};
  let cardList = value.split("\n");
  for (let card of cardList) {
    let set = getSet(card);
    cards[set] = {
      name: getCardName(card),
      count: card.split(" ")[0]
    };
  }
  return cards;
};
const objToString = obj => {
  let _string = "{";
  for (let key of Object.keys(obj)) {
    _string += `${key}:${obj[key].count}, `;
  }
  return _string + "}";
};
const onClick = e => {
  e.preventDefault();
  let pasteBox = document.getElementById("paste-area");
  let value = pasteBox.value;
  let obj = buildObject(value);
  let string = objToString(obj);
  navigator.clipboard.writeText(string);
};
const buildTextAreaElem = () => {
  let elem = document.createElement("div");
  elem.classList.add("paste-deck-area");
  let form = document.createElement("form");
  form.onsubmit = onClick;
  let textArea = document.createElement('textarea');
  textArea.id = "paste-area";
  textArea.rows = 24;
  textArea.cols = 100;
  let label = document.createElement("label");
  label.innerHTML = "Paste Deck List";
  let button = document.createElement("button");
  button.type = "submit";
  button.innerHTML = "Convert";
  form.appendChild(label);
  form.appendChild(textArea);
  form.appendChild(button);
  elem.appendChild(form);
  return elem;
};
const deckConverter = () => {
  let elem = document.createElement('div');
  elem.classList.add("deck-converter");
  let inputElem = buildTextAreaElem();
  elem.appendChild(inputElem);
  return elem;
};

document.getElementById('content');
window.onload = function () {
  // init();
  document.getElementById("content").appendChild(deckConverter());
};
