import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const circuitBreakerSPConfig: SeriesConfig = {
  seriesName: 'SP Circuit Breaker',
  seriesPath: '/products/circuit-breakers/sp-circuit-breaker',
  categoryName: 'Circuit Breaker',
  categoryPath: '/products/circuit-breakers',
  imageFolder: '',
};

const rawCircuitBreakerSPProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: '6A SP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022023/UNM4S6_ugtfe3.png',
    modelNo: 'UNM4S6',
    productType: '6A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 2,
    title: '10A SP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022023/UNM4S10_angnjz.png',
    modelNo: 'UNM4S10',
    productType: '10A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 3,
    title: '16A SP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022056/UNM4S16_mx70p0.png',
    modelNo: 'UNM4S16',
    productType: '16A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 4,
    title: '20A SP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022064/UNM4S20_zu4u7f.png',
    modelNo: 'UNM4S20',
    productType: '20A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 5,
    title: '25A SP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784652458/IMG_1372_ewsozr.png',
    modelNo: 'UNM4S25',
    productType: '25A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 6,
    title: '32A SP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022062/UNM4S32_rllksd.png',
    modelNo: 'UNM4S32',
    productType: '32A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 7,
    title: '40A SP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784652458/IMG_1372_ewsozr.png',
    modelNo: 'UNM4S40',
    productType: '40A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 8,
    title: '63A SP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022065/UNM4S63_xgioor.png',
    modelNo: 'UNM4S63',
    productType: '63A',
    features: ['6kA Breaking Capacity'],
  },
];

export const circuitBreakerSPRatings = ['6A', '10A', '16A', '20A', '25A', '32A', '40A', '63A'];
export const circuitBreakerSPFeatureList = ['6kA Breaking Capacity'];

export const circuitBreakerSPCatalog: CatalogProduct[] = buildSeriesCatalog(rawCircuitBreakerSPProducts, circuitBreakerSPConfig);
