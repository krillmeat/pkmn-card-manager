import { useEffect, useState } from "react";
import { buildCardObj } from "./card-array.util";

export const useCardArray = (format,coreObj) => {

  const [cardArray,setCardArray] = useState([]);

  useEffect(()=>{
    if(!format || !coreObj || Object.keys(coreObj).length === 0) return;

    let _array = [];

    for(let cardNumber of Object.keys(coreObj)){
      let card = buildCardObj(cardNumber,coreObj[cardNumber],format);
      _array.push(card);
    }

    setCardArray([..._array])
  },[format,coreObj]);

  return cardArray;
}
