import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const ledTBulbConfig: SeriesConfig = {
  seriesName: 'T Bulb',
  seriesPath: '/products/led-lighting/t-bulb',
  categoryName: 'LED Lighting',
  categoryPath: '/products/led-lighting',
  imageFolder: '',
};

const rawLedTBulbProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: 'KITTY T BULB (SHOP LIGHT)',
    subtitle: 'Power: 30W/40W/50W, B22/E27',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046684/KITTY_T_BULB_SHOP_LIGHT_30W_40W_50W_lfpk6x.png',
    modelNo: 'T-30W-B22 - T-50W-E27',
    features: ['30W', '40W', '50W', 'B22', 'E27'],
  },
  {
    id: 2,
    title: 'KITTY ECO LED T-BULB',
    subtitle: 'Power: 20W/30W/40W/50W, Daylight/Warmlight, B22/E27',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046625/KITTY_ECO_LED_T_BULB_20W_30W_40W_50W_DAYLIGHT_WARMLIGHT_B22_E27_yu6an2.png',
    modelNo: 'KTCL-ECO-D20WB22 - KTCL-ECO-W50WE27',
    features: ['20W', '30W', '40W', '50W', 'Daylight', 'Warmlight', 'B22', 'E27'],
  },
];

export const ledTBulbCatalog: CatalogProduct[] = buildSeriesCatalog(rawLedTBulbProducts, ledTBulbConfig);
