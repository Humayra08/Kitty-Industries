import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const circuitBreakerTPConfig: SeriesConfig = {
  seriesName: 'TP Circuit Breaker',
  seriesPath: '/products/circuit-breakers/tp-circuit-breaker',
  categoryName: 'Circuit Breaker',
  categoryPath: '/products/circuit-breakers',
  imageFolder: '',
};

// NOTE: UNM4T16, UNM4T25, UNM4T32, UNM4T40 are not yet added — pending Cloudinary URLs.
const rawCircuitBreakerTPProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: '10A TP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022296/UNM4T10_vfktmr.png',
    modelNo: 'UNM4T10',
    productType: '10A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 2,
    title: '20A TP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022297/UNM4T20_bfii7f.png',
    modelNo: 'UNM4T20',
    productType: '20A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 3,
    title: '63A TP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022298/UNM4T63_cy4eem.png',
    modelNo: 'UNM4T63',
    productType: '63A',
    features: ['6kA Breaking Capacity'],
  },
];

export const circuitBreakerTPRatings = ['10A', '20A', '63A'];
export const circuitBreakerTPFeatureList = ['6kA Breaking Capacity'];

export const circuitBreakerTPCatalog: CatalogProduct[] = buildSeriesCatalog(rawCircuitBreakerTPProducts, circuitBreakerTPConfig);
