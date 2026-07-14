import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const fanCapacitorConfig: SeriesConfig = {
  seriesName: 'Fan Capacitor',
  seriesPath: '/products/accessories/others/fan-capacitor',
  categoryName: 'Others',
  categoryPath: '/products/accessories/others',
  imageFolder: '',
};

const rawFanCapacitorProducts: RawSeriesProduct[] = [
  { id: 1, title: 'KITTY FAN CAPACITOR 3.5uF', subtitle: 'Fan Capacitor', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784039406/KITTY_FAN_CAPACITOR_3.5uf_qnsxnn.png', modelNo: '3.5 uF', features: [] },
  { id: 2, title: 'KITTY FAN CAPACITOR 2.5uF', subtitle: 'Fan Capacitor', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784039406/KITTY_FAN_CAPACITOR_2.5uf_b3tufr.png', modelNo: '2.5 uF', features: [] },
];

export const fanCapacitorCatalog: CatalogProduct[] = buildSeriesCatalog(rawFanCapacitorProducts, fanCapacitorConfig);
