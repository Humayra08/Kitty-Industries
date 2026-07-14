import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import {
  pianoIconSeriesCatalog,
  pianoIconSeriesProductTypes,
  pianoIconSeriesSocketTypes,
  pianoIconSeriesFeatureList,
} from '../data/series/pianoIconSeries';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: pianoIconSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: pianoIconSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: pianoIconSeriesFeatureList, getValues: (p) => p.features },
];

export const PianoSwitchSocket = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Piano Switch Socket' },
    ]}
    heroTitle="Piano Switch Socket"
    heroDescription="Explore our wide range of premium piano switch socket series designed for safety, durability and modern living."
    products={pianoIconSeriesCatalog}
    filterGroups={filterGroups}
  />
);
