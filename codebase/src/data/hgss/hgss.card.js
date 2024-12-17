const HS = {
  //POKEMON
  HS_1: {name:'Arcanine',cardType:'pkmn',type:'fire'},
  HS_2: {name:'Azumarill',cardType:'pkmn',type:'water'},
  HS_3: {name:'Clefable',cardType:'pkmn'},
  HS_4: {name:'Gyardos',cardType:'pkmn',type:'water'},
  HS_5: {name:'Hitmontop',cardType:'pkmn'},
  HS_6: {name:'Jumpluff',cardType:'pkmn',type:'grass'},

  HS_7: {name:'Ninetales',cardType:'pkmn',type:'fire', stage:'stageOne',
    weakness:'water', rc:1, evoFrom:'Vulpix',
    effects:[{type:'power',name:"Roast Reveal",text:"Once during your turn (before your attack), you may discard a {R} Energy card from your hand. If you do, draw 3 cards. This power can’t be used if Ninetales is affected by a Special Condition."},
      {type:'attack',name:"Will-o'-the-wisp",dmg:60,cost:['fire','fire','colorless']}
    ]
  },
  
  HS_8: {name:'Noctowl',cardType:'pkmn'},
  HS_9: {name:'Quagsire',cardType:'pkmn',type:'water'},
  HS_10: {name:'Raichu',cardType:'pkmn',type:'lightning'},
  HS_11: {name:'Shuckle',cardType:'pkmn'},

  HS_12: {name:'Slowking',cardType:'pkmn',type:'psychic',stage:'stageOne',
    weakness:'psychic',rc:2,evoFrom:'Slowpoke',
    effects:[{type:'power',name:'Second Sight',text:"Once during your turn (before your attack), you may look at the top 3 cards of either player’s deck and put them back on top of that player’s deck in any order. This power can’t be used if Slowking is affected by a Special Condition."},
      {type:'attack',name:'Psyshock',cost:['psychic','colorless'],dmg:30,text:"Flip a coin. If heads, the Defending Pokémon is now Paralyzed."}
    ]
  },
  
  HS_13: {name:'Wobbuffet',cardType:'pkmn',type:'psychic'},
  HS_14: {name:'Ampharos',cardType:'pkmn',type:'lightning'},
  HS_15: {name:'Ariados',cardType:'pkmn',type:'grass'},
  HS_16: {name:'Butterfree',cardType:'pkmn'},

  HS_17: {name:'Cleffa',cardType:'pkmn',type:'colorless',stage:'basic',
    effects:[{type:'body',name:'Sweet Sleeping Face',text:"As long as Cleffa is Asleep, prevent all damage done to Cleffa by attacks."},
      {type:'attack',name:'Eeeeeeek',cost:['empty'],text:"Shuffle your hand into your deck, then draw 6 cards. Cleffa is now Asleep."}
    ]
  },
  
  HS_18: {name:'Exeggutor',cardType:'pkmn'},
  HS_19: {name:"Farfetch'd",cardType:'pkmn'},

  HS_20: {name:'Feraligatr',cardType:'pkmn',type:'water',stage:'stageTwo',
    weakness:'grass',rc:2,
    effects:[{type:'attack',name:"Spinning Tail",cost:['water','colorless','colorless'],text:""},
  {type:'attack',name:"Surf",cost:['water','water','colorless','colorless'],dmg:80}]
  },
  
  HS_21: {name:'Furret',cardType:'pkmn'},
  HS_22: {name:'Granbull',cardType:'pkmn'},
  HS_23: {name:'Hypno',cardType:'pkmn',type:'psychic'},
  HS_24: {name:'Lapras',cardType:'pkmn'},
  HS_25: {name:'Ledian',type:'grass'},
  HS_26: {name:'Meganium',type:'grass'},
  HS_27: {name:'Persian',type:'colorless'},

  HS_28: {name:'Pichu',cardType:'pkmn',type:'lightning'},
  
  HS_29: {name:'Sandslash'},
  HS_30: {name:'Smoochum',type:'psychic'},
  HS_31: {name:'Sunflora',cardType:'pkmn',type:'grass'},
  HS_32: {name:'Typhlosion',type:'fire'},
  HS_33: {name:'Tyrogue',cardType:'pkmn',type:'fighting'},
  HS_34: {name:'Weezing'},

  HS_35: {name:'Bayleef',cardType:'pkmn',type:'grass', hp:90, stage:'stageOne',
    weakness:'fire', resistance:'water', rc:2, evoFrom:'Chikorita',
    effects: [{type:'attack', name:'Hammer In', cost:['colorless'], dmg:20},
              {type:'attack', name:'Razor Leaf', cost:['grass','colorless','colorless'], dmg:50}]
  },

  HS_36: {name:'Blissey',type:'colorless'},
  HS_37: {name:'Corsola',type:'water'},
  HS_38: {name:'Croconaw',cardType:'pkmn',type:'water'},
  HS_39: {name:'Delibird',type:'water'},
  HS_40: {name:'Donphan'},
  HS_41: {name:'Dunsparce'},
  HS_42: {name:'Flaafy',type:'lightning'},
  HS_43: {name:'Heracross'},
  HS_44: {name:'Igglybuff'},
  HS_45: {name:'Mantine',type:'water'},
  HS_46: {name:'Metapod'},
  HS_47: {name:'Miltank',type:'colorless'},
  HS_48: {name:'Parasect',type:'grass'},
  HS_49: {name:'Quilava',cardType:'pkmn',type:'fire'},
  HS_58: {name:'Chansey',cardType:'pkmn',type:'colorless'},

  HS_59: { name:'Chikorita', cardType:'pkmn', type:'grass', stage:'basic', hp:60,
    weakness: 'fire', resistance: 'water', rc: 1,
    effects: [{ type:'attack', name:'Tackle', cost:['grass'], dmg:10 },
              { type:'attack', name:'Razor Leaf', cost:['grass','colorless'], dmg:20 }]
   },
  
  HS_61: {name: 'Cyndaquil',cardType:'pkmn',type:'fire'},
  HS_77: {name: 'Phanpy',cardType:'pkmn',type:'fighting'},
  HS_81: {name: 'Slowpoke',cardType:'pkmn',type:'water'},
  HS_85: {name:'Sunkern',cardType:'pkmn',type:'grass'},
  HS_86: {name:'Totodile',cardType:'pkmn',type:'water'},

  HS_87: {name:'Vulpix', cardType:'pkmn',type:'fire', stage:'basic', hp:50,
    weakness:'water', rc:1,
    effects: [{type:'attack', name:'Singe', cost:['fire'], text:'Flip a coin. If heads, the Defending Pokemon is now Burned.'},
              {type:'attack', name:'Ember', cost:['fire','colorless'], dmg:30, text:'Flip a coin. If tails, discard a [R] Energy attached to Vulpix.'}]
  },

  // TMAINERS/SPECIAL ENERGY
  HS_90: {name:'Copycat', cardType:'supporter'},

  HS_92: {name: 'Fisherman', cardType:'supporter'},

  HS_96: {name: 'Pokegear 3.0', cardType:'trainer', text:"Look at the top 7 cards of your deck. Choose a Supporter card you find there, show it to your opponent, and put it into your hand. Shuffle the other cards back into your deck."},
  
  HS_97: {name:'Pokemon Collector', cardType:'supporter'},
  HS_98: {name:'Pokemon Communication', cardType:'trainer'},
  
  HS_99: {name:'Pokemon Reversal', cardType:'trainer',text:"Flip a coin. If heads, choose 1 of your opponent’s Benched Pokémon, and switch it with your opponent’s Active Pokémon."},
  
  HS_100: {name:"Professor Elm's Training Method", cardType:'supporter'},
  HS_101: {name:"Professor Oak's New Theory", cardType:'supporter'},
  HS_102: {name:'Switch', cardType:'trainer'},

  HS_103: {name:'Double Colorless Energy', cardType:'sEnergy', type:'colorless', text:"Double Colorless Energy provides {C}{C} Energy."},
  
  HS_104: {name:'Rainbow Energy', cardType:'sEnergy', type:'colorless', text:"Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.) When you attach this card from your hand to 1 of your Pokémon, put 1 damage counter on that Pokémon. (While not in play, Rainbow Energy counts as {C} Energy.)"},

  // PRIMES
  HS_106: {name: 'Blissey',cardType:'pkmn',type:'colorless',hp:130,stage:'stageOnePrime',
    weakness:'fighting',rc:2,evoFrom:'Chansey',
    effects:[{type:'power',name:"Blissful Nurse",text:"Once during your turn, when you play Blissey from your hand to evolve 1 of your Pokémon, you may remove all damage counters from all of your Pokémon. If you do, discard all Energy attached to those Pokémon that had any damage counters on them."},
      {type:'attack',name:"Strength",cost:['colorless','colorless','colorless'], dmg:60}
    ]
  },

  HS_107: {name: 'Donphan',cardType:'pkmn',type:'fighting',hp:120,stage:'stageOnePrime',
    weakness:'water',resistance:'lightning',rc:4,evoFrom:'Phanpy',
    effects:[{type:'body',name:"Exoskeleton",text:"Any damage done to Donphan by attacks is reduced by 20 (after applying Weakness and Resistance)."},
      {type:'attack',name:"Earthquake",cost:['fighting'],dmg:60,text:"Does 10 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"},
      {type:'attack',name:"Heavy Impact",cost:['fighting','fighting','fighting'],dmg:90}
    ]
  },
  
  HS_108: {name:'Feraligatr',cardType:'pkmn',type:'water'},
  
  HS_109: {name: 'Meganium',cardType:'pkmn',type:'grass', stage:'stageTwoPrime', hp:150,
    weakness:'fire', resistance:'water', rc:2, evoFrom: 'Bayleef',
    effects: [{type:'power', name:'Leaf Trans', text:"As often as you like during your turn (before your attack), you may move a [G] Energy attached to 1 of your Pokémon to another of your Pokémon. This power can’t be used if Meganium is affected by a Special Condition."},
              {type:'attack', name:'Solar Beam', cost:['grass','grass','colorless','colorless'], dmg:80}
    ]
  },

  HS_110: {name: 'Typhlosion',cardType:'pkmn',type:'fire',hp:'140',stage:'stageTwoPrime',
    weakness:'water',rc:2,evoFrom:'Quilava',
    effects:[{type:'power',name:"Afterburner",text:"Once during your turn (before your attack), you may search your discard pile for a {R} Energy card and attach it to 1 of your Pokémon. If you do, put 1 damage counter on that Pokémon. This power can’t be used if Typhlosion is affected by a Special Condition."},
      {type:'attack',name:"Flare Destroy",cost:['fire','fire','colorless'],dmg:70,text:"Discard an Energy card attached to Typhlosion and discard an Energy card attached to the Defending Pokémon."}
    ]
  },

  //ENERGIES
  HS_115: {name:'Grass Energy', cardType:'bEnergy', type:'grass'},
  HS_116: {name:'Fire Energy', cardType:'bEnergy', type:'fire'},
  HS_117: {name:'Water Energy', cardType:'bEnergy', type:'water'},
  HS_118: {name:'Lightning Energy', cardType:'bEnergy', type: 'lightning'},
  HS_119: {name:'Psychic Energy', cardType:'bEnergy', type: 'psychic'},
  HS_120: {name:'Fighting Energy', cardType:'bEnergy', type: 'fighting'},
  HS_121: {name:'Darkness Energy (Basic)', cardType:'bEnergy', type: 'darkness'},
  HS_122: {name:'Metal Energy (Basic)', cardType:'bEnergy', type: 'metal'},
};

