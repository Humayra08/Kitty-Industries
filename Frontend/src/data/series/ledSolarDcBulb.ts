import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const ledSolarDcBulbConfig: SeriesConfig = {
  seriesName: 'Solar DC Bulb',
  seriesPath: '/products/led-lighting/solar-dc-bulb',
  categoryName: 'LED Lighting',
  categoryPath: '/products/led-lighting',
  imageFolder: '',
};

const rawLedSolarDcBulbProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: 'KITTY SOLAR DC BULB',
    subtitle: 'Power: 5W/7W/9W, B22/E27',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046833/LED_SOLAR_DC_BULB_5W_7W_9W_B22_E27_i6s4br.png',
    modelNo: 'KLCZ-SOL-DC-B05 - KLCZ-SOL-DC-E09',
    features: ['5W', '7W', '9W', 'B22', 'E27'],
  },
];

export const ledSolarDcBulbCatalog: CatalogProduct[] = buildSeriesCatalog(rawLedSolarDcBulbProducts, ledSolarDcBulbConfig);
