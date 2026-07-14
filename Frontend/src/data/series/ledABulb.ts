import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const ledABulbConfig: SeriesConfig = {
  seriesName: 'A Bulb',
  seriesPath: '/products/led-lighting/a-bulb',
  categoryName: 'LED Lighting',
  categoryPath: '/products/led-lighting',
  imageFolder: '',
};

const rawLedABulbProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: 'RADIANT LED A BULB',
    subtitle: 'Power: 3W/5W/7W/9W/12W/15W/18W, B22/E27',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784045083/RADIANT_A_BULB_3W_5W_7W_9W_12W_15W_18W_B22_E27_cq1i21.png',
    modelNo: 'K55QR2B3 - K80QR2E18',
    features: ['3W', '5W', '7W', '9W', '12W', '15W', '18W', 'B22', 'E27'],
  },
  {
    id: 2,
    title: 'NEOLUX LED A-BULB',
    subtitle: 'Power: 3W/5W/7W/9W/12W/15W/18W, B22/E27',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784044967/NEOLUX_A_BULB_3W_5W_7W_9W_12W_15W_18W_B22_E27_ka6fxa.png',
    modelNo: 'KTCL-NEO-DA55B3 - KTCL-NEO-DA80E18',
    features: ['3W', '5W', '7W', '9W', '12W', '15W', '18W', 'B22', 'E27'],
  },
];

export const ledABulbCatalog: CatalogProduct[] = buildSeriesCatalog(rawLedABulbProducts, ledABulbConfig);
