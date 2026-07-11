import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const artSeriesConfig: SeriesConfig = {
  seriesName: 'ART Series',
  seriesPath: '/products/switch-socket/gang-switch-socket/art-series',
  categoryName: 'Gang Switch Socket',
  categoryPath: '/products/switch-socket/gang-switch-socket',
  imageFolder: '/Products/ART SERIES',
};

const rawArtSeriesProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: '1 GANG 1 WAY SWITCH',
    subtitle: '1 Gang 1 Way Switch',
    image: '1 GANG 1 WAY SWITCH. KJ0101.png',
    productType: '1 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 2,
    title: '1 GANG 2 WAY SWITCH',
    subtitle: '1 Gang 2 Way Switch',
    image: '1 GANG 2 WAY SWITCH. KJ0112.png',
    productType: '1 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 3,
    title: '2 GANG 1 WAY SWITCH',
    subtitle: '2 Gang 1 Way Switch',
    image: '2 GANG 1 WAY SWITCH. KJ0102.png',
    productType: '2 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 4,
    title: '2 GANG 2 WAY SWITCH',
    subtitle: '2 Gang 2 Way Switch',
    image: '2 GANG 2 WAY SWITCH. KJ0122.png',
    productType: '2 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 5,
    title: '2 WAY FAN SPEED CONTROLLER WITH SWITCH',
    subtitle: 'Fan Speed Controller',
    image: '2 WAY FAN SPEED CONTROLLER WITH SWITCH. KJ0M34-2.png',
    productType: 'Fan Speed Controller',
    features: ['With Switch', 'Fan Speed Control'],
  },
  {
    id: 6,
    title: '2PIN & 13A 5PIN SOCKET SWITCH WITH NEON',
    subtitle: 'Socket with Neon',
    image: '2PIN & 13A 5PIN SOCKET SWITCH WITH NEON. KJ0135.png',
    socketType: 'Universal Socket',
    features: ['With Neon', 'With Switch'],
  },
  {
    id: 7,
    title: '2PIN UNIVERSAL SOCKET WITH SWITCH',
    subtitle: 'Universal Socket',
    image: '2PIN UNIVERSAL SOCKET WITH SWITCH. KJ0116.png',
    socketType: 'Universal Socket',
    features: ['With Switch'],
  },
  {
    id: 8,
    title: '3 GANG 1 WAY SWITCH',
    subtitle: '3 Gang 1 Way Switch',
    image: '3 GANG 1 WAY SWITCH. KJ0103.png',
    productType: '3 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 9,
    title: '4 GANG 1 WAY SWITCH',
    subtitle: '4 Gang 1 Way Switch',
    image: '4 GANG 1 WAY SWITCH. KJ0104.png',
    productType: '4 Gang Switch',
    features: ['With Switch'],
  },
  {
    id: 10,
    title: '13A 3PIN UNIVERSAL SOCKET SWITCH WITH NEON',
    subtitle: 'Universal Socket with Neon',
    image: '13A 3PIN UNIVERSAL SOCKET SWITCH WITH NEON. KJ0113.png',
    socketType: 'Universal Socket',
    features: ['With Neon', 'With Switch'],
  },
  {
    id: 11,
    title: '15A 3PIN ROUND SOCKET SWITCH WITH NEON',
    subtitle: 'Round Socket with Neon',
    image: '15A 3PIN ROUND SOCKET SWITCH WITH NEON. KJ0115.png',
    socketType: 'Round Socket',
    features: ['With Neon', 'With Switch'],
  },
  {
    id: 12,
    title: '20A DP SWITCH WITH NEON',
    subtitle: 'DP Switch with Neon',
    image: '20A DP SWITCH WITH NEON. KJ020L.png',
    features: ['With Neon'],
  },
  {
    id: 13,
    title: '45A DP SWITCH WITH NEON',
    subtitle: 'DP Switch with Neon',
    image: '45A DP SWITCH WITH NEON. KJ045L.png',
    features: ['With Neon'],
  },
  {
    id: 14,
    title: 'BELL PUSH SWITCH',
    subtitle: 'Bell Push Switch',
    image: 'BELL PUSH SWITCH. KJ011B.png',
    features: ['With Switch'],
  },
  {
    id: 15,
    title: 'FAN SPEED CONTROLLER WITH SWITCH',
    subtitle: 'Fan Speed Controller',
    image: 'FAN SPEED CONTROLLER WITH SWITCH. KJ0M34.png',
    features: ['With Switch', 'Fan Speed Control'],
  },
  {
    id: 16,
    title: 'INTERNET/DATA SOCKET',
    subtitle: 'Internet / Data Socket',
    image: 'INTERNET_DATA SOCKET. KJ0I46.png',
    socketType: 'Universal Socket',
    features: [],
  },
  {
    id: 17,
    title: 'TELEPHONE SOCKET SINGLE',
    subtitle: 'Telephone Socket',
    image: 'TELEPHONE SOCKET SINGLE. KJ0TU4.png',
    socketType: 'Telephone Socket',
    features: [],
  },
  {
    id: 18,
    title: 'TELEVISION/DISH SOCKET SINGLE',
    subtitle: 'Television / Dish Socket',
    image: 'TELEVISION_DISH SOCKET SINGLE. KJ0TD1.png',
    socketType: 'TV / Dish Socket',
    features: [],
  },
];

export const artSeriesProductTypes = ['1 Gang Switch', '2 Gang Switch', '3 Gang Switch', '4 Gang Switch', 'Fan Speed Controller'];
export const artSeriesSocketTypes = ['Universal Socket', '3 Pin Socket', 'Round Socket', 'Telephone Socket', 'TV / Dish Socket'];
export const artSeriesFeatureList = ['With Neon', 'With Switch', 'Fan Speed Control'];

export const artSeriesCatalog: CatalogProduct[] = buildSeriesCatalog(rawArtSeriesProducts, artSeriesConfig);
