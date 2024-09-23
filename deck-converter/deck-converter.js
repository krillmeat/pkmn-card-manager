const getCardName = string => {
  let _string = string;
      _string = _string.substring(_string.indexOf(" "));
      _string = _string.substring(0,_string.indexOf(" ("));
  return _string;
}

const getSet = string => {
  let start = string.indexOf("(");
  let end = string.indexOf(")");

  let setInfo = string.substring(start+1,end);

  return setInfo.replace(" ","_");
}

const buildObject = value =>{
  let cards = {};

  let cardList = value.split("\n");

  for(let card of cardList){
    let set = getSet(card);
    cards[set] = {
      name: getCardName(card),
      count: card.split(" ")[0]
    }
  }

  return cards;
}

const objToString = obj => {
  let _string = "{";

  for(let key of Object.keys(obj)){
    _string+=`${key}:${obj[key].count}, `;
  }

  return _string+"}";
}

const onClick = e => {
  e.preventDefault();
  let pasteBox = document.getElementById("paste-area");

  let value = pasteBox.value;

  let obj = buildObject(value);
  let string = objToString(obj);

  navigator.clipboard.writeText(string);
}

const buildTextAreaElem = () => {
  let elem = document.createElement("div");
      elem.classList.add("paste-deck-area");

  let form = document.createElement("form");
      form.onsubmit = onClick;

  let textArea = document.createElement('textarea');
      textArea.id = "paste-area";
      textArea.rows = 24;
      textArea.cols = 100;

  let label = document.createElement("label");
      label.innerHTML = "Paste Deck List";

  let button = document.createElement("button");
      button.type = "submit";
      button.innerHTML = "Convert";

  form.appendChild(label);
  form.appendChild(textArea);
  form.appendChild(button);

  elem.appendChild(form);

  return elem;
}

export const deckConverter = () => {
  let elem = document.createElement('div');
      elem.classList.add("deck-converter");

  let inputElem = buildTextAreaElem();

  elem.appendChild(inputElem);

  return elem;
}
