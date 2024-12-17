import React, {useContext, useEffect,useState} from 'react';
import './print-page.css';
import { DecklistCard } from '../decks/decklist-card/decklist-card';
import { FORMATS } from '../data/formats.data';
import { CardContext } from '../app';
import { sortDeck } from '../decks/decks';
import { Card } from '../card/card';

const filterOnlyDeck = deck => card => !!card.decks[deck]


export const PrintPage = () => {

  const [context] = useContext(CardContext);

  //  const decklist = useMemo(()=>{
  //     if(!context.cardArray) return [];
  //     return context.cardArray.filter(filterOnlyDeck(currDeck)).sort(sortDeck);
  //   },[currDeck]);

  const getDecklist = (deckName) => {
    if(!context.cardArray) return [];
  
    return context.cardArray.filter(filterOnlyDeck(deckName)).sort(sortDeck);
  }
  
  return(<div className='print-page'>

    <DecklistCard 
      currDeck='GENGAR' 
      deckList={getDecklist('GENGAR')} 
      img={FORMATS.hgss.decks.GENGAR.img} 
      format='hgss' 
      showDirect />

    <DecklistCard 
      currDeck='LANTURN' 
      deckList={getDecklist('LANTURN')} 
      img={FORMATS.hgss.decks.LANTURN.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='BLASTOISE' 
      deckList={getDecklist('BLASTOISE')} 
      img={FORMATS.hgss.decks.BLASTOISE.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='LEAFEON' 
      deckList={getDecklist('LEAFEON')} 
      img={FORMATS.hgss.decks.LEAFEON.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='MAGMORTAR' 
      deckList={getDecklist('MAGMORTAR')} 
      img={FORMATS.hgss.decks.MAGMORTAR.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='MAGNEZONE' 
      deckList={getDecklist('MAGNEZONE')} 
      img={FORMATS.hgss.decks.MAGNEZONE.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='MACHAMP_DONPHAN' 
      deckList={getDecklist('MACHAMP_DONPHAN')} 
      img={FORMATS.hgss.decks.MACHAMP_DONPHAN.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='MEGANIUM' 
      deckList={getDecklist('MEGANIUM')} 
      img={FORMATS.hgss.decks.MEGANIUM.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='RAYQUAZA_DEOXYS' 
      deckList={getDecklist('RAYQUAZA_DEOXYS')} 
      img={FORMATS.hgss.decks.RAYQUAZA_DEOXYS.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='VILEPLUME_YANMEGA' 
      deckList={getDecklist('VILEPLUME_YANMEGA')} 
      img={FORMATS.hgss.decks.VILEPLUME_YANMEGA.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='MAGNEZONE_YANMEGA' 
      deckList={getDecklist('MAGNEZONE_YANMEGA')} 
      img={FORMATS.hgss.decks.MAGNEZONE_YANMEGA.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='WEAVILE' 
      deckList={getDecklist('WEAVILE')} 
      img={FORMATS.hgss.decks.WEAVILE.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='TYRANITAR' 
      deckList={getDecklist('TYRANITAR')} 
      img={FORMATS.hgss.decks.TYRANITAR.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='URSARING_COMBEE' 
      deckList={getDecklist('URSARING_COMBEE')} 
      img={FORMATS.hgss.decks.URSARING_COMBEE.img} 
      format='hgss' 
      showDirect />

<DecklistCard 
      currDeck='UMBREON' 
      deckList={getDecklist('UMBREON')} 
      img={FORMATS.hgss.decks.UMBREON.img} 
      format='hgss' 
      showDirect />

  <div className='card-wrap size-md'> <Card CARD_DATA={FORMATS.hgss.cards.UD.UD_24} format='hgss' /> </div>
  <div className='card-wrap size-md'> <Card CARD_DATA={FORMATS.hgss.cards.TM.TM_92} format='hgss' /> </div>
  <div className='card-wrap size-md'> <Card CARD_DATA={FORMATS.hgss.cards.TM.TM_93} format='hgss' /> </div>
  <div className='card-wrap size-md'> <Card CARD_DATA={FORMATS.hgss.cards.TM.TM_93} format='hgss' /> </div>
  <div className='card-wrap size-md'> <Card CARD_DATA={FORMATS.hgss.cards.TM.TM_94} format='hgss' /> </div>
  <div className='card-wrap size-md'> <Card CARD_DATA={FORMATS.hgss.cards.TM.TM_94} format='hgss' /> </div>
  <div className='card-wrap size-md'> <Card CARD_DATA={FORMATS.hgss.cards.TM.TM_94} format='hgss' /> </div>

  </div>)
}
