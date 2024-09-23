import { getFormatCards } from "../boot.util";

const GEN_ONE = ['Venusaur','Ivysaur','Bulbasaur','Charizard','Charmeleon','Charmander','Blastoise','Wartortle','Squirtle','Butterfree','Metapod','Caterpie','Beedrill','Kakuna','Weedle','Pidgeot','Pidgeotto','Pidgey','Raticate','Rattata','Fearow','Spearow','Arbok','Ekans','Raichu','Pikachu','Pichu','Sandslash','Sandshrew','Nidoqueen','Nidorina','Nidoran (F)','Nidoking','Nidorino','Nidoran (M)','Clefable','Clefairy','Cleffa','Ninetales','Vulpix','Wigglytuff','Jigglypuff','Igglybuff','Crobat','Golbat','Zubat','Bellossom','Vileplume','Gloom','Oddish','Parasect','Paras','Venomoth','Venonat','Dugtrio','Diglett','Persian','Meowth','Golduck','Psyduck','Primape','Mankey','Arcanine','Growlithe','Politoed','Poliwrath','Poliwhirl','Poliwag','Alakazam','Kadabra','Abra','Machamp','Machoke','Machop','Victreebel','Weepinbell','Bellsprout','Tentacruel','Tentacool','Golem','Graveler','Geodude','Rapidash','Ponyta','Slowking','Slowbro','Slowpoke','Magnezone','Magneton','Magnemite',"Farfetch'd",'Dodrio','Doduo','Dewgong','Seel','Muk','Grimer','Cloyster','Shellder','Gengar','Haunter','Gastly','Steelix','Onix','Hypno','Drowzee','Kinger','Krabby','Electrode','Voltorb','Exeggutor','Exeggcute','Marowak','Cubone','Hitmontop','Hitmonlee','Hitmonchan','Tyrogue','Lickilicky','Lickitung','Weezing','Koffing','Rhyperior','Rhydon','Rhyhorn','Blissey','Chansey','Happiny','Tangrowth','Tangela','Kangaskhan','Kingdra','Seadra','Horsea','Seaking','Goldeen','Starmie','Staryu','Mr. Mime','Mime Jr.','Scizor','Scyther','Jynx','Smoochum','Electivire','Electabuzz','Elekid','Magmortar','Magmar','Magby','Pinsir','Tauros','Gyarados','Magikarp','Lapras','Ditto','Leafeon','Flareon','Vaporeon','Jolteon','Espeon','Umbreon','Sylveon','Eevee','Porygon Z','Porygon 2','Porygon','Omastar','Omanyte','Kabutops','Kabuto','Aerodactyl','Snorlax','Munchlax','Articuno','Zapdos','Moltres','Dragonite','Dragonair','Dratini','Mewtwo','Mew'];

const GEN_TWO = ['Meganium','Bayleef','Chikorita','Typhlosion','Quilava','Cyndaquil','Feraligatr','Croconaw','Totodile','Furrett','Sentret','Noctowl','Hoothoot','Ledian','Ledyba','Ariados','Spinarak','Lanturn','Chinchou','Togekiss','Togetic','Togepi','Xatu','Natu','Ampharos','Flaafy','Mareep','Azumarill','Marill','Azuril','Sudowoodo','Bonsly','Jumpluff','Skiploom','Hoppip','Ambipom','Aipom','Sunflora','Sunkern','Yanmega','Yanma','Quagsire','Wooper','Honchkrow','Murkrow','Mismagius','Misdreavus','Unown','Wobbuffet','Wynaut','Girafarig','Forretress','Pineco','Dunsparce','Gliscor','Gligar','Granbull','Snubbul','Qwilfish','Shuckle','Heracross','Weavile','Sneasel','Ursaring','Teddiursa','Magcargo','Slugma','Mamoswine','Piloswine','Swinub','Corsola','Octillery','Remoraid','Delibird','Mantine','Mantyke','Skarmory','Houndoom','Houndour','Donphan','Phanpy','Stantler','Smeargle','Miltank','Raikou','Entei','Suicune','Tyranitar','Pupitar','Larvitar','Lugia','Ho-oh','Celebi'];