const UL = {
  UL_1: {name: 'Jirachi',cardType:'pkmn',type:'psychic'},
  UL_8: {name: 'Shaymin',cardType:'pkmn',type:'grass'},
  UL_13: {name: 'Blastoise',cardType:'pkmn',type:'water'},

  UL_23: {name: 'Roserade',cardType:'pkmn',type:'grass', hp:90, stage:'stageOne',
    weakness:'fire',rc:1,evoFrom:'Roselia',
    effects:[{type:'power',name:'Energy Signal',text:"When you attach a {G} Energy card or {P} Energy card from your hand to Roserade during your turn, you may use this power. If you attach a {G} Energy card, the Defending Pokémon is now Confused. If you attach a {P} Energy card, the Defending Pokémon is now Poisoned. This power can’t be used if Roserade is affected by a Special Condition."},
      {type:'attack',name:'Power Blow',cost:['grass','colorless'],dmg:"20x",text:"Does 20 damage times the amount of Energy attached to Roserade."}
    ]
  },
  
  UL_38: {name: 'Pupitar',cardType:'pkmn',type:'fighting'},
  UL_40: {name: 'Seadra', cardType:'pkmn',type:'water'},
  UL_42: {name: 'Wartortle',cardType:'pkmn',type:'water'},
  UL_43: {name: 'Aipom',cardType:'pkmn',type:'colorless'},
  UL_48: {name: 'Chinchou',cardType:'pkmn',type:'lightning'},
  UL_49: {name: 'Horsea',cardType:'pkmn',type:'water'},
  UL_51: {name: 'Larvitar',cardType:'pkmn',type:'fighting'},
  UL_61: {name: 'Roselia',cardType:'pkmn',type:'grass',hp:0,stage:'basic',},
  UL_63: {name: 'Squirtle',cardType:'pkmn',type:'water'},
  UL_68: {name: 'Vulpix',cardType:'pkmn',type:'fire'},
  UL_70: {name: 'Zubat',cardType:'pkmn',type:'psychic'},

  UL_72: {name: 'Dual Ball', cardType:'trainer'},
  UL_77: {name: "Interviewer's Questions", cardType:'supporter'},
  UL_78: {name: 'Judge', cardType:'supporter'},
  UL_80: {name: 'PlusPower', cardType:'trainer'},
  UL_82: {name: 'Rare Candy', cardType:'trainer'},
  UL_83: {name: 'Super Scoop Up', cardType:'trainer'},

  UL_84: {name: 'Crobat',cardType:'pkmn',type:'psychic',hp:130,stage:'stageTwoPrime',
    weakness:'lightning',resistance:'fighting',evoFrom:"Golbat",
    effects:[{type:'attack',name:"Severe Poison",cost:["psychic"],text:"The Defending Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns."},
             {type:'attack',name:"Skill Dive",cost:["psychic"],text:"Choose 1 of your opponent’s Pokémon. This attack does 30 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"},]
  },

  UL_85: {name: 'Kingdra',cardType:'pkmn',type:'water', hp:130, stage:'stageTwoPrime',
    weakness:'lightning', rc:1, evoFrom:'Seadra',
    effects:[{type:'power',name:'Spray Slpash',text:"Once during your turn (before your attack), you may put 1 damage counter on 1 of your opponent’s Pokémon. This power can’t be used if Kingdra is affected by a Special Condition."},
      {type:'attack',name:'Dragon Steam',dmg:60,cost:['water'],text:"If your opponent has any {R} Pokémon in play, this attack’s base damage is 20 instead of 60."}
    ]
  },
  
  UL_86: {name: 'Lanturn',cardType:'pkmn',type:'lightning', hp:110, stage:'stageOnePrime',
    weakness:'fighting', rc:2, evoFrom:"Chinchou",
    effects:[{type:'power',name:'Underwater Dive',text:"Once during your turn (before your attack), you may use this power. Lanturn’s type is {W} until the end of your turn. This power can’t be used if Lanturn is affected by a Special Condition."},
      {type:'attack',name:'Powerful Spark',dmg:'40+',cost:['lightning','colorless','colorless'],text:"Does 40 damage plus 10 more damage for each Energy attached to all of your Pokémon."}
    ]
  },

  UL_88: {name: 'Tyranitar',cardType:'pkmn',type:'darkness'},

  UL_89: {name: 'Ursaring',cardType:'pkmn',type:'colorless',hp:110,stage:'stageOnePrime',
    weakness:'fighting',rc:3,evoFrom:"Teddiursa",
    effects:[{type:'body',name:'Berserk',text:"If Ursaring has any damage counters on it, each of Ursaring’s attacks does 60 more damage (before applying Weakness and Resistance)."},
      {type:'attack',name:"Hammer Arm",cost:['colorless','colorless','colorless'],dmg:30,text:"Discard the top card from your opponent’s deck."},
      {type:'attack',name:"Megaton Lariat",cost:['colorless','colorless','colorless','colorless'],dmg:60}
    ]
  },
  UL_94: {name: 'Suicune & Entei Legend (top)',cardType:'pkmn',type:'water'},
  UL_95: {name: 'Suicune & Entei Legend (bottom)',cardType:'pkmn',type:'water'},
}

