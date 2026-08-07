import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const ledFloodLightConfig: SeriesConfig = {
  seriesName: 'Flood Light',
  seriesPath: '/products/led-lighting/flood-light',
  categoryName: 'LED Lighting',
  categoryPath: '/products/led-lighting',
  imageFolder: '',
};

const rawLedFloodLightProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: 'KITTY MATRIX LED FLOOD LIGHT',
    subtitle: 'Power: 20W/30W/50W/100W, IP65 Water Proof',
    image: 'https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev/v1784046013/KITTY_MATRIX_LED_FLOOD_LIGHT._KTCL-FL50A-50W_nccwfz.png',
    modelNo: 'KTCL-FL40A-20W - KTCL-FL60A-100W',
    features: ['20W', '30W', '50W', '100W', 'IP65'],
  },
];

export const ledFloodLightCatalog: CatalogProduct[] = buildSeriesCatalog(rawLedFloodLightProducts, ledFloodLightConfig);
