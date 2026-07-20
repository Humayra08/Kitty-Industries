import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const ledDownLightConfig: SeriesConfig = {
  seriesName: 'Down Light',
  seriesPath: '/products/led-lighting/down-light',
  categoryName: 'LED Lighting',
  categoryPath: '/products/led-lighting',
  imageFolder: '',
};

const rawLedDownLightProducts: RawSeriesProduct[] = [
  { id: 1, title: 'KITTY PANELUX 2 IN 1 DOWNLIGHT 18W', subtitle: 'Surface/Concealed', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046184/KITTY_PANELUX_2_IN_1_DOWNLIGHT_18W_skv9dx.png', modelNo: 'KTCL-PLSR-18W', productType: 'Panelux', features: ['18W'] },
  { id: 2, title: 'KITTY PANELUX 2 IN 1 DOWNLIGHT 12W', subtitle: 'Surface/Concealed', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046194/KITTY_PANELUX_2_IN_1_DOWNLIGHT_12W_qcobqc.png', modelNo: 'KTCL-PLSR-12W', productType: 'Panelux', features: ['12W'] },
  { id: 3, title: 'KITTY PANELUX 2 IN 1 DOWNLIGHT 6W', subtitle: 'Surface/Concealed', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046219/KITTY_PANELUX_2_IN_1_DOWNLIGHT_6W_jzmmmw.png', modelNo: 'KTCL-PLSR-6W', productType: 'Panelux', features: ['6W'] },
  { id: 4, title: 'KITTY SUPERNOVA DOWNLIGHT 18W', subtitle: 'Concealed', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046237/KITTY_SUPERNOVA_DOWNLIGHT_18W_n1pjbe.png', modelNo: 'KTCL-PLCR-18W', productType: 'Supernova', features: ['18W'] },
  { id: 5, title: 'KITTY SUPERNOVA DOWNLIGHT 12W', subtitle: 'Concealed', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046241/KITTY_SUPERNOVA_DOWNLIGHT_12W_np2nyh.png', modelNo: 'KTCL-PLCR-12W', productType: 'Supernova', features: ['12W'] },
  { id: 6, title: 'KITTY SUPERNOVA DOWNLIGHT 6W', subtitle: 'Concealed', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046244/KITTY_SUPERNOVA_DOWNLIGHT_6W_c3hocp.png', modelNo: 'KTCL-PLCR-6W', productType: 'Supernova', features: ['6W'] },
];

export const ledDownLightProductTypes = ['Panelux', 'Supernova'];
export const ledDownLightWattages = ['6W', '12W', '18W'];

export const ledDownLightCatalog: CatalogProduct[] = buildSeriesCatalog(rawLedDownLightProducts, ledDownLightConfig);
