import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const extensionSocketConfig: SeriesConfig = {
  seriesName: 'Extension Socket',
  seriesPath: '/products/accessories/others/extension-socket',
  categoryName: 'Others',
  categoryPath: '/products/accessories/others',
  imageFolder: '',
};

// NOTE: B525, B534, M534, M535 are not yet added — pending Cloudinary URLs.
const rawExtensionSocketProducts: RawSeriesProduct[] = [
  { id: 1, title: '4-WAY EXTENSION SOCKET 2 PIN BLACK', subtitle: '2 Pin, Black', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031019/EXTENSION_SOCKET_4WAY_2PIN_BLACK._B524_rmji52.png', modelNo: 'B524', productType: 'Black', features: ['4-Way'] },
  { id: 2, title: '4-WAY EXTENSION SOCKET 2 PIN WHITE', subtitle: '2 Pin, White', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031061/EXTENSION_SOCKET_4WAY_2PIN_WHITE._M524_pjs2fg.png', modelNo: 'M524', productType: 'White', features: ['4-Way'] },
  { id: 3, title: '5-WAY EXTENSION SOCKET 3 PIN BLACK', subtitle: '3 Pin, Black', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031066/EXTENSION_SOCKET_5WAY_3PIN_BLACK._B535_txhl5p.png', modelNo: 'B535', productType: 'Black', features: ['5-Way'] },
  { id: 4, title: '5-WAY EXTENSION SOCKET 2 PIN WHITE', subtitle: '2 Pin, White', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031083/EXTENSION_SOCKET_5WAY_2PIN_WHITE_r2gzsq.png', modelNo: 'M525', productType: 'White', features: ['5-Way'] },
];

export const extensionSocketProductTypes = ['Black', 'White'];
export const extensionSocketFeatureList = ['4-Way', '5-Way'];

export const extensionSocketCatalog: CatalogProduct[] = buildSeriesCatalog(rawExtensionSocketProducts, extensionSocketConfig);
