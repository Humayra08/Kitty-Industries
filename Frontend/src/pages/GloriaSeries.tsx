import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { gloriaSeriesCatalog, gloriaSeriesProductTypes, gloriaSeriesSocketTypes, gloriaSeriesFeatureList } from '../data/series/gloriaSeries';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: gloriaSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: gloriaSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: gloriaSeriesFeatureList, getValues: (p) => p.features },
];

export const GloriaSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'GLORIA SERIES' },
    ]}
    heroTitle="GLORIA SERIES"
    heroDescription="A sophisticated dark finish built for modern interiors. The Gloria Series delivers a bold, contemporary look without compromising on safety or everyday durability."
    products={gloriaSeriesCatalog}
    filterGroups={filterGroups}
  />
);
