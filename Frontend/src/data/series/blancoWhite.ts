import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const blancoWhiteSeriesConfig: SeriesConfig = {
  seriesName: 'Blanco Series White',
  seriesPath: '/products/switch-socket/gang-switch-socket/blanco-series-white',
  categoryName: 'Gang Switch Socket',
  categoryPath: '/products/switch-socket/gang-switch-socket',
  imageFolder: '',
};

const rawBlancoWhiteSeriesProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: '1 GANG SWITCH',
    subtitle: '1 Gang Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759186/BC8111_uglf25.png',
    modelNo: 'BC8111',
    productType: '1 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 2,
    title: '2 GANG SWITCH',
    subtitle: '2 Gang Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759175/BC8112_brnffx.png',
    modelNo: 'BC8112',
    productType: '2 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 3,
    title: '3 GANG SWITCH',
    subtitle: '3 Gang Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759177/BC8113_ykulqn.png',
    modelNo: 'BC8113',
    productType: '3 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 4,
    title: '4 GANG SWITCH',
    subtitle: '4 Gang Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759178/BC8114_uxfpfh.png',
    modelNo: 'BC8114',
    productType: '4 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 5,
    title: 'BELL PUSH SWITCH',
    subtitle: 'Bell Push Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759185/BC811B_vpepc3.png',
    modelNo: 'BC811B',
    features: ['With Switch'],
  },
  {
    id: 6,
    title: 'WATER HEATER DP SWITCH WITH NEON',
    subtitle: 'DP Switch with Neon',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759187/BC8120L_lk5j3o.png',
    modelNo: 'BC8120L',
    features: ['With Neon'],
  },
  {
    id: 7,
    title: 'FAN SPEED CONTROLLER WITH SWITCH',
    subtitle: 'Fan Speed Controller',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759190/BC816S-M3_wgo9pb.png',
    modelNo: 'BC816S-M3',
    productType: 'Fan Speed Controller',
    features: ['With Switch', 'Fan Speed Control'],
  },
  {
    id: 8,
    title: 'UNIVERSAL SOCKET WITH SWITCH',
    subtitle: 'Universal Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759184/BC8116-US_kjrvnh.png',
    modelNo: 'BC8116-US',
    socketType: 'Universal Socket',
    features: ['With Switch'],
  },
  {
    id: 9,
    title: 'UNIVERSAL SOCKET SWITCH WITH NEON',
    subtitle: 'Universal Socket with Neon',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759188/BC813S_r2v8pd.png',
    modelNo: 'BC813S',
    socketType: 'Universal Socket',
    features: ['With Neon', 'With Switch'],
  },
  {
    id: 10,
    title: 'ROUND SOCKET SWITCH WITH NEON',
    subtitle: 'Round Socket with Neon',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759173/BC815S_uiqwpi.png',
    modelNo: 'BC815S',
    socketType: 'Round Socket',
    features: ['With Neon', 'With Switch'],
  },
  {
    id: 11,
    title: 'MULTI-PIN UNIVERSAL SOCKET WITH SWITCH',
    subtitle: 'Universal Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759189/BC8125_lriy3c.png',
    modelNo: 'BC8125',
    socketType: 'Universal Socket',
    features: ['With Switch'],
  },
  {
    id: 12,
    title: 'TELEVISION/DISH SOCKET SINGLE',
    subtitle: 'Television / Dish Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1783759173/BC811-TV_vehuhv.png',
    modelNo: 'BC811-TV',
    socketType: 'TV / Dish Socket',
    features: [],
  },
];

export const blancoWhiteSeriesProductTypes = ['1 Gang Switch', '2 Gang Switch', '3 Gang Switch', '4 Gang Switch', 'Fan Speed Controller'];
export const blancoWhiteSeriesSocketTypes = ['Universal Socket', 'Round Socket', 'TV / Dish Socket'];
export const blancoWhiteSeriesFeatureList = ['With Neon', 'With Switch', 'Fan Speed Control'];

export const blancoWhiteSeriesCatalog: CatalogProduct[] = buildSeriesCatalog(rawBlancoWhiteSeriesProducts, blancoWhiteSeriesConfig);
