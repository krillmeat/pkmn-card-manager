import { getFormatCards, getFormatDecks } from "../boot.util";

export const getRootElem = () => document.getElementById("content");


const buildCountClass = (count,card,label) => {
  let list = [];
  if(count >= 10) list.push("small-text");
  if(count === 0) list.push("fade");

  if((label === 'need-core-single' || label === 'need-core-double') && card.counts.core === 0) list.push("hide")
  if(label === 'need-deck' && card.counts.deck === 0) list.push("hide");
  return list.join(" ");
}

const buildNeedClass = need => {
  if(need.core.single === 0 && need.core.double === 0 && need.deck === 0) return "all";
  if(need.core.single === 0 && need.deck === 0) return "single";
  return 'none';
}

const buildDittoColumn = card => {
  let _count = document.createElement("p");
      _count.classList.add("deck-count");

  let allCount = 0;

  for(let deck of Object.keys(card.decks)){
    allCount += card.decks[deck];
  }

  if(allCount > 9) _count.classList.add("small-text")
  _count.innerHTML = allCount;

  return _count;
}

/**
 * Creates the subsection of the Core Table with the PKMN info
 * 
 * Number | Type | Name
 * @param {Array} cards list of all of the cards 
 * @returns HTML Node for table section about the card info (number, type, name, etc.)
 */
const buildCoreTableCardInfo = cards => {
  let cardInfoElem = document.createElement('div');
      cardInfoElem.classList.add("table-section","card-info");

  cardInfoElem.innerHTML = "<div class='header'><p>Card</p></div>"

  for(let card of cards){
    let _elem = document.createElement("div");
        _elem.classList.add("row","info");

    let set = card.number.split("_")[0];
    let cardData = getFormatCards()[set][card.number];

    let numberElem = `<p class="number ${cardData.type}">${card.number.replace("_","")}</p>`;
    let typeElem = cardData.type ? `<div class='type-icon'><img src='file:///C:/Users/conov/Documents/pkmn-card-manager/images/energy/${cardData.type}.png'/></div>` : `<div class='type-icon'></div>`
    let nameElem = `<p class="name">${cardData.name}</p>`

    _elem.innerHTML = numberElem + typeElem + nameElem;

    cardInfoElem.appendChild(_elem);
  }

  return cardInfoElem;
}

export const buildCoreTableDecklists = (cards,deckListOrder) => {
  let decklistElem = document.createElement('div');
      decklistElem.classList.add("table-section","decklist");

  let headerHTML = "<div class='header decklist'>";
  for(let deck of deckListOrder){
    let mascot = getFormatDecks()[deck].mascots[0];
    let image = !mascot ? 'ditto' : mascot;
    headerHTML += `<div class='img-wrap'><img src="file:///C:/Users/conov/Documents/pkmn-card-manager/images/pkmn/${image}.png"/></div>`
  }
  headerHTML += "<div class='img-wrap'><img src='file:///C:/Users/conov/Documents/pkmn-card-manager/images/pkmn/ditto.png'/></div>";

  headerHTML += "</div>"

  decklistElem.innerHTML = headerHTML;

  console.log("CARDS: ",cards)

  for(let card of cards){
    let _elem = document.createElement("div");
        _elem.classList.add("row","decks");

    for(let deck of deckListOrder){

      let _count = document.createElement("p");
          _count.classList.add("deck-count");
      
      if(!card.decks[deck]) _count.classList.add("hide")

          _count.innerHTML = card.decks[deck] || "0";

          _elem.appendChild(_count);
    }

    let dittoColumn = buildDittoColumn(card);
    _elem.appendChild(dittoColumn);

    decklistElem.appendChild(_elem);
  }

  return decklistElem;
}

const buildCoreTableCounts = cards => {
  let cardCountsElem = document.createElement('div');
      cardCountsElem.classList.add("table-section","card-counts");

      cardCountsElem.innerHTML = "<div class='header'><div class='top'><p>Count</p><p>Need</div><div class='bottom'><p>C</p><p>D</p><p>C1</p><p>C2</p><p>D</p></div>"
  
  for(let card of cards){
    let _elem = document.createElement("div");
        _elem.classList.add("row","counts");

    let coreCountElem = `<p class="core ${buildCountClass(card.counts.core,card,'core-count')}">${card.counts.core}</p>`;
    let deckCountElem = `<p class="deck ${buildCountClass(card.counts.deck,card,'deck-count')}">${card.counts.deck}</p>`;

    let coreNeedSingleElem = `<p class="${buildCountClass(card.need.core.single,card,'need-core-single')}">${card.need.core.single}</p>`;
    let coreNeedDoubleElem = `<p class="${buildCountClass(card.need.core.double,card,'need-core-double')}">${card.need.core.double}</p>`;
    let deckNeedElem = `<p class="${buildCountClass(card.need.deck,card,'need-deck')}">${card.need.deck}</p>`;

    _elem.innerHTML = `<div class='count'>${coreCountElem} ${deckCountElem}</div> <div class='need ${buildNeedClass(card.need)}'>${coreNeedSingleElem} ${coreNeedDoubleElem} ${deckNeedElem}</div>`;

    cardCountsElem.appendChild(_elem);
  }
  

  return cardCountsElem;
}

/**
 * Builds a Table Element to be used for the Core Display
 * @returns table element node
 */
export const buildCoreTableElem = (cardArray, deckListOrder) => {
  let tableElem = document.createElement("div");
      tableElem.classList.add("table");    
      tableElem.classList.add("core");

  let tableWrapperElem = document.createElement('div');
      tableWrapperElem.classList.add("table-wrapper");

  let cardInfoElem = buildCoreTableCardInfo(cardArray);

  let cardDecklistElem = buildCoreTableDecklists(cardArray,deckListOrder);

  let cardCountsElem = buildCoreTableCounts(cardArray);

  tableWrapperElem.appendChild(cardInfoElem);
  tableWrapperElem.appendChild(cardDecklistElem);
  tableWrapperElem.appendChild(cardCountsElem);

  tableElem.appendChild(tableWrapperElem);


  return tableElem;
}
