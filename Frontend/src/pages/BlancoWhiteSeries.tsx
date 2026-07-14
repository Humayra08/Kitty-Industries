import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { blancoWhiteSeriesCatalog, blancoWhiteSeriesProductTypes, blancoWhiteSeriesSocketTypes, blancoWhiteSeriesFeatureList } from '../data/series/blancoWhite';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: blancoWhiteSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: blancoWhiteSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: blancoWhiteSeriesFeatureList, getValues: (p) => p.features },
];

export const BlancoWhiteSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'BLANCO SERIES WHITE' },
    ]}
    heroTitle="BLANCO SERIES WHITE"
    heroDescription="A minimalist design finished in clean white. The Blanco White range pairs simple, understated styling with dependable safety and everyday durability."
    products={blancoWhiteSeriesCatalog}
    filterGroups={filterGroups}
  />
);
