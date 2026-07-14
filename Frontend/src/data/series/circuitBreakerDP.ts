import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const circuitBreakerDPConfig: SeriesConfig = {
  seriesName: 'DP Circuit Breaker',
  seriesPath: '/products/circuit-breakers/dp-circuit-breaker',
  categoryName: 'Circuit Breaker',
  categoryPath: '/products/circuit-breakers',
  imageFolder: '',
};

const rawCircuitBreakerDPProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: '10A DP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022135/UNM4D10_wimgce.png',
    modelNo: 'UNM4D10',
    productType: '10A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 2,
    title: '16A DP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022200/UNM4D16_nwqfmm.png',
    modelNo: 'UNM4D16',
    productType: '16A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 3,
    title: '20A DP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022248/UNM4D20_jmuflf.png',
    modelNo: 'UNM4D20',
    productType: '20A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 4,
    title: '25A DP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022267/UNM4D25_bofoa5.png',
    modelNo: 'UNM4D25',
    productType: '25A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 5,
    title: '32A DP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022269/UNM4D32_freit6.png',
    modelNo: 'UNM4D32',
    productType: '32A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 6,
    title: '40A DP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022202/UNM4D40_yqzvqe.png',
    modelNo: 'UNM4D40',
    productType: '40A',
    features: ['6kA Breaking Capacity'],
  },
  {
    id: 7,
    title: '63A DP CIRCUIT BREAKER',
    subtitle: '6kA Breaking Capacity',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784022270/UNM4D63_byroim.png',
    modelNo: 'UNM4D63',
    productType: '63A',
    features: ['6kA Breaking Capacity'],
  },
];

export const circuitBreakerDPRatings = ['10A', '16A', '20A', '25A', '32A', '40A', '63A'];
export const circuitBreakerDPFeatureList = ['6kA Breaking Capacity'];

export const circuitBreakerDPCatalog: CatalogProduct[] = buildSeriesCatalog(rawCircuitBreakerDPProducts, circuitBreakerDPConfig);