const GEN_THREE = ['Sceptile','Grovyle','Treecko','Blaziken','Combusken','Torchic','Masquerain','Surskit','Sableye','Roserade','Roselia','Flygon','Vibrava','Trapinch','Altaria','Swablu','Dusknoir','Dusclops','Duskull','Absol','Registeel','Rayquaza','Jirachi','Deoxys'];

const GEN_FOUR = ['Empoleon','Prinplup','Piplup','Vespiquen','Combee','Pachirisu','Drifblim','Drifloon','Spiritomb','Garchomp','Gabite','Gible','Leafeon','Dialga','Palkia','Darkrai','Shaymin'];

const GEN_FIVE = ['Victini','Stoutland','Herdier','Lillipup','Musharna','Munna','Zebstrika','Blitzle','Audino','Seismitoad','Palpitoad','Tympole','Sawk','Sigilyph','Cofagrigus','Yamask','Garbodor','Trubbish','Gothitelle','Gothorita','Gothita','Klinklang','Klang','Klink','Eelektrik','Tynamo','Accelgor','Shelmet','Bouffalant','Cobalion','Terrakion','Virizion','Reshiram','Zekrom','Landorus','Kyurem','White Kyurem','Black Kyurem','Keldeo','Meloetta','Genesect'];

export const PKMN_SORT_ORDER = [...GEN_ONE, ...GEN_TWO, ...GEN_THREE, ...GEN_FOUR, ...GEN_FIVE];

export const TYPE_ORDER = ['grass','fire','water','lightning','psychic','fighting','dark','metal','dragon','fairy','colorless'];

const removeExcess = string => {
  return string.replace(" EX","");
}

const pkmnSort = (_a,_b) => {
    let a = removeExcess(getFormatCards()[_a.number.split("_")[0]][_a.number].name);
    let b = removeExcess(getFormatCards()[_b.number.split("_")[0]][_b.number].name);
    if(!PKMN_SORT_ORDER.includes(a) || !PKMN_SORT_ORDER.includes(b)){ console.log("Missing from sort order list: ",a,b); return 1 }
    if(PKMN_SORT_ORDER.indexOf(a) < PKMN_SORT_ORDER.indexOf(b)) return -1;
    if(PKMN_SORT_ORDER.indexOf(a) > PKMN_SORT_ORDER.indexOf(b)) return 1;
    if(PKMN_SORT_ORDER.indexOf(a) === PKMN_SORT_ORDER.indexOf(b)) return 0;
    return 0;
  }


const filterPkmnType = type => card => getFormatCards()[card.number.split("_")[0]][card.number].type === type;

export const sortPkmn = (pkmnList) => {
  let typesObj = {};

  for(let type of TYPE_ORDER){
    typesObj[type] = pkmnList.filter(filterPkmnType(type)).sort(pkmnSort);
  }

  return [...typesObj.grass, ...typesObj.fire, ...typesObj.water, ...typesObj.lightning, ...typesObj.psychic, ...typesObj.fighting, ...typesObj.dark, ...typesObj.metal, ...typesObj.dragon, ...typesObj.colorless];
}


export const sortBasicEnergy = (_a,_b) => {
  let a = getFormatCards()[_a.number.split("_")[0]][_a.number].type;
  let b = getFormatCards()[_b.number.split("_")[0]][_b.number].type;

  if(TYPE_ORDER.indexOf(a) < TYPE_ORDER.indexOf(b)) return -1
  if(TYPE_ORDER.indexOf(a) > TYPE_ORDER.indexOf(b)) return 1
  if(TYPE_ORDER.indexOf(a) === TYPE_ORDER.indexOf(b)) return 0
  return 0;
}