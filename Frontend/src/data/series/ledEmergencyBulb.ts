import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const ledEmergencyBulbConfig: SeriesConfig = {
  seriesName: 'Emergency (AC/DC) Bulb',
  seriesPath: '/products/led-lighting/emergency-bulb',
  categoryName: 'LED Lighting',
  categoryPath: '/products/led-lighting',
  imageFolder: '',
};

const rawLedEmergencyBulbProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: 'KITTY EMERGENCY BULB 10W',
    subtitle: 'B22/E27',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784045692/EMERGENCY_AC_DC_BULB_10W_qhgo8o.png',
    modelNo: 'KITTY-EM10B22-10 / KITTY-EM10E27-10',
    productType: '10W',
    features: ['B22', 'E27'],
  },
  {
    id: 2,
    title: 'KITTY EMERGENCY BULB 12W',
    subtitle: 'B22/E27',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784045692/EMERGENCY_AC_DC_BULB_12W_mkwzf1.png',
    modelNo: 'KITTY-EM12B22-12 / KITTY-EM12E27-12',
    productType: '12W',
    features: ['B22', 'E27'],
  },
  {
    id: 3,
    title: 'KITTY EMERGENCY BULB 15W',
    subtitle: 'B22/E27',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784045692/LED_EMERGENCY_AC_DC_BULB_15_W_lsjmju.png',
    modelNo: 'EM15B22-15 / EM15E27-15',
    productType: '15W',
    features: ['B22', 'E27'],
  },
  {
    id: 4,
    title: 'KITTY EMERGENCY BULB 18W',
    subtitle: 'B22/E27',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784045692/LED_EMERGENCY_AC_DC_BULB_18W_rwbztg.png',
    modelNo: 'EM18B22-18 / EM18E27-18',
    productType: '18W',
    features: ['B22', 'E27'],
  },
];

export const ledEmergencyBulbRatings = ['10W', '12W', '15W', '18W'];

export const ledEmergencyBulbCatalog: CatalogProduct[] = buildSeriesCatalog(rawLedEmergencyBulbProducts, ledEmergencyBulbConfig);
