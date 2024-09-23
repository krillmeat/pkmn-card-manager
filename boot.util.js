import { HGSS_CARDS } from "./data/hgss/hgss.cards";
import { HGSS_DECKS, HGSS_RESTRICTED_MATCHUPS } from "./data/hgss/hgss.deck";
import { HGSS_OWNED } from "./data/hgss/hgss.owned";

import { BW_CARDS } from "./data/bw/bw.cards";
import { BW_DECKS, BW_RESTRICTED_MATCHUPS } from "./data/bw/bw.deck";
import { BW_OWNED } from "./data/bw/bw.owned";

let coreObj;
let cardArray;

const getFormatParam = () => {
  let queryParam = window.location.search.substring(1);
  let splitParams = queryParam.split("&");
  for(let p of splitParams){
    if(p.indexOf("format") != -1) return p.split("=")[1]
  }

  return "";
}

export const getCoreObj = () => coreObj;
export const getCardArray = () => cardArray;

export const setCoreObj = value => { coreObj = value }
export const setCardArray = value => { cardArray = value }

export const getFormatDecks = () => {
  let format = getFormatParam();
  // TODO: Object-ify
  if(format === 'hgss') return HGSS_DECKS;
  if(format === 'bw') return BW_DECKS;
  return {};
}

export const getFormatRestrictedMatchups = () =>{
  let format = getFormatParam();
  if(format === 'hgss') return HGSS_RESTRICTED_MATCHUPS;
  if(format === 'bw') return BW_RESTRICTED_MATCHUPS;
  return {};
}

export const getFormatCards = () =>{
  let format = getFormatParam();
  if(format === 'hgss') return HGSS_CARDS;
  if(format === 'bw') return BW_CARDS;
  return {};
}

export const getFormatOwned = () =>{
  let format = getFormatParam();
  if(format === 'hgss') return HGSS_OWNED;
  if(format === 'bw') return BW_OWNED;
  return {};
}
