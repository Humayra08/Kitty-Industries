import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const vipGoldenSeriesConfig: SeriesConfig = {
  seriesName: 'VIP Series Golden',
  seriesPath: '/products/switch-socket/gang-switch-socket/vip-series-golden',
  categoryName: 'Gang Switch Socket',
  categoryPath: '/products/switch-socket/gang-switch-socket',
  imageFolder: '',
};

const rawVipGoldenSeriesProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: '1 GANG 1 WAY SWITCH',
    subtitle: '1 Gang 1 Way Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020793/1_GANG_1_WAY_SWITCH._VG8111_civhja.png',
    modelNo: 'VG8111',
    productType: '1 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 2,
    title: '2 GANG 1 WAY SWITCH',
    subtitle: '2 Gang 1 Way Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020789/2_GANG_1_WAY_SWITCH._VG8112_gc4blf.png',
    modelNo: 'VG8112',
    productType: '2 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 3,
    title: '3 GANG 1 WAY SWITCH',
    subtitle: '3 Gang 1 Way Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020782/3_GANG_1_WAY_SWITCH._VG8113_egxjii.png',
    modelNo: 'VG8113',
    productType: '3 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 4,
    title: '4 GANG 1 WAY SWITCH',
    subtitle: '4 Gang 1 Way Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020789/4_GANG_1_WAY_SWITCH._VG8114_bhiipf.png',
    modelNo: 'VG8114',
    productType: '4 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 5,
    title: 'FAN SPEED CONTROLLER',
    subtitle: 'Fan Speed Controller',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020749/FAN_SPEED_CONTROLLER._VG81M3_kyr7io.png',
    modelNo: 'VG81M3',
    productType: 'Fan Speed Controller',
    features: ['With Switch', 'Fan Speed Control'],
  },
  {
    id: 6,
    title: 'BELL PUSH SWITCH',
    subtitle: 'Bell Push Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020748/BELLPUSH_SWITCH._VG8110_lzqfpl.png',
    modelNo: 'VG8110',
    features: ['With Switch'],
  },
  {
    id: 7,
    title: '13A 5PIN UNIVERSAL SOCKET',
    subtitle: 'Universal Socket with Neon',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020773/13A_9PIN_UNIVERSAL_SOCKET._VG8135_pxjkwv.png',
    modelNo: 'VG8135',
    socketType: 'Universal Socket',
    features: ['With Neon'],
  },
  {
    id: 8,
    title: '13A 3PIN UNIVERSAL SOCKET',
    subtitle: 'Universal Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020778/13A_3PIN_UNIVERSAL_SOCKET._VG8113S_t3bnwe.png',
    modelNo: 'VG8113S',
    socketType: 'Universal Socket',
    features: ['With Switch'],
  },
  {
    id: 9,
    title: '15A 3PIN ROUND SOCKET',
    subtitle: 'Round Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020783/15A_3PIN_ROUND_SOCKET._VG8115_bheglo.png',
    modelNo: 'VG8115',
    socketType: 'Round Socket',
    features: ['With Switch'],
  },
  {
    id: 10,
    title: '16A 2PIN UNIVERSAL SOCKET',
    subtitle: 'Universal Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020742/16A_2PIN_UNIVERSAL_SOCKET._VG8116_nlrldz.png',
    modelNo: 'VG8116',
    socketType: 'Universal Socket',
    features: ['With Switch'],
  },
  {
    id: 11,
    title: '20A DP SWITCH WITH NEON',
    subtitle: 'DP Switch with Neon',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020751/20A_DP_SWITCH_WITH_NEON._VG8120L_p6rj4o.png',
    modelNo: 'VG2820L',
    features: ['With Neon'],
  },
  {
    id: 12,
    title: 'TELEPHONE SOCKET',
    subtitle: 'Telephone Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020743/TELEPHONE_SOCKET._VG81TP_w9ey6h.png',
    modelNo: 'VG81TP',
    socketType: 'Telephone Socket',
    features: [],
  },
  {
    id: 13,
    title: 'TV/DISH SOCKET',
    subtitle: 'Television / Dish Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784020745/TV_DISH_SOCKET._VG81TV_u7vwfo.png',
    modelNo: 'VG81TV',
    socketType: 'TV / Dish Socket',
    features: [],
  },
];

export const vipGoldenSeriesProductTypes = ['1 Gang Switch', '2 Gang Switch', '3 Gang Switch', '4 Gang Switch', 'Fan Speed Controller'];
export const vipGoldenSeriesSocketTypes = ['Universal Socket', 'Round Socket', 'Telephone Socket', 'TV / Dish Socket'];
export const vipGoldenSeriesFeatureList = ['With Neon', 'With Switch', 'Fan Speed Control'];

export const vipGoldenSeriesCatalog: CatalogProduct[] = buildSeriesCatalog(rawVipGoldenSeriesProducts, vipGoldenSeriesConfig);
