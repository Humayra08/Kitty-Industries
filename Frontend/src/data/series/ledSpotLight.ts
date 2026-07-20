import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const ledSpotLightConfig: SeriesConfig = {
  seriesName: 'Spot Light',
  seriesPath: '/products/led-lighting/spot-light',
  categoryName: 'LED Lighting',
  categoryPath: '/products/led-lighting',
  imageFolder: '',
};

const rawLedSpotLightProducts: RawSeriesProduct[] = [
  { id: 1, title: 'KITTY CLASSIC DOWN LIGHT (SPOT) 12W', subtitle: 'Concealed', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046371/KITTY_CLASSIC_SPOT_LIGHT_12W_eobpeb.png', modelNo: 'KTCL-DL12WB', features: ['12W'] },
  { id: 2, title: 'KITTY CLASSIC DOWN LIGHT (SPOT) 9W', subtitle: 'Concealed', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046375/KITTY_CLASSIC_SPOT_LIGHT_9W_xivmfl.png', modelNo: 'KTCL-DL9WB', features: ['9W'] },
  { id: 3, title: 'KITTY CLASSIC DOWN LIGHT (SPOT) 7W', subtitle: 'Concealed', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046375/KITTY_CLASSIC_SPOT_LIGHT_7W_xll90n.png', modelNo: 'KTCL-DL7WB', features: ['7W'] },
  { id: 4, title: 'KITTY CLASSIC DOWN LIGHT (SPOT) 5W', subtitle: 'Concealed', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046371/KITTY_CLASSIC_SPOT_LIGHT_5W_zqnvhe.png', modelNo: 'KTCL-DL5WB', features: ['5W'] },
];

export const ledSpotLightCatalog: CatalogProduct[] = buildSeriesCatalog(rawLedSpotLightProducts, ledSpotLightConfig);
