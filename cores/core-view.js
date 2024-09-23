import { sortCardArray } from "./core.util";
import { getCardArray, getFormatDecks } from "../boot.util";
import { buildCoreTableElem } from "../build/core.build";


export const coreView = () => {
  let deckListOrder = Object.keys(getFormatDecks());
  let cardArray = getCardArray();
      cardArray = sortCardArray(cardArray);

      console.log("CA: ",cardArray);

  let coreTableElem = buildCoreTableElem(cardArray,deckListOrder);

  return coreTableElem;
}
