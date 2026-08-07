export interface SwitchSeries {
  name: string;
  /** Real product photo for the series picker card. Falls back to the SeriesSwitchIcon illustration when unset. */
  cardImage?: string;
}

/**
 * Source shots are inconsistently framed (the products fill only ~25% of the
 * frame), so every card photo is trimmed to its content bounding box and re-padded into a
 * uniform 5:2 canvas on a white backdrop — keeps all photo cards the same shape regardless
 * of how the original was cropped. Pre-baked on R2 under a key that mirrors this transform
 * string (migrated from Cloudinary's on-the-fly transforms 2026-08-08).
 */
const R2_BASE = 'https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev';
const CARD_IMAGE_TRANSFORM = 'e_trim/c_pad,w_1000,h_400,b_white/f_auto,q_auto';
const cardImage = (url: string) => url.replace(`${R2_BASE}/`, `${R2_BASE}/${CARD_IMAGE_TRANSFORM}/`);

/** Finish/series lineup offered across both Gang and Piano switch & socket product lines. */
export const switchSeriesList: SwitchSeries[] = [
  { name: 'ART SERIES', cardImage: cardImage('https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784015020/art_series_1_gtrg33.png') },
  { name: 'GLORIA SERIES', cardImage: cardImage('https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784012093/banner2_1_yk1f9b.png') },
  { name: 'VENUS SERIES', cardImage: cardImage('https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784011194/banner_1_k6hxht.png') },
  { name: 'VERONA SERIES', cardImage: cardImage('https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784013936/verona_1_cs0vpd.png') },
  { name: 'DOREN SERIES WHITE', cardImage: cardImage('https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784013238/doren_white_1_qt8mk2.png') },
  { name: 'DOREN SERIES GOLDEN', cardImage: cardImage('https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784012948/doren_golden_1_amy1xa.png') },
  { name: 'VIP SERIES WHITE', cardImage: cardImage('https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784023874/vip_white_1_xuc9i9.png') },
  { name: 'VIP SERIES GOLDEN', cardImage: cardImage('https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784023708/vip_golden_1_uwzwzr.png') },
  { name: 'ZHILIK SERIES WHITE' },
  { name: 'ZHILIK SERIES GOLDEN' },
  { name: 'BLANCO SERIES WHITE', cardImage: cardImage('https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784014796/blanko_white_1_bli757.png') },
  { name: 'BLANCO SERIES GOLDEN', cardImage: cardImage('https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784014392/blanko_golden_1_tv9u53.png') },
  { name: 'OPPLE SERIES', cardImage: cardImage('https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784440267/opple_banner_ze31eh.png') },
];

export const seriesSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');
