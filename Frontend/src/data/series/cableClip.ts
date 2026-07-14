import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const cableClipConfig: SeriesConfig = {
  seriesName: 'Cable Clip',
  seriesPath: '/products/accessories/cable-clip',
  categoryName: 'Accessories',
  categoryPath: '/products/accessories',
  imageFolder: '',
};

const rawCableClipProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: 'K-TYPE CABLE CLIP',
    subtitle: 'Available in 14 sizes: 4mm to 25mm',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784025022/K_TYPE_CABLE_CLIP_r4etug.png',
    modelNo: 'CR-4mm - CR-25mm',
    productType: 'K-Type',
    features: ['4mm', '5mm', '6mm', '7mm', '8mm', '9mm', '10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'],
  },
  {
    id: 2,
    title: 'U-TYPE CABLE CLIP',
    subtitle: 'Available in 4 sizes: 14mm to 25mm',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784025420/U_TYPE_CABLE_CLIP_m3jdg5.png',
    modelNo: 'CR-U-14mm - CR-U-25mm',
    productType: 'U-Type',
    features: ['14mm', '16mm', '20mm', '25mm'],
  },
];

export const cableClipProductTypes = ['K-Type', 'U-Type'];
export const cableClipFeatureList = ['4mm', '5mm', '6mm', '7mm', '8mm', '9mm', '10mm', '12mm', '14mm', '16mm', '18mm', '20mm', '22mm', '25mm'];

export const cableClipCatalog: CatalogProduct[] = buildSeriesCatalog(rawCableClipProducts, cableClipConfig);
