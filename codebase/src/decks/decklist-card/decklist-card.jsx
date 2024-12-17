import React, {useEffect,useMemo,useState} from 'react';
import './decklist-card.css';

export const DecklistCard = ({currDeck,deckList,format,img ={},showDirect = false}) => {

  const [showCard,setShowCard] = useState(showDirect);

  const SORTED_CARDS = useMemo(()=>{
    let PKMN = [];
    let TRAINERS = [];
    let ENERGY = [];

    for(let card of deckList){
      const cardType = card.data.cardType;
      if(cardType === 'pkmn') PKMN.push(card);
      if(cardType === 'trainer' || cardType === 'supporter' || cardType === 'stadium') TRAINERS.push(card);
      if(cardType === 'bEnergy' || cardType === 'sEnergy') ENERGY.push(card);

    }

    return {PKMN,TRAINERS,ENERGY}
  },[deckList]);

  const SubList = ({card,currDeck}) => {

    const truncatedName = card.data.name.length > 14 ? card.data.name.substring(0,14) + "…" : card.data.name;
    
    // The idea with the superscript is to show how many copies that are in a core should be with the deck
    // eg: You have 2 Cleffa in the Core, but the deck needs 3 (and is the only deck that needs more than 2), it should show 1,
    //     because that 1 Cleffa needs to stay with the deck
    let coreCount = (card.decks[currDeck] - card.counts.core);
        coreCount = coreCount < 0 ? 0 : coreCount;
        coreCount = card.counts.core === 0 ? 0 : coreCount; // If there's not actually a core count for this card, ignore

    const coreCountClass = useMemo(()=>{
      let classes = ['count'];
      if(card.counts.core !== 0) classes.push("bold");
      if(coreCount ===  0) classes.push("no-core-count")

      return classes.join(" ");
    },[coreCount])

    return <p className='card'>
    <span className='left'>
      <span className={coreCountClass}>{card.decks[currDeck]}<span className='core-count'>{coreCount}</span></span>
      <span className='name'>{truncatedName}</span>
    </span>
    <span className='number'>{card.number.replace("_","")}</span>
  </p>
  }

  return(<>
  {!showDirect && <button onClick={()=>{setShowCard(true)}}>Show Decklist</button> }
  {showCard && <div className={'decklist-card-wrap '+(showDirect ? 'hide-wrap' : '')} onClick={()=>{if(!showDirect) setShowCard(false)}}>
    <div className='decklist-card'>
      <div className='img-wrap'><img src={img?.src} style={{transform: `scale(${img?.scale}) translate(${img?.offsetX}mm,${img?.offsetY}mm)`}} /></div>
      <p className='deck-name'>{currDeck.replace("_"," ")}</p>
      <p className='label'>POKEMON</p>
      <div className='sub-list'>
      {SORTED_CARDS.PKMN.map(card => {
        return <SubList card={card} currDeck={currDeck}/>
      })}</div>

      <p className='label'>TRAINERS</p>
      <div className='sub-list'>
      {SORTED_CARDS.TRAINERS.map(card => {
        return <SubList card={card} currDeck={currDeck}/>

      })}</div>

      <p className='label'>ENERGY</p>
      <div className='sub-list'>
      {SORTED_CARDS.ENERGY.map(card => {
        return <SubList card={card} currDeck={currDeck}/>
      })}</div>


      <p className='format'>{format.toUpperCase()} - BLOCK FORMAT</p>

    </div>
  </div>}
  </>)
}