const UD = {
  UD_1: {name: 'Bellossom',cardType:'pkmn',type:'grass'},

  UD_8: {name: 'Smeargle',cardType:'pkmn',type:'colorless',stage:'basic',hp:70,
    weakness:'fighting',rc:1,
    effects:[{type:'power',name:'Portrait',text:"Once during your turn (before your attack), if Smeargle is your Active Pokémon, you may look at your opponent’s hand. If you do, choose a Supporter card you find there and use the effect of that card as the effect of this power. This power can’t be used if Smeargle is affected by a Special Condition."},
    {type:'attack',name:'Tail Rap',cost:['colorless','colorless'],dmg:"20x",text:"Flip 2 coins. This attack does 20 damage times the number of heads."}
    ]
  },
  
  UD_10: {name: 'Umbreon',cardType:'pkmn',type:'darkness'},
  UD_17: {name: 'Leafeon',cardType:'pkmn',type:'grass'},
  UD_23: {name: 'Vespiquen', cardType:'pkmn',type:'grass',hp:100,stage:'stageOne',
    weakness:'fire',rc:3,evoFrom:'Combee',
    effects:[{type:'body',name:'Defense Sign',text:"Prevent all damage done to your Benched {G} Pokémon by attacks."},
      {type:'attack',name:'Mach Wind',cost:['grass','colorless','colorless'],dmg:60,text:"During your next turn, Vespiquen’s Retreat Cost is 0."}
    ]
  },

  UD_24: {name: 'Vileplume',cardType:'pkmn',type:'grass', stage:'stageTwo', hp:120, evoFrom:'Gloom',
    weakness:'psychic', rc:2,
    effects:[{type:'body', name:'Allergy Pollen', text:"Each player can't play any Trainer cards from his or her hand."},
             {type:'attack', name:'Dazzling Flower', cost:['grass','grass','colorless'], dmg:'50+', text:'Flip a coin. If heads, this attack does 50 damage plus 20 more damage. If tails, the Defending Pokemon is now Confused.'}
    ],
  },

  UD_25: {name: 'Weavile',cardType:'pkmn',type:'darkness'},

  UD_27: {name: 'Gloom',cardType:'pkmn',type:'grass', stage:'stageOne', hp:80, evoFrom:'Oddish',
    weakness:'psychic', rc:1,
    effects:[{type:'attack', name:'Miracle Powder', cost:['grass','colorless'], dmg:30, text:'Flip a coin. If heads, choose 1 Special Condition. The Defending Pokemon is now affected by that Special Condition.'}]
  },

  UD_31: {name: 'Muk',cardType:'pkmn',type:'psychic'},
  UD_44: {name: 'Combee',cardType:'pkmn',type:'grass'},
  UD_48: {name: 'Eevee',cardType:'pkmn',type:'colorless'},
  UD_54: {name: 'Houndour',cardType:'pkmn',type:'darkness'},

  UD_60: {name: 'Oddish',cardType:'pkmn',type:'grass', stage:'basic', hp:40, 
    weakness:'psychic', rc:1,
    effects:[{type:'attack', name:'Ram', cost:['colorless'], dmg:10},
             {type:'attack', name:'Find a Friend', cost:['grass'], text:'Flip a coin. If heads, search your deck for a [G] Pokemon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.'}
    ]
  },
  
  UD_66: {name: 'Slowpoke',cardType:'pkmn',type:'water'},
  UD_68: {name: 'Sneasel',cardType:'pkmn',type:'darkness'},

  UD_71: {name: 'Burned Tower', cardType:'stadium'},
  UD_73: {name: 'Energy Exchanger', cardType:'trainer'},
  UD_74: {name: 'Flower Shop Lady', cardType:'supporter'},
  UD_77: {name: "Sage's Training", cardType:'supporter', text:"Look at the top 5 cards of your deck. Choose any 2 cards you find there and put them into your hand. Discard the other cards."},
  UD_79: {name: 'Darkness Energy', cardType:'sEnergy'},

  UD_81: {name: 'Espeon',cardType:'pkmn',type:'psychic',hp:100,stage:'stageOnePrime',
    weakness:'psychic',rc:1,evoFrom:"Eevee",
    effects:[{type:'body',name:"Evolution Memories",text:"Espeon can use the attacks of all Pokémon you have in play that evolve from Eevee as its own. (You still need the necessary Energy to use each attack.)"},
      {type:'attack',name:"Solar Ray",cost:['psychic','colorless'],dmg:30,text:"Remove 1 damage counter from each of your Pokémon."}
    ]
  },

  UD_82: {name: 'Houndoom',cardType:'pkmn',type:'darkness',hp:110,stage:'stageOnePrime',
    weakness:'fighting',resistance:'psychic',rc:1,evoFrom:"Houndour",
    effects:[{type:'power',name:"Fire Breath",text:"Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Burned. This power can’t be used if Houndoom is affected by a Special Condition."},
      {type:'attack',name:'Dark Clamp',cost:['darkness','darkness','colorless'],dmg:70,text:"The Defending Pokémon can’t retreat during your opponent’s next turn."}
    ],
  },

  UD_89: {name: 'Rayquaza & Deoxys Legend (top)',cardType:'pkmn',type:'psychic'},
  UD_90: {name: 'Rayquaza & Deoxys Legend (bottom)',cardType:'pkmn',type:'psychic'},
}

