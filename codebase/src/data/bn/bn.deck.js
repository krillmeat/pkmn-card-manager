

/* POINT BUY (EN) */
const FERALIGATR_BLASTOISE = {name: 'Feraligatr/Blastoise',mascots:['feraligatr','blastoise'],cards:{
  N4_85:4, N1_5:1, RO_68:3, BS_2:1, RO_66:2, 
  G1_16:4, BS_91:4, WBSP_16:4, N1_91:3, G1_118:4, G1_125:1, G1_126:4, BS_76:3, G1_111:1, BS_95:1, RO_77:2, RO_78:1, RO_15:1,
  BS_102:15},
  source:{author:'evosoda',link:'https://note.com/evosoda/n/n61f5530855a3',modifiedForEN:true}
};

const MEGANIUM_VENUSAUR = {name: 'Meganium/Feraligatr',mascots:['meganium','venusaur'],cards:{
  BS_15:3, BS_30:1, BS_44:4, N1_11:3, N1_28:1, N1_54:4,
  BS_88:4, N1_96:4, BS_71:2, BS_91:2, N1_87:4, BS_77:4, G1_111:1, BS_76:4, N4_99:1, BS_85:4, RO_77:2, G2_126:1, BS_95:1,
  BS_99:10 },
  source:{author:'empty',link:'https://baseneo-decklisk.hatenablog.com/entry/2023/11/18/173100',modifiedForEN:true}
};

const STEELIX_KINGDRA = { name:'STEELIX_KINGDRA', mascots:['steelix','kingdra'], cards:{
  N1_15:2, SI_3:4, N3_19:3, N1_48:3, N1_62:4, N2_40:1,
  BS_88:4, N1_96:4, BS_91:2, N1_87:4, BS_77:4, RO_77:2, G2_121:2, BS_96:2, BS_90:1, BS_84:3, N1_93:2,
  N1_19:4, BS_96:4, BS_102:5}, 
  source: {author:'Nicolas', link:'https://baseneo-decklisk.hatenablog.com/entry/2024/09/21/201800'} 
};

const DARK_AMPHAROS = { name: 'DARK AMPHAROS', mascots:['ampharos'], cards: {
  N4_75: 4, N4_34: 4, N4_1: 2, JU_10: 2, BS_20: 1, G1_67:1, N2_40:1,
  BS_73:4, N1_96:4, N1_87:4,BS_91:2, G1_125:1, BS_77:3, G1_111:1, N3_63:3, BS_92:3, BS_93:1, G2_126: 1, N4_93: 1, RO_77:2,
  BS_100:8, N1_104:4, BS_96:2},
  source: {author:'べーやん', link:'https://note.com/comeback_chain/n/ne939bba0fcb4'}};

const RAICHU_VICTREEBEL = { name: "Raichu / Erika's Victreebel", mascots:['raichu','victreebel'], 
  cards:{ N3_21:3, WBSP_4:4, BS_21:2, RO_69:3, G1_26:1, G1_49:1,G1_76:2,
    BS_73:4, N1_96:4, BS_91:4, N1_87:3, G1_125: 2, BS_77:3, RO_77:3, BS_96:1, N3_60:1, N4_93:1, BS_84:4, G1_104:1, BS_92:2,
    RO_17:2, BS_100:9 },
  source: {author:'ymirthemir', link:'https://note.com/ymirthemir/n/n024520c5829d', modifiedForEN:true}};

const TYPHLOSION_MAGCARGO = { name: "Typhlosion / Magcargo", mascots:['typhlosion','magcargo'],
  cards: {
    N1_57:4, N1_47:3, N1_17:3, N3_53:3, N3_33:3, FO_39:2, N1_23:1,
    BS_73:4, N1_96:4, BS_91:4, N1_87:4, BS_77:4, BS_93:2, G2_126:2, BS_80:2, RO_77:2, N4_99:1,
    BS_98:12
  },
  source: {author:'だだちよ', link:'https://baseneo-decklisk.hatenablog.com/entry/2024/09/21/084700', modifiedForEN:true}
}

const HOUNDOOM_CLEFABLE = { name: 'Houndoom / Clefable', mascots: ['houndoom','clefable'],
  cards: {
    N4_7:3, N3_8:1, N2_39:4, JU_34:2, BS_48:2, JU_1:1, N1_30:2, N1_42:1, N1_60:1, N2_40:1,
    BS_73:4, BS_91:4, N1_96:4, N1_87:4, BS_77:3, BS_84:3, RO_77:2, N1_100:2, N3_63:2, G1_111:1, N4_93:1,
    N1_104:4, BS_98:8,
  },
  source: {author:'しそ', link:'https://x.com/siso_card/status/1837480601492115751?s=46&t=SIF2R2-Pf1O1Cz6vqDMMkw', modifiedForEN:true}
}

export const BN_DECKS = {
  FERALIGATR_BLASTOISE,
  MEGANIUM_VENUSAUR,
  STEELIX_KINGDRA,
  DARK_AMPHAROS,
  RAICHU_VICTREEBEL,
  TYPHLOSION_MAGCARGO,
  HOUNDOOM_CLEFABLE,
}

export const BN_RESTRICTED_MATCHUPS = [[]]

/*
IMPORTANT CARDS
------------------------------
RO_77: Nightly Garbage Run                  BS_97: Fighting Energy
BS_77: Pokemon Trader                       BS_98: Fire Energy
BS_91: Bill                                 BS_99: Grass Energy
BS_73: Oak                                  BS_100: Lightning Energy
N1_96: Elm                                  BS_101: Psychic Energy
N1_87: Mary                                 BS_102: Water Energy
G1_125: Sabrina's Gaze                      BS_96: DCE
BS_96: Switch                               N1_19: Metal Energy
N1_93: Gold Berry                           N1_104: Darkness Energy
G2_126: Warp Point
BS_84: Pluspower
N1_100: Double Gust
N2_40: Igglybuff
*/