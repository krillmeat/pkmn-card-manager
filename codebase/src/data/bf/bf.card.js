export const BASE_SET_ORDER = ['BS_1','BS_2','BS_3','BS_4','BS_5','BS_6','BS_7','BS_8','BS_9','BS_10',
  'BS_11','BS_12','BS_13','BS_14','BS_15','BS_16','BS_17','BS_18','BS_19','BS_20',
  'BS_21','BS_22','BS_23','BS_24','BS_25','BS_26','BS_27','BS_28','BS_29','BS_30',
  'BS_31','BS_32','BS_33','BS_34','BS_35','BS_36','BS_37','BS_38','BS_39','BS_40',
  'BS_41','BS_42','BS_43','BS_44','BS_45','BS_46','BS_47','BS_48','BS_49','BS_50',
  'BS_51','BS_52','BS_53','BS_54','BS_55','BS_56','BS_57','BS_58','BS_59','BS_60',
  'BS_61','BS_62','BS_63','BS_64','BS_65','BS_66','BS_67','BS_68','BS_69','BS_70',
  'BS_71','BS_72','BS_73','BS_74','BS_75','BS_76','BS_77','BS_78','BS_79','BS_80',
  'BS_81','BS_82','BS_83','BS_84','BS_85','BS_86','BS_87','BS_88','BS_89','BS_90',
  'BS_91','BS_92','BS_93','BS_94','BS_95','BS_96',
];

