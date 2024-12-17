import { BF_ORDER } from "../bf/bf.card";
import { BF_OWNED } from "../bf/bf.owned";
import { BG_CARDS } from "../bg/bg.card";

const NEO_GENESIS = {
  N1_1: {name: 'Ampharos', cardType:'pkmn', type: 'electric'},
  N1_2: {name: 'Azumarill', cardType:'pkmn', type: 'water'},
  N1_3: {name: 'Bellossom', cardType:'pkmn', type: 'grass'},
  N1_4: {name: 'Feraligatr', cardType:'pkmn', type: 'water'},
  N1_5: {name: 'Feraligatr', cardType:'pkmn', type: 'water'},
  N1_6: {name: 'Heracross', cardType:'pkmn', type: 'grass'},
  N1_7: {name: 'Jumpluff', cardType:'pkmn', type: 'grass'},
  N1_8: {name: 'Kingdra', cardType:'pkmn', type: 'water'},
  N1_9: {name: 'Lugia', cardType:'pkmn', type: 'colorless'},
  N1_10: {name: 'Meganium', cardType:'pkmn', type: 'grass'},
  N1_11: {name:'Meganium', cardType:'pkmn', type:'grass'},
  N1_12: {name: 'Pichu', cardType:'pkmn', type: 'lightning'},
  N1_13: {name: 'Skarmory', cardType:'pkmn', type: 'metal'},
  N1_14: {name: 'Slowking', cardType:'pkmn', type: 'psychic'},
  N1_15: {name: 'Steelix', cardType:'pkmn', type: 'metal'},
  N1_16: {name: 'Togetic', cardType:'pkmn', type: 'colorless'},
  N1_17: {name: 'Typhlosion', cardType:'pkmn', type: 'fire'},
  N1_18: {name: 'Typhlosion', cardType:'pkmn', type: 'fire'},
  N1_19: {name: 'Metal Energy', cardType:'sEnergy',},
  N1_20: {name: 'Cleffa', cardType:'pkmn', type: 'colorless'},
  N1_21: {name: 'Donphan', cardType:'pkmn', type: 'fighting'},
  N1_22: {name: 'Elekid', cardType:'pkmn', type: 'lightning'},
  N1_23: {name: 'Magby', cardType:'pkmn', type: 'fire'},
  N1_24: {name: 'Murkrow', cardType:'pkmn', type: 'darkness'},
  N1_25: {name: 'Sneasel', cardType:'pkmn', type: 'darkness'},
  N1_26: {name: 'Aipom', cardType:'pkmn', type: 'colorless'},
  N1_27: {name: 'Ariados', cardType:'pkmn', type: 'grass'},
  N1_28: {name: 'Bayleef', cardType:'pkmn', type: 'grass'},
  N1_29: {name: 'Bayleef', cardType:'pkmn', type: 'grass'},
  N1_30: {name: 'Clefairy', cardType:'pkmn', type: 'colorless'},
  N1_31: {name: 'Croconaw', cardType:'pkmn', type: 'water'},
  N1_32: {name: 'Croconaw', cardType:'pkmn', type: 'water'},
  N1_33: {name: 'Electabuzz', cardType:'pkmn', type: 'lightning'},
  N1_34: {name: 'Flaafy', cardType:'pkmn', type: 'lightning'},
  N1_35: {name: 'Furret', cardType:'pkmn', type: 'colorless'},
  N1_36: {name: 'Gloom', cardType:'pkmn', type: 'grass'},
  N1_37: {name: 'Granbull', cardType:'pkmn', type: 'colorless'},
  N1_38: {name: 'Lanturn', cardType:'pkmn', type: 'lightning'},
  N1_39: {name: 'Ledian', cardType:'pkmn', type: 'grass'},
  N1_40: {name: 'Magmar', cardType:'pkmn', type: 'fire'},
  N1_41: {name: 'Miltank', cardType:'pkmn', type: 'colorless'},
  N1_42: {name: 'Noctowl', cardType:'pkmn', type: 'colorless'},

  N1_46: {name: 'Quilava', cardType:'pkmn', type: 'fire'},
  N1_47: {name: 'Quilava', cardType:'pkmn', type: 'fire'},
  N1_48: {name: 'Seadra', cardType:'pkmn', type: 'water'},

  N1_54: {name: 'Chikorita', cardType:'pkmn', type: 'grass'},

  N1_56: {name: 'Cyndaquil', cardType:'pkmn', type: 'fire'},
  N1_57: {name: 'Cyndaquil', cardType:'pkmn', type: 'fire'},

  N1_59: {name: 'Gligar', cardType:'pkmn', type: 'fighting'},
  N1_60: {name: 'Hoothoot', cardType:'pkmn', type: 'colorless'},

  N1_62: {name: 'Horsea', cardType:'pkmn', type: 'water'},

  N1_69: {name: 'Onix', cardType:'pkmn', type: 'fighting'},

  N1_84: {name: 'Ecogym', cardType:'trainer',subType:'stadium'},
  N1_85: {name: 'Energy Charge', cardType:'trainer'},
  N1_86: {name: 'Focus Band', cardType:'trainer',subType:'tool'},
  N1_87: {name: 'Mary', cardType:'trainer'},

  N1_89: {name: 'Super Energy Removal', cardType:'trainer'},

  N1_91: {name: "Bill's Teleporter", cardType:'trainer'},
  N1_93: {name: 'Gold Berry', cardType:'item'},

  N1_96: {name: "Professor Elm", cardType:'trainer'},
  N1_98: {name: "Super Scoop Up", cardType:'trainer'},

  N1_100: {name: 'Double Gust', cardType:'pkmn', type: 'trainer'},

  N1_104: {name: 'Darkness Energy', cardType:'sEnergy'},
  N1_105: {name: 'Recycle Energy', cardType:'sEnergy'},

};





