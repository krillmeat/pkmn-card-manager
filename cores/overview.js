import { calcCoreValue, isEnergy } from "./core.util";

export const buildOverview = coreArray => {
  let root = document.getElementById("content");

  let overviewElem = document.createElement('div');
      overviewElem.classList.add("overview");

  let totalCards = 0;
  let totalNeed = 0;

  let singleCards = 0;
  let singleNeed = 0;

  let singleCore = 0;
  let singleCoreNeed = 0;

  for(let card of coreArray){
    if(!isEnergy(card.number)){
      let allCount = ((card.coreValue * 2) + card.deckValue); 
      totalCards += allCount;
      let need = allCount - card.have;
          need = need < 0 ? 0 : need;
      totalNeed += need; 

      let singleCount = (card.coreValue + card.deckValue);
      singleCards += singleCount;
      let _singleNeed = singleCount - card.have;
          _singleNeed = _singleNeed < 0 ? 0 : _singleNeed;
      singleNeed += _singleNeed;

      singleCore += card.coreValue;
      let _singleCoreNeed = card.coreValue - card.have;
      _singleCoreNeed = _singleCoreNeed < 0 ? 0 : _singleCoreNeed;
      singleCoreNeed += _singleCoreNeed;
    } 
  }

  let percent = Math.ceil(((totalCards - totalNeed) / totalCards) * 100);
  let singlePercent = Math.ceil(((singleCards - singleNeed) / singleCards) * 100);
  let singleCorePercent = Math.ceil(((singleCore - singleCoreNeed)/singleCore)*100)

  let total = `<p>Total Cards: ${totalCards - totalNeed}/${totalCards} [${percent}%]</p>`;
  let single = `<p>Single Core: ${singleCards - singleNeed}/${singleCards} [${singlePercent}%]</p>`;
  let core = `<p>Core Only (Single): ${singleCore - singleCoreNeed}/${singleCore} [${singleCorePercent}%]</p>`;

  overviewElem.innerHTML = total + single + core;

  root.appendChild(overviewElem);
}
