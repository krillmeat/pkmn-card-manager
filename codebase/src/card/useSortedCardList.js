import { useContext, useEffect, useState } from "react"
import { CardContext } from "../app";
import { FORMATS } from "../data/formats.data";
import { getSet } from "../cards.util";
import { PKMN_SORT_ORDER, TYPE_ORDER, removeExcess } from "./sort.util";


export const useSortedCardList = () => {
  const [sorted,setSorted] = useState();
  const [context] = useContext(CardContext);

  const filterCore = card => card.counts.core > 0;
  const filterDeck = card => card.counts.core === 0 && card.counts.deck > 0;
  const filterType = type => card => {
    let data = FORMATS[context.format].cards[getSet(card.number)][card.number]; 
    if(!data) {console.log("Missing: ",card.number); return false; }
    return data.cardType === type
  }

  const filterPkmnType = type => card => FORMATS[context.format].cards[getSet(card.number)][card.number].type === type;

  /* Sort function that orders PKMN in Dex order (but in Stage 2 -> Stage 1 -> Basic order) */
  const pkmnSort = (_a,_b) => {
    let CARDS = FORMATS[context.format].cards;
    let a = removeExcess(CARDS[getSet(_a.number)][_a.number].name);
    let b = removeExcess(CARDS[getSet(_b.number)][_b.number].name);
    if(!PKMN_SORT_ORDER.includes(a) || !PKMN_SORT_ORDER.includes(b)){ console.log("Missing from sort order list: ",a,b); return 1 }
    if(PKMN_SORT_ORDER.indexOf(a) < PKMN_SORT_ORDER.indexOf(b)) return -1;
    if(PKMN_SORT_ORDER.indexOf(a) > PKMN_SORT_ORDER.indexOf(b)) return 1;
    if(PKMN_SORT_ORDER.indexOf(a) === PKMN_SORT_ORDER.indexOf(b)) return 0;
    return 0;
  }

  /* Sort function that orders Basic Energy in standard order */
  const sortBasicEnergy = (_a,_b) => {
    let CARDS = FORMATS[context.format].cards;
    let a = CARDS[getSet(_a.number)][_a.number].type;
    let b = CARDS[getSet(_b.number)][_b.number].type;
  
    if(TYPE_ORDER.indexOf(a) < TYPE_ORDER.indexOf(b)) return -1
    if(TYPE_ORDER.indexOf(a) > TYPE_ORDER.indexOf(b)) return 1
    if(TYPE_ORDER.indexOf(a) === TYPE_ORDER.indexOf(b)) return 0
    return 0;
  }

  const sortPkmn = pkmnList => {
    let typesObj = {};
  
    for(let type of TYPE_ORDER){
      typesObj[type] = pkmnList.filter(filterPkmnType(type)).sort(pkmnSort);
    }
  
    return [...typesObj.grass, ...typesObj.fire, ...typesObj.water, ...typesObj.lightning, ...typesObj.psychic, ...typesObj.fighting, ...typesObj.darkness, ...typesObj.metal, ...typesObj.dragon, ...typesObj.colorless];
  }

  useEffect(()=>{
    const ORDER = ['pkmn','trainer','item','supporter','tool','stadium','sEnergy'];
    let sortObj = {};
    if(!context || !context?.cardArray) return;

    for(let type of ORDER){
      let core = context.cardArray.filter(filterCore).filter(filterType(type));
          core = type === 'pkmn' ? sortPkmn(core) : core;

      let deck = context.cardArray.filter(filterDeck).filter(filterType(type));
          deck = type === 'pkmn' ? sortPkmn(deck) : deck;

      sortObj[type] = {core,deck};
    }

    let basicEnergy = context.cardArray.filter(filterType('bEnergy')).sort(sortBasicEnergy);

    setSorted([...sortObj.pkmn.core, ...sortObj.supporter.core, ...sortObj.trainer.core, ...sortObj.item.core, ...sortObj.tool.core,  ...sortObj.stadium.core, ...sortObj.sEnergy.core,
            ...sortObj.pkmn.deck, ...sortObj.supporter.deck, ...sortObj.trainer.deck, ...sortObj.item.deck, ...sortObj.tool.deck, ...sortObj.stadium.deck, ...sortObj.sEnergy.deck, ...basicEnergy]);
  },[context?.cardArray])

  return sorted;
}
