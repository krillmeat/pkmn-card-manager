import { useEffect, useState } from "react"
import { FORMATS } from "../data/formats.data";

export const useCoreObj = (format) => {
  const [coreObj,setCoreObj] = useState();

  const {decks} = FORMATS[format];

  useEffect(()=>{
    if(!format) return;

    let _obj = {};

    for(let deck of Object.keys(decks)){
        let _deck = decks[deck].cards;
        for(let card of Object.keys(_deck)){
          let _card = _deck[card];
            _obj[card] = {
              [deck]: _card,
              ..._obj[card]
            }
        }
      }

    setCoreObj({..._obj});

  },[format,decks])

  return coreObj;
}
