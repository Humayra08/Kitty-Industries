import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const ledFloodLightConfig: SeriesConfig = {
  seriesName: 'Flood Light',
  seriesPath: '/products/led-lighting/flood-light',
  categoryName: 'LED Lighting',
  categoryPath: '/products/led-lighting',
  imageFolder: '',
};

// NOTE: KTCL-FL60A-100W, KTCL-FL45A-30W, KTCL-FL40A-20W are not yet added — pending Cloudinary URLs.
const rawLedFloodLightProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: 'KITTY MATRIX LED FLOOD LIGHT',
    subtitle: 'IP65 Water Proof',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046013/KITTY_MATRIX_LED_FLOOD_LIGHT._KTCL-FL50A-50W_nccwfz.png',
    modelNo: 'KTCL-FL50A-50W',
    features: ['50W', 'IP65'],
  },
];

export const ledFloodLightCatalog: CatalogProduct[] = buildSeriesCatalog(rawLedFloodLightProducts, ledFloodLightConfig);
