import { HGSS_CARDS } from "./hgss/hgss.card";
import {HGSS_DECKS, HGSS_RESTRICTED_MATCHUPS} from './hgss/hgss.deck';
import {HGSS_OWNED} from './hgss/hgss.owned';

import { BW_CARDS } from "./bw/bw.card";
import { BW_DECKS, BW_RESTRICTED_MATCHUPS } from "./bw/bw.deck";
import { BW_OWNED } from "./bw/bw.owned";

import {XY_CARDS} from './xy/xy.card';
import {XY_DECKS, XY_RESTRICTED_MATCHUPS} from './xy/xy.deck';
import { XY_OWNED } from "./xy/xy.owned";
import { BF_DECKS, BF_RESTRICTED_MATCHUPS } from "./bf/bf.deck";
import { BF_CARDS, BF_ORDER } from "./bf/bf.card";
import { BF_OWNED } from "./bf/bf.owned";
import { BN_CARDS, BN_ORDER } from "./bn/bn.card";
import { BN_OWNED } from "./bn/bn.owned";
import { BN_DECKS, BN_RESTRICTED_MATCHUPS } from "./bn/bn.deck";

export const FORMATS = {
  bf: {
    decks: BF_DECKS,
    cards: BF_CARDS,
    restricted: BF_RESTRICTED_MATCHUPS,
    owned: BF_OWNED,
    cardOrder: BF_ORDER,
  },

  bn: {
    decks: BN_DECKS,
    cards: BN_CARDS,
    restricted: BN_RESTRICTED_MATCHUPS,
    owned: BN_OWNED,
    cardOrder: BN_ORDER
  },

  hgss: {
    decks: HGSS_DECKS,
    cards: HGSS_CARDS,
    restricted: HGSS_RESTRICTED_MATCHUPS,
    owned: HGSS_OWNED
  },

  bw: {
    decks: BW_DECKS,
    cards: BW_CARDS,
    restricted: BW_RESTRICTED_MATCHUPS,
    owned: BW_OWNED
  },

  xy: {
    decks: XY_DECKS,
    cards: XY_CARDS,
    restricted: XY_RESTRICTED_MATCHUPS,
    owned: XY_OWNED
  }
}
