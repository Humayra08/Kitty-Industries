export interface SwitchSeries {
  name: string;
  /** Real product photo for the series picker card. Falls back to the SeriesSwitchIcon illustration when unset. */
  cardImage?: string;
}

/**
 * Cloudinary source shots are inconsistently framed (the products fill only ~25% of the
 * frame), so every card photo is trimmed to its content bounding box and re-padded into a
 * uniform 5:2 canvas on a white backdrop — keeps all photo cards the same shape regardless
 * of how the original was cropped.
 */
const CARD_IMAGE_TRANSFORM = 'e_trim/c_pad,w_1000,h_400,b_white/f_auto,q_auto';
const cardImage = (url: string) => url.replace('/image/upload/', `/image/upload/${CARD_IMAGE_TRANSFORM}/`);

/** Finish/series lineup offered across both Gang and Piano switch & socket product lines. */
export const switchSeriesList: SwitchSeries[] = [
  { name: 'ART SERIES', cardImage: cardImage('https://res.cloudinary.com/dcdo4venk/image/upload/v1784015020/art_series_1_gtrg33.png') },
  { name: 'BLANCO SERIES GOLDEN', cardImage: cardImage('https://res.cloudinary.com/dcdo4venk/image/upload/v1784014392/blanko_golden_1_tv9u53.png') },
  { name: 'BLANCO SERIES WHITE', cardImage: cardImage('https://res.cloudinary.com/dcdo4venk/image/upload/v1784014796/blanko_white_1_bli757.png') },
  { name: 'DOREN SERIES GOLDEN', cardImage: cardImage('https://res.cloudinary.com/dcdo4venk/image/upload/v1784012948/doren_golden_1_amy1xa.png') },
  { name: 'DOREN SERIES WHITE', cardImage: cardImage('https://res.cloudinary.com/dcdo4venk/image/upload/v1784013238/doren_white_1_qt8mk2.png') },
  { name: 'GLORIA SERIES', cardImage: cardImage('https://res.cloudinary.com/dcdo4venk/image/upload/v1784012093/banner2_1_yk1f9b.png') },
  { name: 'OPPLE SERIES' },
  { name: 'VENUS SERIES', cardImage: cardImage('https://res.cloudinary.com/dcdo4venk/image/upload/v1784011194/banner_1_k6hxht.png') },
  { name: 'VERONA SERIES', cardImage: cardImage('https://res.cloudinary.com/dcdo4venk/image/upload/v1784013936/verona_1_cs0vpd.png') },
  { name: 'VIP SERIES GOLDEN', cardImage: cardImage('https://res.cloudinary.com/dcdo4venk/image/upload/v1784023708/vip_golden_1_uwzwzr.png') },
  { name: 'VIP SERIES WHITE', cardImage: cardImage('https://res.cloudinary.com/dcdo4venk/image/upload/v1784023874/vip_white_1_xuc9i9.png') },
  { name: 'ZHILIK SERIES GOLDEN' },
  { name: 'ZHILIK SERIES WHITE' },
];

export const seriesSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');
