import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const cableTieConfig: SeriesConfig = {
  seriesName: 'Cable Tie',
  seriesPath: '/products/accessories/cable-tie',
  categoryName: 'Accessories',
  categoryPath: '/products/accessories',
  imageFolder: '',
};

const rawCableTieProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: 'CABLE TIE - WHITE',
    subtitle: 'Available in 9 sizes: 100mm to 500mm',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784024923/WHITE_CABLE_TIE_100MM_150MM_200MM_250MM_300MM_350MM_400MM_450MM_500MM_tsdrtm.png',
    modelNo: 'BS 100W - BS 500W',
    productType: 'White',
    features: ['100mm', '150mm', '200mm', '250mm', '300mm', '350mm', '400mm', '450mm', '500mm'],
  },
  {
    id: 2,
    title: 'CABLE TIE - BLACK',
    subtitle: 'Available in 9 sizes: 100mm to 500mm',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784024938/BLACK_CABLE_TIE_100MM_150MM_200MM_250MM_300MM_350MM_400MM_450MM_500MM_i0ash6.png',
    modelNo: 'BS 100B - BS 500B',
    productType: 'Black',
    features: ['100mm', '150mm', '200mm', '250mm', '300mm', '350mm', '400mm', '450mm', '500mm'],
  },
];

export const cableTieProductTypes = ['White', 'Black'];
export const cableTieFeatureList = ['100mm', '150mm', '200mm', '250mm', '300mm', '350mm', '400mm', '450mm', '500mm'];

export const cableTieCatalog: CatalogProduct[] = buildSeriesCatalog(rawCableTieProducts, cableTieConfig);