const NEO_DISCOVERY = {
  N2_40: {name: 'Igglybuff', cardType:'pkmn', type: 'colorless'},
};

const NEO_REVELATIONS = {
  N3_2: {name:'Blissey', cardType:'pkmn', type: 'colorless'},
  N3_6: {name:'Entei', cardType:'pkmn', type: 'fire'},
  N3_7: {name:'Ho-oh', cardType:'pkmn', type: 'fire'},
  N3_8: {name:'Houndoom', cardType:'pkmn', type: 'darkness'},
  N3_9: {name:'Jumpluff', cardType:'pkmn', type: 'grass'},
  N3_12: {name:'Porygon 2', cardType:'pkmn', type: 'colorless'},
  N3_13: {name:'Raikou', cardType:'pkmn', type: 'lightning'},
  N3_14: {name:'Suicune', cardType:'pkmn', type: 'water'},
  N3_15: {name:'Aerodactyl', cardType:'pkmn', type: 'fighting'},
  N3_19: {name:'Kingdra',cardType:'pkmn',type:'water'},
  N3_21: {name:'Raichu',cardType:'pkmn',type:'lightning'},
  N3_33: {name: 'Magcargo', cardType:'pkmn', type: 'fire'},
  N3_42: {name: 'Chinchou', cardType:'pkmn', type: 'lightning'},
  N3_53: {name: 'Slugma', cardType:'pkmn', type: 'fire'},
  N3_59: {name: 'Zubat', cardType:'pkmn', type: 'grass'},

  N3_60: {name:'Balloon Berry', cardType:'trainer', subType:'tool'},
  N3_61: {name:'Healing Field', cardType:'item', subType:'stadium'},
  N3_63: {name:"Rocket's Hideout",cardType:"trainer",subType:'stadium'},
};

const NEO_DESTINY = {
  CARD_ORDER: {
    EN: [],
    JP: ['N4_85','N4_32','N4_5','N4_97'],
  },
  N4_1: {name: 'Dark Ampharos', cardType:'pkmn', type: 'lightning'},
  N4_5: {name: 'Dark Feraligatr', cardType:'pkmn', type: 'water', stage:'stageTwo',level:44,hp:80,rc:3,weakness:'grass',
    details: {species:'Big Jaw',length:.6,weight:9.5,flavor:'Its powerful muscles allow it to move at a speed that belies its bulk.'},
    effects: [{type:'power', name:'Scare', text: "As long as this Pokemon is your Active Pokémon, all of your opponent’s Baby Pokémon Powers stop working and your opponent’s Baby Pokémon can’t attack. This power stops working while this Pokemon is Asleep, Confused, or Paralyzed."},
              {type:'attack', name:'Crushing Blow', cost: ['water','water','water'], dmg:50, text:"If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those cards and discard it."},],
    evolvesFrom: 'Dark Croconaw', gen:2
  },

  N4_32: {name: 'LIght Lanturn', cardType:'pkmn', type: 'lightning'},

  N4_32: {name: 'Dark Croconaw', cardType:'pkmn', type: 'water', stage:'stageOne',level:28,hp:60, rc:2, weakness:'grass',
    details: {species:'Big Jaw',length:2.3,weight:88.8,flavor:'It has 49 teeth in its mouth that are constantly replacing themselves.'},
    effects: [{type:'attack', name:'Clamping Jaw', cost: ['water','water'], dmg:20, text:"The Defending Pokémon can’t retreat during your opponent’s next turn. If the Defending Pokémon tries to attack during your opponent’s next turn, your opponent flips a coin. If tails, that attack does nothing. (Benching either Pokémon ends this effect.)"},],
    evolvesFrom:'Totodile', gen:2
  },

  N4_34: {name: 'Dark Flaafy', cardType:'pkmn', type: 'lightning'},

  N4_75: {name: 'Mareep', cardType:'pkmn', type: 'lightning'},

  N4_85: { name: 'Totodile', cardType:'pkmn', type:'water', stage:'basic', level:12,hp:50,rc:1, weakness:'grass',
    details: {species:'Big Jaw',length:2.3,weight:88.8,flavor:'Its highly developed jaws are powerful enough to crush anything.'},
    effects: [{type:'attack', name:'Water Gun', cost: ['water'], dmg:'10+', text:"Does 10 damage plus 10 more damage for each W Energy attached to this Pokemon but not used to pay for this attack’s Energy cost. You can’t add more than 20 damage in this way."},],
    gen:2,
  },

  N4_93: {name: 'EXP Share', cardType:'trainer', subType:'tool'},

  N4_97: {name: 'Counterattack Claws', cardType:'trainer', subType:'tool',effect:"During your opponent’s turn, if the Pokémon this card is attached to is your Active Pokémon and an opponent’s attack damages it (even if it is Knocked Out), flip a coin. If heads, put 2 damage counters on the Defending Pokémon. Then, discard this card."},

  N4_99: {name: 'Energy Stadium', cardType:'trainer', subType:'stadium'},
};

export const BN_CARDS = {
  ...BG_CARDS,
  N1: NEO_GENESIS,
  N2: NEO_DISCOVERY,
  N3: NEO_REVELATIONS,
  N4: NEO_DESTINY,
}

export const BN_ORDER = {
  EN: [
    ...BF_ORDER.EN,
  ],
  JP: [
    ...BF_ORDER.JP,
    ...NEO_DESTINY.CARD_ORDER.JP
  ]
}
