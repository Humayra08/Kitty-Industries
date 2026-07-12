import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { dorenWhiteSeriesCatalog, dorenWhiteSeriesProductTypes, dorenWhiteSeriesSocketTypes, dorenWhiteSeriesFeatureList } from '../data/series/dorenWhiteSeries';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: dorenWhiteSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: dorenWhiteSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: dorenWhiteSeriesFeatureList, getValues: (p) => p.features },
];

export const DorenWhiteSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'DOREN SERIES WHITE' },
    ]}
    heroTitle="DOREN SERIES WHITE"
    heroDescription="A clean, minimal white finish built for everyday reliability. The Doren White Series pairs a crisp look with dependable, no-fuss switching for every room."
    products={dorenWhiteSeriesCatalog}
    filterGroups={filterGroups}
  />
);