const BASE_SET = {
  CARD_ORDER: {
    EN: ['BS_1','BS_2'],
    JP: ['BS_44','BS_30','BS_15','BS_76'],
  },
  BS_1: {name: 'Alakazam', cardType:'pkmn', type: 'psychic', stage:'stageTwo',level:42,hp:80,rc:3,weakness:'psychic',
    details: {species:'Psi',length:1.5,weight:48,flavor:'Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.'},
    effects: [{type:'power', name:'Damage Swap', text: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another of your Pokémon, as long as you do not Knock Out that Pokemon. This power stops working if this Pokemon is Asleep, Confused, or Paralyzed."},
              {type:'attack', name:'Confuse Ray', cost: ['psychic','psychic','psychic'], dmg:30, text:"Flip a coin. If heads, the Defending Pokemon is now Confused."},],
    evolvesFrom: 'Kadabra', gen:1,
    points: {BF:3}
  },

  BS_2: {name: 'Blastoise', cardType:'pkmn', type: 'water', stage:'stageTwo',level:52,hp:100,rc:3,weakness:'lightning',
    details: {species:'Shellfish',length:1,weight:1,flavor:'A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.'},
    effects: [{type:'power', name:'Rain Dance', text: "As often as you like during your turn, you may attach a Basic W Energy card from your hand to 1 of your W Pokémon. This Power can’t be used if this Pokémon is Asleep, Confused, or Paralyzed."},
              {type:'attack', name:'Hydro Pump', cost: ['water','water','water'], dmg:'40+', text:"This attack does 10 more damage for each extra W Energy attached to this Pokémon (in addition to this attack’s cost). You can’t add more than 20 damage in this way."},],
    evolvesFrom: 'Wartortle', gen:1,
    points: {BF:2}
  },

  BS_3: {name: 'Chansey', cardType:'pkmn', type: 'colorless', stage:'basic',level:55,hp:120,rc:1,weakness:'fighting', resistance:'psychic',
    details: {species:'Egg',length:1,weight:1,flavor:'A rare and elusive Pokémon that is said to bring happiness to those who manage to catch it.'},
    effects: [{type:'attack', name:'Scrunch', cost: ['colorless','colorless'], text:"Flip a coin. If heads, during your opponent's next turn, prevent all damage to this Pokemon by attacks."},
              {type:'attack', name:'Double-edge', cost: ['colorless','colorless','colorless','colorless'], dmg:80, text:"This Pokemon also does 80 damage to itself."},],
    gen:1,
    points:{BF:1}
  },

  BS_4: {name: 'Charizard', cardType:'pkmn', type: 'fire', stage:'stageTwo', level:76, hp:120, rc:3, weakness:'water', resistance:'fighting',
    details: {species:'Flame',length:1,weight:1,flavor:'Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires.'},
    effects: [{type:'power', name:'Energy Burn', text: "All Energy attached to this Pokemon are R Energy instead of their usual type. This Pokemon Power stops working if this Pokemon is Asleep, Confused, or Paralyzed."},
      {type:'attack', name:'Fire Spin', cost: ['fire','fire','fire','fire'], dmg:100, text:"Discard 2 Energy from this Pokemon."},],
    evolvesFrom: 'Charmeleon',
  },

  BS_5: {name: 'Clefairy', cardType:'pkmn', type: 'colorless', stage:'basic', level:14, hp:40, rc:1, weakness:'fighting', resistance:'psychic',
    details: {species:'Fairy',length:1,weight:1,flavor:'Its magical and cute appeal has many admirers. It is rare and found only in certain areas.'},
  effects:[{type:'attack', name:'Sing', cost: ['colorless'], text:"Flip a coin. If heads, the Defending Pokemon is now Asleep."},
{type:'attack', name:'Metronome', cost: ['colorless','colorless','colorless'], text:"Choose 1 of the Defending Pokemon's attacks and use it as this attack. You must still do anything other than Energy costs required in order to use that attack."},]},

  BS_6: {name: 'Gyarados', cardType:'pkmn', type: 'water', stage:'stageOne', level:41, hp:100, rc:3, weakness:'grass',resistance:'fighting',
    details: {species:'Atrocious',length:1,weight:1,flavor:'Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.'},
  effects: [{type:'attack', name:'Dragon Rage', cost: ['water','water','water'], dmg:50, text:""},
            {type:'attack', name:'Bubblebeam', cost: ['water','water','water','water'], dmg:40, text:"Flip a coin. If heads, the Defending Pokemon is now Paralyzed."},],
  evolvesFrom: 'Magikarp'},
  
  BS_7: {name: 'Hitmonchan', cardType:'pkmn', type: 'fighting', stage:'basic', level:33, hp:70, rc:2, weakness:'psychic',
    details: {species:'Punching',length:1,weight:1,flavor:'While seeming to do nothing, it fires punches in lightning-fast volleys that are impossible to see.'},
  effects:[{type:'attack', name:'Jab', cost: ['fighting'], dmg:20, text:""},
{type:'attack', name:'Special Punch', cost: ['fighting','fighting','colorless'], dmg:40, text:""},]},
  
  BS_8: {name: 'Machamp', cardType:'pkmn', type: 'fighting', stage:'stageTwo', level:67, hp:100, rc:3, weakness:'psychic',
    details: {species:'Superpower',length:1,weight:1,flavor:'Using its amazing muscles, it throws powerful punches that can knock its victim clear over the horizon.'},
    effects:[{type:'power', name:'Strikes Back', text: "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), put 1 damage counter on the Attacking Pokémon."},
             {type:'attack', name:'Seismic Toss', cost: ['fighting','fighting','fighting','fighting'], dmg:60, text:""},
    ],
    evolvesFrom: 'Machoke'},
  
  BS_9: {name: 'Magneton', cardType:'pkmn', type: 'lightning', stage:'stageOne', level:28, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_10: {name: 'Mewtwo', cardType:'pkmn', type: 'psychic', stage:'basic', level:53, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_11: {name: 'Nidoking', cardType:'pkmn', type: 'grass', stage:'stageTwo', level:48, hp:90, rc:3, weakness:'psychic',
    details: {species:'Drill',length:1.4,weight:62,flavor:'Uses its powerful tail in battle to smash, constrict, then break its prey’s bones.'},
    effects: [{type:'attack', name:'Thrash', cost: ['grass','colorless','colorless'], dmg:"30+", text:"Flip a coin. If heads, this attack does 10 more damage."},
              {type:'attack', name:'Toxic', cost: ['grass','grass','grass'], dmg:20, text:"Flip a coin. If heads, your opponent’s Active Pokémon is now Poisoned. During Pokémon Checkup, put 2 damage counters on that Pokémon instead of 1."},]
  },

  BS_12: {name: 'Ninetales', cardType:'pkmn', type: 'fire', stage:'stageOne', level: 32, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_13: {name: 'Poliwrath', cardType:'pkmn', type: 'water', stage:'stageTwo', level: 48, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_14: {name: 'Raichu', cardType:'pkmn', type: 'lightning', stage:'stageOne', level: 40, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_15: {name: 'Venusaur', cardType:'pkmn', type: 'grass', stage:'stageTwo', level: 67, hp:100,weakness:'fire',
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},
  effects: [{type:'power', name:'Energy Trans', text: "As often as you like during your turn (before your attack), you may take 1 {G} Energy card attached to 1 of your Pokémon and attach it to a different one. This power can’t be used if Venusaur is Asleep, Confused, or Paralyzed."},
            {type:'attack', name:'Solarbeam', cost: ['grass','grass','grass','grass'], dmg:60, text:""},
  ],
  points:{BF:1}},
  
  BS_16: {name: 'Zapdos', cardType:'pkmn', type: 'lightning', stage:'basic', level: 64, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_17: {name: 'Beedrill', cardType:'pkmn', type: 'grass', stage:'stageTwo', level: 32, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_18: {name: 'Dragonair', cardType:'pkmn', type: 'colorless', stage:'stageOne', level: 33, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_19: {name: 'Dugtrio', cardType:'pkmn', type: 'fighting', stage:'stageOne', level: 36, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_20: {name: 'Electabuzz', cardType:'pkmn', type: 'lightning', stage:'basic', level: 35, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},
  },
  
  BS_21: {name: 'Electrode', cardType:'pkmn', type: 'lightning', stage:'stageOne', level: 40, hp:0, rc: 1, weakness: 'fighting',
    details: {species:'Cool',length:1,weight:1,flavor:'It stores electrical energy under very high pressure. It often explodes with little or no provocation.'},
    effects: [{type:'power', name:'Buzzap', text: "Once during your turn, you may Knock Out this Pokémon and attach it to 1 of your other Pokémon as a Special Energy card. If you do, choose a type of Energy. While this card is attached to a Pokémon, it provides 2 of that type of Energy. This Pokémon Power can’t be used if this Pokémon is Asleep, Confused, or Paralyzed."},
      {type:'attack', name:'Electric Shock', cost: ['lightning','lightning','lightning'], dmg:50, text:"Flip a coin. If tails, this Pokemon does 10 damage to itself."},],
    evolvesFrom: 'Voltorb',
    points: {BF:2},
  },
  
  BS_22: {name: 'Pidgeotto', cardType:'pkmn', type: 'colorless', stage:'stageOne', level: 36, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_23: {name: 'Arcanine', cardType:'pkmn', type: 'fire', stage:'stageOne', level: 45, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},
    points:{BF:1}},
  
  BS_24: {name: 'Charmeleon', cardType:'pkmn', type: 'fire', stage:'stageOne', level: 32, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_25: {name: 'Dewgong', cardType:'pkmn', type: 'water', stage:'stageOne', level: 42, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_26: {name: 'Dratini', cardType:'pkmn', type: 'colorless', stage:'basic', level: 10, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_27: {name: "Farfetch'd", cardType:'pkmn', type: 'colorless', stage:'basic', level: 20, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_28: {name: 'Growlithe', cardType:'pkmn', type: 'fire', stage:'basic', level: 18, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_29: {name: 'Haunter', cardType:'pkmn', type: 'psychic', stage:'stageOne', level: 22, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_30: {name: 'Ivysaur', cardType:'pkmn', type: 'grass', stage:'stageOne', level: 20, hp:60,weakness:'fire',
    details: {species:'Seed',length:1,weight:13,flavor:'When the bulb on its back grows large, the Pokémon seems to lose the ability to stand on its hind legs.'},
    effects: [{type:'attack', name:'Vine Whip', cost: ['grass','colorless','colorless'], dmg:30, text:""},
  {type:'attack', name:'Poisonpowder', cost: ['grass','grass','grass'], dmg:20, text:"The Defending Pokemon is now Poinsoned."},],
  evolvesFrom: 'Bulbasaur', gen:1,
  },
  
  BS_31: {name: 'Jynx', cardType:'pkmn', type: 'psychic', stage:'basic', level: 23, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_32: {name: 'Kadabra', cardType:'pkmn', type: 'psychic', stage:'stageOne', level: 38, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_33: {name: 'Kakuna', cardType:'pkmn', type: 'grass', stage:'stageOne', level: 23, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_34: {name: 'Machoke', cardType:'pkmn', type: 'grass', stage:'stageOne', level: 40, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_35: {name: 'Magikarp', cardType:'pkmn', type: 'water', stage:'basic', level: 8, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_36: {name: 'Magmar', cardType:'pkmn', type: 'fire', stage:'basic', level: 24, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_37: {name: 'Nidorino', cardType:'pkmn', type: 'grass', stage:'stageOne', level: 25, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_38: {name: 'Poliwhirl', cardType:'pkmn', type: 'water', stage:'stageOne', level: 28, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_39: {name: 'Porygon', cardType:'pkmn', type: 'colorless', stage:'basic', level: 12, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_40: {name: 'Raticate', cardType:'pkmn', type: 'colorless', stage:'stageOne', level: 41, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_41: {name: 'Seel', cardType:'pkmn', type: 'water', stage:'basic', level: 12, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_42: {name: 'Wartortle', cardType:'pkmn', type: 'water', stage:'stageOne', level: 22, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},
  
  BS_43: {name: 'Abra', cardType:'pkmn', type: 'psychic', stage:'basic', level: 10, hp:0,
    details: {species:'Cool',length:1,weight:1,flavor:'hi'},},

  BS_44: {name: 'Bulbasaur', cardType:'pkmn', type: 'grass', stage:'basic', level: 13, hp: 40, rc: 1, weakness: 'fire', 
    details: {species:'Seed', length: 2, weight:6.9, flavor: 'A strange seed was planted on its back at birth. Thus, a plant sprouted and now grows with this Pokémon.' },
    effects: [{type:'attack',name:'Leech Seed',cost:['grass','grass'],dmg:20,text:'If this attack damages the defending Pokemon, you may heal 10 damage from this Pokemon.'}]},

  BS_45: {name: 'Caterpie', cardType:'pkmn', type: 'grass', stage:'basic', level: 13, hp:0,},

  BS_46: {name: 'Charmander', cardType:'pkmn', type: 'fire', stage:'basic', level: 10, hp: 50, rc: 1, weakness: 'water',
    details: {species:'Lizard', length: .6, weight:8.5, flavor: 'Obviously prefers hot places. If it gets caught in the rain, steam is said to spout from the tip of its tail.'},
    effects: [{type:'attack', name:'Scratch', cost: ['colorless'], dmg:10 },
              {type:'attack', name:'Ember', cost: ['fire','colorless'], dmg:30, text:"Discard 1 fire Energy attached to this Pokemon."}],
  },
  BS_47: {name: 'Diglett', cardType:'pkmn', type: 'fighting', stage:'basic', level:8, hp:0,},
  BS_48: {name: 'Doduo', cardType:'pkmn', type: 'colorless', stage:'basic', level:10, hp:0,},
  BS_49: {name: 'Drowzee', cardType:'pkmn', type: 'psychic', stage:'basic', level:12, hp:0,},
  BS_50: {name: 'Gastly', cardType:'pkmn', type: 'psychic', stage:'basic', level:8, hp:0,},
  BS_51: {name: 'Koffing', cardType:'pkmn', type: 'grass', stage:'basic', level:13, hp:0,},
  BS_52: {name: 'Machop', cardType:'pkmn', type: 'fighting', stage:'basic', level:20, hp:0,},
  BS_53: {name: 'Magnemite', cardType:'pkmn', type: 'lightning', stage:'basic', level:13, hp:0,},
  BS_54: {name: 'Metapod', cardType:'pkmn', type: 'grass', stage:'stageOne', level:21, hp:0,},
  BS_55: {name: 'Nidoran M', cardType:'pkmn', type: 'grass', stage:'basic', level:20, hp:0,},
  BS_56: {name: 'Onix', cardType:'pkmn', type: 'fighting', stage:'basic', level:12, hp:0,},
  BS_57: {name: 'Pidgey', cardType:'pkmn', type: 'colorless', stage:'basic', level:8, hp:0,},
  BS_58: {name: 'Pikachu', cardType:'pkmn', type: 'lightning', stage:'basic', level:12, hp:0,},
  BS_59: {name: 'Poliwag', cardType:'pkmn', type: 'water', stage:'basic', level:13, hp:0,},
  BS_60: {name: 'Ponyta', cardType:'pkmn', type: 'fire', stage:'basic', level:10, hp:0,},
  BS_61: {name: 'Rattata', cardType:'pkmn', type: 'colorless', stage:'basic', level:9, hp:0,},
  BS_62: {name: 'Sandshrew', cardType:'pkmn', type: 'fighting', stage:'basic', level:12, hp:0,},
  BS_63: {name: 'Squirtle', cardType:'pkmn', type: 'water', stage:'basic', level:8, hp:0,},
  BS_64: {name: 'Starmie', cardType:'pkmn', type: 'water', stage:'basic', level:28, hp:0,},
  BS_65: {name: 'Staryu', cardType:'pkmn', type: 'water', stage:'basic', level:15, hp:0,},

  BS_66: {name: 'Tangela', cardType:'pkmn', type: 'grass', stage:'basic', level: 8, hp: 50, rc:2, weakness:'fire',
    details: {species:'Vine', length: 1, weight:3.5, flavor: 'Its whole body is swathed with wide vines that are similar to seaweed. These vines shake as it walks.' },
    effects: [{type:'attack',name:'Bind',cost:['grass','colorless'],dmg:20,text:'Flip a coin. If heads, the defending Pokemon is now Paralyzed.'},
              {type:'attack',name:'Poisonpowder',cost:['grass','grass','grass'],dmg:20,text:'The defending Pokemon is now Poisoned.'}]
  },
  BS_67: {name: 'Voltorb', cardType:'pkmn', type: 'lightning', stage:'basic', level:10, hp:0, weakness: 'fighting',},
  BS_68: {name: 'Vulpix', cardType:'pkmn', type: 'fire', stage:'basic', level:11, weakness: 'water',},

  BS_69: {name: 'Weedle', cardType:'pkmn', type: 'grass', stage:'basic', level:12, hp:40, rc:1, weakness:'fire',
    details: {species:'Hairy Bug',length: 1, weight:7, flavor: 'Often found in forests, eating leaves. It has a sharp, venomous stinger on its head.'},
    effects: [{type:'attack',name:'Poison Sting',cost:['grass'],dmg:10,text:'Flip a coin. If heads, the defending Pokmeon is now Poisoned.'}]
    // effects: [{type:'attack',name:'Poison Sting',cost:['grass'],dmg:10,text:'123456789 123456789 123456789012345'}]
  },

  BS_70: {name: 'Clefairy Doll', cardType:'trainer', effect: "Play this card as if it were a 10-HP {C} Basic Pokémon. At any time during your turn (before your attack), if this Pokémon is your Active Pokémon, you may discard it. This card can’t retreat or be affect by Special Conditions. If this card is Knocked Out, your opponent can’t take any Prize cards for it.", hasHP: 10},
  
  BS_71: {name: 'Computer Search', cardType:'trainer',effect:'You can use this card only if you discard 2 other cards from your hand. Search your deck for a card and put it into your hand. Then, shuffle your deck.'},
  
  BS_72: {name: 'Devolution Spray', cardType:'trainer', effect:'Devolve 1 of your evolved Pokemon up to twice and discard those evolution cards (remove all Special Conditions and other effects, the same as when a Pokemon evolves).'},
  
  BS_73: {name: 'Imposter Professor Oak', cardType:'trainer', effect: 'Your opponent shuffles their hand into their deck. Then, they draw 7 cards.'},
  
  BS_74: {name: 'Item Finder', cardType:'trainer',effect:'You can use this card only if you discard 2 other cards from your hand. Put a Trainer card from your discard pile into your hand.',points:{BF:2}},
  
  BS_75: {name: 'Lass', cardType:'trainer'},
  
  BS_76: {name: 'Pokemon Breeder', cardType:'trainer',effect:'Choose 1 of your Basic Pokémon in play. If you have a Stage 2 card in your hand that evolves from that Pokémon, put that card onto the Basic Pokémon to evolve it, skipping the Stage 1. You can’t use this card during your first turn or on a Basic Pokémon that was put into play this turn.'},
  
  BS_77: {name: 'Pokemon Trader', cardType:'trainer'},
  
  BS_78: {name: 'Scoop Up', cardType:'trainer',points:{BF:1}},
  
  BS_79: {name: 'Super Energy Removal', cardType:'trainer', effect: '', points: {BF:5}},
  
  BS_80: {name: 'Defender', cardType:'trainer'},
  
  BS_81: {name: 'Energy Retrieval', cardType:'trainer'},
  
  BS_82: {name: 'Full Heal', cardType:'trainer'},
  
  BS_83: {name: 'Maintenance', cardType:'trainer'},
  
  BS_84: {name: 'PlusPower', cardType:'trainer',points:{BF:1}},
  
  BS_85: {name: 'Pokemon Center', cardType:'trainer',points:{BF:2}},
  
  BS_86: {name: 'Pokemon Flute', cardType:'trainer'},
  
  BS_87: {name: 'Pokedex', cardType:'trainer'},
  
  BS_88: {name: 'Professor Oak', cardType:'trainer'},
  
  BS_89: {name: 'Revive', cardType:'trainer'},
  
  BS_90: {name: 'Super Potion', cardType:'trainer'},
  
  BS_91: {name: 'Bill', cardType:'trainer'},
  
  BS_92: {name: 'Energy Removal', cardType:'trainer',points:{BF:2}},
  
  BS_93: {name: 'Gust of Wind', cardType:'trainer',points:{BF:1}},
  
  BS_94: {name: 'Potion', cardType:'trainer'},
  
  BS_95: {name: 'Switch', cardType:'trainer'},

  
  BS_96: {name: 'Double Colorless Energy', cardType:'sEnergy',points:{BF:1}},


  BS_97: {name: 'Fighting Energy', cardType:'bEnergy', type:'fighting'},
  BS_98: {name: 'Fire Energy', cardType:'bEnergy', type:'fire'},
  BS_99: {name: 'Grass Energy', cardType:'bEnergy', type:'grass'},
  BS_100: {name: 'Lightning Energy', cardType:'bEnergy', type: 'lightning'},
  BS_101: {name: 'Psychic Energy', cardType:'bEnergy', type: 'psychic'},
  BS_102: {name: 'Water Energy', cardType:'bEnergy', type: 'water'},
};

const JUNGLE = {
  JU_1: {name: 'Clefable', cardType:'pkmn', type: 'colorless'},
  JU_2: {name: 'Electrode', cardType:'pkmn', type: 'lightning'},
  JU_3: {name: 'Flareon', cardType:'pkmn', type: 'fire'},
  JU_4: {name: 'Jolteon', cardType:'pkmn', type: 'lightning'},
  JU_5: {name: 'Kangaskhan', cardType:'pkmn', type: 'colorless'},
  JU_6: {name: 'Mr. Mime', cardType:'pkmn', type: 'psychic'},
  JU_7: {name: 'Nidoqueen', cardType:'pkmn', type: 'grass'},
  JU_8: {name: 'Pidgeot', cardType:'pkmn', type: 'colorless'},
  JU_9: {name: 'Pinsir', cardType:'pkmn', type: 'grass'},
  JU_10: {name: 'Scyther', cardType:'pkmn', type: 'grass'},
  JU_11: {name: 'Snorlax', cardType:'pkmn', type: 'colorless'},
  JU_12: {name: 'Vaporeon', cardType:'pkmn', type: 'water'},
  JU_13: {name: 'Venomoth', cardType:'pkmn', type: 'grass'},
  JU_14: {name: 'Victreebel', cardType:'pkmn', type: 'grass'},
  JU_15: {name: 'Vileplume', cardType:'pkmn', type: 'grass'},
  JU_16: {name: 'Wigglytuff', cardType:'pkmn', type: 'colorless'},

  // JU_17: {name: 'Clefable', cardType:'pkmn', type: 'colorless'},
  // JU_18: {name: 'Electrode', cardType:'pkmn', type: 'lightning'},
  // JU_19: {name: 'Flareon', cardType:'pkmn', type: 'fire'},
  // JU_20: {name: 'Jolteon', cardType:'pkmn', type: 'lightning'},
  // JU_21: {name: 'Kangaskhan', cardType:'pkmn', type: 'colorless'},
  // JU_22: {name: 'Mr. Mime', cardType:'pkmn', type: 'psychic'},
  // JU_23: {name: 'Nidoqueen', cardType:'pkmn', type: 'grass'},
  // JU_24: {name: 'Pidgeot', cardType:'pkmn', type: 'colorless'},
  // JU_25: {name: 'Pinsir', cardType:'pkmn', type: 'grass'},
  // JU_26: {name: 'Scyther', cardType:'pkmn', type: 'grass'},
  // JU_27: {name: 'Snorlax', cardType:'pkmn', type: 'colorless'},
  // JU_28: {name: 'Vaporeon', cardType:'pkmn', type: 'water'},
  // JU_29: {name: 'Venomoth', cardType:'pkmn', type: 'grass'},
  // JU_30: {name: 'Victreebel', cardType:'pkmn', type: 'grass'},
  // JU_31: {name: 'Vileplume', cardType:'pkmn', type: 'grass'},
  // JU_32: {name: 'Wigglytuff', cardType:'pkmn', type: 'colorless'},

  JU_33: {name: 'Butterfree', cardType:'pkmn', type: 'grass'},
  JU_34: {name: 'Dodrio', cardType:'pkmn', type: 'colorless'},
  JU_35: {name: 'Exeggutor', cardType:'pkmn', type: 'grass'},
  JU_36: {name: 'Fearow', cardType:'pkmn', type: 'colorless'},
  JU_37: {name: 'Gloom', cardType:'pkmn', type: 'grass'},
  JU_38: {name: 'Lickitung', cardType:'pkmn', type: 'colorless'},
  JU_39: {name: 'Marowak', cardType:'pkmn', type: 'fighting'},
  JU_40: {name: 'Nidorina', cardType:'pkmn', type: 'grass'},
  JU_41: {name: 'Parasect', cardType:'pkmn', type: 'colorless'},
  JU_42: {name: 'Persian', cardType:'pkmn', type: 'colorless'},
  JU_43: {name: 'Primeape', cardType:'pkmn', type: 'fighting'},
  JU_44: {name: 'Rapidash', cardType:'pkmn', type: 'fire'},
  JU_45: {name: 'Rhydon', cardType:'pkmn', type: 'fighting'},
  JU_46: {name: 'Seaking', cardType:'pkmn', type: 'water'},
  JU_47: {name: 'Tauros', cardType:'pkmn', type: 'colorless'},
  JU_48: {name: 'Weepinbell', cardType:'pkmn', type: 'grass'},
  JU_49: {name: 'Bellsprout', cardType:'pkmn', type: 'grass'},
  JU_50: {name: 'Cubone', cardType:'pkmn', type: 'fighting'},
  JU_51: {name: 'Eevee', cardType:'pkmn', type: 'colorless'},
  JU_52: {name: 'Exeggcute', cardType:'pkmn', type: 'grass'},
  JU_53: {name: 'Goldeen', cardType:'pkmn', type: 'water'},
  JU_54: {name: 'Jiggypuff', cardType:'pkmn', type: 'colorless'},
  JU_55: {name: 'Mankey', cardType:'pkmn', type: 'fighting'},
  JU_56: {name: 'Meowth', cardType:'pkmn', type: 'grass'},
  JU_57: {name: 'Nidoran F', cardType:'pkmn', type: 'grass'},
  JU_58: {name: 'Oddish', cardType:'pkmn', type: 'grass'},
  JU_59: {name: 'Paras', cardType:'pkmn', type: 'grass'},
  JU_60: {name: 'Pikachu', cardType:'pkmn', type: 'lightning'},
  JU_61: {name: 'Rhyhorn', cardType:'pkmn', type: 'fighting'},
  JU_62: {name: 'Spearow', cardType:'pkmn', type: 'colorless'},
  JU_63: {name: 'Venonat', cardType:'pkmn', type: 'grass'},

  JU_64: {name: 'Poke Ball', cardType:'trainer'},
};

const FOSSIL = {
  FO_1: {name: 'Aerodactyl', cardType:'pkmn', type: 'fighting'},
  FO_2: {name: 'Articuno', cardType:'pkmn', type: 'water'},
  FO_3: {name: 'Ditto', cardType:'pkmn', type: 'colorless'},
  FO_4: {name: 'Dragonite', cardType:'pkmn', type: 'colorless'},
  FO_5: {name: 'Gengar', cardType:'pkmn', type: 'psychic'},
  FO_6: {name: 'Haunter', cardType:'pkmn', type: 'psychic'},
  FO_7: {name: 'Hitmonlee', cardType:'pkmn', type: 'fighting'},
  FO_8: {name: 'Hypno', cardType:'pkmn', type: 'psychic'},
  FO_9: {name: 'Kabutops', cardType:'pkmn', type: 'fighting'},
  FO_10: {name: 'Lapras', cardType:'pkmn', type: 'water'},
  FO_11: {name: 'Magneton', cardType:'pkmn', type: 'lightning'},
  FO_12: {name: 'Moltres', cardType:'pkmn', type: 'fire'},
  FO_13: {name: 'Muk', cardType:'pkmn', type: 'grass'},
  FO_14: {name: 'Raichu', cardType:'pkmn', type: 'lightning'},
  FO_15: {name: 'Zapdos', cardType:'pkmn', type: 'lightning'},
  FO_31: {name: 'Arbok', cardType:'pkmn', type: 'grass'},
  FO_32: {name: 'Cloyster', cardType:'pkmn', type: 'water'},
  FO_33: {name: 'Gastly', cardType:'pkmn', type: 'psychic'},
  FO_34: {name: 'Golbat', cardType:'pkmn', type: 'grass'},
  FO_35: {name: 'Golduck', cardType:'pkmn', type: 'water'},
  FO_36: {name: 'Golem', cardType:'pkmn', type: 'fighting'},
  FO_37: {name: 'Graveler', cardType:'pkmn', type: 'fighting'},
  FO_38: {name: 'Kingler', cardType:'pkmn', type: 'water'},
  FO_39: {name: 'Magmar', cardType:'pkmn', type: 'fire'},
  FO_40: {name: 'Omastar', cardType:'pkmn', type: 'water'},
  FO_41: {name: 'Sandslash', cardType:'pkmn', type: 'fighting'},
  FO_42: {name: 'Seadra', cardType:'pkmn', type: 'water'},
  FO_43: {name: 'Slowbro', cardType:'pkmn', type: 'psychic'},
  FO_44: {name: 'Tentacruel', cardType:'pkmn', type: 'water'},
  FO_45: {name: 'Weezing', cardType:'pkmn', type: 'grass'},
  FO_46: {name: 'Ekans', cardType:'pkmn', type: 'grass'},
  FO_47: {name: 'Geodude', cardType:'pkmn', type: 'fighting'},
  FO_48: {name: 'Grimer', cardType:'pkmn', type: 'grass'},
  FO_49: {name: 'Horsea', cardType:'pkmn', type: 'water'},
  FO_50: {name: 'Kabuto', cardType:'pkmn', type: 'fighting'},
  FO_51: {name: 'Krabby', cardType:'pkmn', type: 'water'},
  FO_52: {name: 'Omanyte', cardType:'pkmn', type: 'water'},
  FO_53: {name: 'Psyduck', cardType:'pkmn', type: 'water'},
  FO_54: {name: 'Shellder', cardType:'pkmn', type: 'water'},
  FO_55: {name: 'Slowpoke', cardType:'pkmn', type: 'psychic'},
  FO_56: {name: 'Tentacool', cardType:'pkmn', type: 'water'},
  FO_57: {name: 'Zubat', cardType:'pkmn', type: 'grass'},

  FO_58: {name: 'Mr. Fuji', cardType:'trainer'},
  FO_59: {name: 'Energy Search', cardType:'trainer'},
  FO_60: {name: 'Gambler', cardType:'trainer'},
  FO_61: {name: 'Recycle', cardType:'trainer'},
  FO_62: {name: 'Mysterious Fossil', cardType:'trainer'},
};

const WIZARDS_BLACK_STAR_PROMO_BF = {
  WBSP_1: {name: 'Pikachu', cardType:'pkmn', type: 'lightning'},
  WBSP_2: {name: 'Electabuzz', cardType:'pkmn', type: 'lightning'},
  WBSP_3: {name: 'Mewtwo', cardType:'pkmn', type: 'psychic'},
  WBSP_4: {name: 'Pikachu', cardType:'pkmn', type: 'lightning'},
  WBSP_5: {name: 'Dragonite', cardType:'pkmn', type: 'colorless'},
  WBSP_6: {name: 'Arcanine', cardType:'pkmn', type: 'fire'},
  WBSP_7: {name: 'Jigglypuff', cardType:'pkmn', type: 'colorless'},
  WBSP_8: {name: 'Mew', cardType:'pkmn', type: 'psychic'},
  WBSP_9: {name: 'Mew', cardType:'pkmn', type: 'psychic'},
  WBSP_10: {name: 'Meowth', cardType:'pkmn', type: 'colorless'},
  WBSP_16: {name: 'Computer Error', cardType:'trainer'}
};

const WIZARDS_BLACK_STAR_PROMO = {
  ...WIZARDS_BLACK_STAR_PROMO_BF
}

export const BF_CARDS = {
  BS: BASE_SET,
  JU: JUNGLE,
  FO: FOSSIL,
  WBSP: WIZARDS_BLACK_STAR_PROMO_BF
}

export const BF_ORDER = {
  EN: [
    ...BASE_SET.CARD_ORDER.EN
  ],
  JP: [
    ...BASE_SET.CARD_ORDER.JP
  ]
}
