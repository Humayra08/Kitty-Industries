import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const zhilikWhiteSeriesConfig: SeriesConfig = {
  seriesName: 'Zhilik Series White',
  seriesPath: '/products/switch-socket/gang-switch-socket/zhilik-series-white',
  categoryName: 'Gang Switch Socket',
  categoryPath: '/products/switch-socket/gang-switch-socket',
  imageFolder: '',
};

const rawZhilikWhiteSeriesProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: '1 GANG 1 WAY SWITCH',
    subtitle: '1 Gang 1 Way Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442032/1_GANG_1_WAY_SWITCH._ZLW2021_lzzbeb.png',
    modelNo: 'ZLW2021',
    productType: '1 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 2,
    title: '2 GANG 1 WAY SWITCH',
    subtitle: '2 Gang 1 Way Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442036/2_GANG_1_WAY_SWITCH.__z4vx5e.png',
    modelNo: 'ZLW2022',
    productType: '2 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 3,
    title: '3 GANG 1 WAY SWITCH',
    subtitle: '3 Gang 1 Way Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442024/3_GANG_1_WAY_SWITCH._ZLW2023_kozcsf.png',
    modelNo: 'ZLW2023',
    productType: '3 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 4,
    title: '4 GANG 1 WAY SWITCH',
    subtitle: '4 Gang 1 Way Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442023/4_GANG_1_WAY_SWITCH._ZLW2024_hdkhy5.png',
    modelNo: 'ZLW2024',
    productType: '4 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 5,
    title: 'BELL PUSH SWITCH',
    subtitle: 'Bell Push Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442014/BELLPUSH_SWITCH._ZLW2050_noaaaw.png',
    modelNo: 'ZLW2050',
    features: ['With Switch'],
  },
  {
    id: 6,
    title: '20A DP SWITCH WITH NEON',
    subtitle: 'DP Switch with Neon',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442004/20A_DP_SWITCH_WITH_NEON._ZLW2020L_pfww8s.png',
    modelNo: 'ZLW2020L',
    features: ['With Neon'],
  },
  {
    id: 7,
    title: 'FAN SPEED CONTROLLER',
    subtitle: 'Fan Speed Controller',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442009/FAN_SPEED_CONTROLLER._ZLW20M3_auxurb.png',
    modelNo: 'ZLW20M3',
    productType: 'Fan Speed Controller',
    features: ['With Switch', 'Fan Speed Control'],
  },
  {
    id: 8,
    title: '16A 2PIN UNIVERSAL SOCKET',
    subtitle: 'Universal Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442013/16A_2PIN_UNIVERSAL_SOCKET._ZLW2016_pq2xdj.png',
    modelNo: 'ZLW2016',
    socketType: 'Universal Socket',
    features: ['With Switch'],
  },
  {
    id: 9,
    title: '13A 3PIN UNIVERSAL SOCKET',
    subtitle: 'Universal Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442030/13A_3PIN_UNIVERSAL_SOCKET._ZLW2013_rtjxgw.png',
    modelNo: 'ZLW2013',
    socketType: 'Universal Socket',
    features: ['With Switch'],
  },
  {
    id: 10,
    title: '15A 3PIN ROUND SOCKET',
    subtitle: 'Round Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442015/15A_3PIN_ROUND_SOCKET._ZLW2015_drnb5n.png',
    modelNo: 'ZLW2015',
    socketType: 'Round Socket',
    features: ['With Switch'],
  },
  {
    id: 11,
    title: '2PIN & 13A 5PIN UNIVERSAL SOCKET',
    subtitle: 'Universal Socket with Neon',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442033/2PIN___13A_5PIN_UNIVERSAL_SOCKET._ZLW2513_zhcmgx.png',
    modelNo: 'ZLW2513',
    socketType: 'Universal Socket',
    features: ['With Neon', 'With Switch'],
  },
  {
    id: 12,
    title: 'TV/DISH SOCKET',
    subtitle: 'Television / Dish Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442002/TV_DISH_SOCKET._ZLW2030TV_ahj2lm.png',
    modelNo: 'ZLW2030TV',
    socketType: 'TV / Dish Socket',
    features: [],
  },
  {
    id: 13,
    title: 'TELEPHONE SOCKET',
    subtitle: 'Telephone Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784442003/TELEPHONE_SOCKET._ZLW2028TU_jvs4fo.png',
    modelNo: 'ZLW2028TU',
    socketType: 'Telephone Socket',
    features: [],
  },
];

export const zhilikWhiteSeriesProductTypes = ['1 Gang Switch', '2 Gang Switch', '3 Gang Switch', '4 Gang Switch', 'Fan Speed Controller'];
export const zhilikWhiteSeriesSocketTypes = ['Universal Socket', 'Round Socket', 'Telephone Socket', 'TV / Dish Socket'];
export const zhilikWhiteSeriesFeatureList = ['With Neon', 'With Switch', 'Fan Speed Control'];

export const zhilikWhiteSeriesCatalog: CatalogProduct[] = buildSeriesCatalog(rawZhilikWhiteSeriesProducts, zhilikWhiteSeriesConfig);
