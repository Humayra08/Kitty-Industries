import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { oppleSeriesCatalog, oppleSeriesProductTypes, oppleSeriesSocketTypes, oppleSeriesFeatureList } from '../data/series/oppleSeries';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: oppleSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: oppleSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: oppleSeriesFeatureList, getValues: (p) => p.features },
];

export const OppleSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'OPPLE SERIES' },
    ]}
    heroTitle="OPPLE SERIES"
    heroDescription="A clean white finish with a signature gold trim line. The Opple Series pairs simple, understated styling with dependable everyday performance."
    products={oppleSeriesCatalog}
    filterGroups={filterGroups}
  />
);