const TM = {
  TM_10: {name:'Spiritomb',cardType:'pkmn',type:'psychic',hp:60,stage:'basic',
    resistance:'colorless',rc:1,
    effects:[{type:'power',name:"Spooky Whirlpool",text:"Once during your turn, when you put Spiritomb from your hand onto your Bench, you may use this power. Your opponent shuffles his or her hand into his or her deck and draws 6 cards."},
      {type:'attack',name:"Color Tag",cost:["psychic"],text:"Choose {G}{R}{W}{L}{P}{F}{D}{M} or {C} type. Put 1 damage counter on each Pokémon your opponent has in play of the type you chose."}
    ]
  },

  TM_11: {name:'Venomoth',cardType:'pkmn',type:'grass'},

  TM_21: {name: 'Elekid',cardType:'pkmn',type:'lightning',hp:30,stage:'basic',
    effects:[{type:'power',name:"Sweet Sleeping Face",text:"As long as Elekid is Asleep, prevent all damage done to Elekid by attacks."},
      {type:'attack',name:"Sparking Ball",cost:['empty'],text:"Choose 1 of your opponent’s Pokémon. This attack does 20 damage to that Pokémon. This attack’s damage isn’t affected by Weakness or Resistance. Elekid is now Asleep."}
    ]
  },

  TM_27: {name:'Magmortar',cardType:'pkmn',type:'fire',hp:100,stage:'stageOne',
    weakness:'water',rc:2,evoFrom:"Magmar",
    effects:[{type:'attack',name:'Top Burner',cost:['fire'],text:"For each {R} Energy attached to Magmortar, discard the top card from your opponent’s deck. Then, flip a coin. If tail, discard all {R} Energy attached to Magmortar."},
  {type:'attack',name:'Burst Punch',cost:['fire','fire','colorless'],dmg:60,text:"The Defending Pokémon is now Burned."}]
  },
  
  TM_35: {name:'Haunter',cardType:'pkmn',type:'psychic',hp:70,stage:'stageOne',
    weakness:'darkness',resitance:'colorless',evoFrom:"Gastly",
    effects:[{type:'attack',name:"Sneaky Placement",cost:['psychic'],text:"Put 2 damage counters on 1 of your opponent’s Pokémon."},
    {type:'attack',name:"Sleep Poison",cost:['colorless','colorless'],text:"The Defending Pokémon is now Asleep and Poisoned."}]
  },

  TM_40: {name: 'Machoke',cardType:'pkmn',type:'fighting'},

  TM_42: {name:'Magmar',cardType:'pkmn',type:'fire',hp:70,stage:'basic',
    weakness:'water',rc:2,
    effects:[{type:'attack',name:'Eruption',cost:['fire'],text:"Each player discards the top card of his or her deck. This attack does 20 damage times the number of Energy cards discarded in this way."},
  {type:'attack',name:'Combustion',cost:['fire','colorless','colorless'],dmg:30}]
  },
  
  TM_43: {name:'Magneton',cardType:'pkmn',type:'lightning'},

  TM_63: {name:'Gastly',cardType:'pkmn',type:'psychic',hp:50,stage:'basic',
    weakness:'darkness',resistance:'colorless',rc:1,
    effects:[{type:'attack',name:"Sneaky Placement",cost:['psychic'],text:"Put 1 damage counter on 1 of your opponent’s Pokémon."}]
  },

  TM_67: {name: 'Machop',cardType:'pkmn',type:'fighting'},

  TM_68: {name:'Magnemite',cardType:'pkmn',type:'lightning',hp:50,stage:'basic',
    weakness:'fighting',resistance:'metal',rc:1,
    effects:[{type:'attack',name:"Magnetic Switch",cost:['colorless'],text:"Switch Magnemite with 1 of your Benched Pokémon."},
    {type:'attack',name:"Thundershock",cost:['lightning','colorless'],dmg:20,text:"Flip a coin. If heads, the Defending Pokémon is now Paralyzed."}]
  },

  TM_81: {name: 'Venonat',cardType:'pkmn',type:'grass'},
  TM_83: {name: 'Voltorb',cardType:'pkmn',type:'lightning'},
  TM_84: {name:'Yanma',cardType:'pkmn',type:'grass'},

  TM_85: {name: 'Blackbelt', cardType:'supporter'},

  TM_87: {name:'Junk Arm', cardType:'trainer',text:"Discard 2 cards from your hand. Search your discard pile for a Trainer card, show it to your opponent, and put it into your hand. You can’t choose Junk Arm with the effect of this card."},

  TM_88: {name:'Seeker', cardType:'supporter',text:"Each player returns 1 of his or her Benched Pokémon and all cards attached to it to his or her hand. (You return your Pokémon first.)"},

  TM_89: {name:'Twins', cardType:'supporter',text:"You may use this card only if you have more Prize cards left than your opponent. Search your deck for any 2 cards and put them into your hand. Shuffle your deck afterward."},

  TM_90: {name:'Rescue Energy', cardType:'sEnergy',type:'colorless', text:"Rescue Energy provides {C} Energy. If the Pokémon this card is attached to is Knocked Out by damage from an attack, put that Pokémon back into your hand. (Discard all cards attached to that Pokémon.)"},

  TM_92: {name:'Celebi',cardType:'pkmn',type:'grass', hp:60, stage:'basicPrime',
    weakness:'fire', rc:1,
    effects: [{type:'power', name:'Forest Breath', text:"Once during your turn (before your attack), if Celebi is your Active Pokémon, you may attach a [G] Energy card from your hand to 1 of your Pokémon. This power can’t be used if Celebi is affected by a Special Condition."},
              {type:'attack', name:'Time Circle', cost:['grass','psychic','colorless'],dmg:30,text:"During your opponent’s next turn, prevent all damage done to Celebi by attacks from your opponent’s Stage 1 or Stage 2 Pokémon."}
    ]
  },

  TM_93: {name: 'Electrode',cardType:'pkmn',type:'lightning', hp:90, stage:'stageOnePrime',
    weakness:'fighting', resistance:'metal', rc:1, evoFrom:'Voltorb',
    effects:[{type:'power', name:'Energymite', text:"Once during your turn (before your attack), you may use this power. If you do, Electrode is Knocked Out. Look at the top 7 cards of your deck. Choose as many Energy cards as you like and attach them to your Pokémon in any way you like. Discard the other cards. This power can’t be used if Electrode is affected by a Special Condition."},
      {type:'attack', name:'Gigashock', cost:['lightning','colorless'],dmg:30, text:"Does 10 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"}
    ]
  },

  TM_94: {name:'Gengar',cardType:'pkmn',type:'psychic', hp:130, stage:'stageTwoPrime',
    weakness:'darkness',resistance:'colorless',rc:0,evoFrom:'Haunter',
    effects:[{type:'body',name:'Catastrophe',text:"As long as Gengar is your Active Pokémon, if any of your opponent’s Pokémon would be Knocked Out, put that Pokémon in the Lost Zone instead of discarding. (Discard all cards attached to that Pokémon.)"},
      {type:'attack',name:'Hurl into Darkness',cost:['psychic'],text:"Look at your opponent’s hand and choose a number of Pokémon you find there up to the number of {P} Energy attached to Gengar. Put the Pokémon you chose in the Lost Zone."},
      {type:'attack',name:'Cursed Drop',cost:['psychic','colorless'],text:"Put 4 damage counters on your opponent’s Pokémon in any way you like."}
    ]
  },

  TM_95: {name: 'Machamp',cardType:'pkmn',type:'fighting',hp:150,stage:'stageTwoPrime',
    weakness:'psychic',rc:3,evoFrom:"Machoke",
    effects:[{type:'power',name:"Fighting Tag",text:"Once during your turn (before your attack), if Machamp is on your Bench, you may move all {F} Energy attached to your Active Pokémon to Machamp. If you do, switch Machamp with your Active Pokémon."},
      {type:'attack',name:"Crushing Punch",cost:["fighting","colorless","colorless"],dmg:60,text:"Discard a Special Energy card attached to the Defending Pokémon."},
      {type:'attack',name:"Champ Buster",cost:["fighting","fighting","colorless","colorless"],dmg:"100+",text:"Does 100 damage plus 10 more damage for each of your Benched Pokémon that has any damage counters on it."}
    ]
  },

  TM_96: {name:'Magnezone',cardType:'pkmn',type:'lightning',hp:140,stage:'stageTwoPrime',
    weakness:'fighting',resistance:'metal',rc:3,evoFrom:'Magneton',
    effects:[{type:'power',name:"Magnetic Draw",text:"Once during your turn (before your attack), you may draw cards until you have 6 cards in your hand. This power can’t be used if Magnezone is affected by a Special Condition."},
      {type:'attack',name:"Lost Burn",cost:['lightning','colorless'], dmg:'50x',text:"Put as many Energy cards attached to your Pokémon as you like in the Lost Zone. This attack does 50 damage times the number of Energy cards put in the Lost Zone in this way."}
    ]
  },
  
  TM_97: {name:'Mew',cardType:'pkmn',type:'psychic',hp:60,stage:'basicPrime',
    weakness:'psychic',
    effects:[{type:'power',name:"Lost Link",text:"Mew can use the attacks of all Pokémon in the Lost Zone (both yours and your opponent’s). (You still need the necessary Energy to use each attack.)"},
      {type:'attack',name:"See Off",cost:['psychic'],text:"Search your deck for 1 Pokémon and put it in the Lost Zone. Shuffle your deck afterward."}
    ]
  },

  TM_98: {name:'Yanmega',cardType:'pkmn',type:'grass', hp:110, stage:'stageOnePrime',
    weakness:'lightning', resistance:'fighting', rc:0, evoFrom:'Yanma',
    effects:[{type:'body', name:'Insight', text:"If you have the same number of cards in your hand as your opponent, the attack cost of each of Yanmega’s attacks is 0."},
      {type:'attack', name:"Linear Attack", cost:['grass','colorless'], text:"Choose 1 of your opponent’s Pokémon. This attack does 40 damage to that Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)"},
      {type:'attack', name:"Sonicboom", cost:['grass','grass','colorless'], dmg:70, text:"This attack’s damage isn’t affected by Weakness or Resistance."}
    ]
  },
}

const CL = {
  CL_18: {name: 'Pachirisu',cardType:'pkmn',type:'lightning'},
  CL_29: {name: 'Mr. Mime',cardType:'pkmn',type:'psychic'},
  CL_47: {name: 'Mime Jr.',cardType:'pkmn',type:'psychic'},
  CL_73: {name: 'Teddiursa',cardType:'pkmn',type:'colorless'},

  CL_80: {name: 'Lost Remover', cardType:'trainer'},
  CL_81: {name: 'Lost World', cardType:'stadium'},
  CL_84: {name: 'Research Record', cardType:'trainer'}
}

export const HGSS_CARDS = {
  HS: HS,
  UL: UL,
  UD: UD,
  TM: TM,
  CL: CL,
  HSP:{}
}
