import { coreView } from "./cores/core-view";
import { buildCardArray, buildCoreObject } from "./cores/core.util";
import { getFormatDecks, setCardArray,setCoreObj } from "./boot.util";
import { deckConverter } from "./deck-converter/deck-converter";

let rootElem = document.getElementById('content');

let corePage, deckConverterPage;

const changePage = pageName => {
  rootElem.innerHTML = "";
  if(pageName === 'core') rootElem.appendChild(corePage);
  if(pageName === 'convert') rootElem.appendChild(deckConverterPage);
}

const attachNavEvents = () => {
  document.getElementById('nav-button-core').addEventListener('click',e => {changePage('core')})
  document.getElementById('nav-button-convert').addEventListener('click',e => {changePage('convert')})
}

window.onload = function () {
  init();
  // deckConverter();
};

var init = function init() {

  attachNavEvents();

  getFormatDecks();
  let _coreObj = buildCoreObject(getFormatDecks());
  setCoreObj(_coreObj);

  let _cardArray = buildCardArray(_coreObj);
  setCardArray(_cardArray);

  deckConverterPage = deckConverter();
  corePage = coreView();

  rootElem.appendChild(corePage);
};
