import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { dorenGoldenSeriesCatalog, dorenGoldenSeriesProductTypes, dorenGoldenSeriesSocketTypes, dorenGoldenSeriesFeatureList } from '../data/series/dorenGoldenSeries';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: dorenGoldenSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: dorenGoldenSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: dorenGoldenSeriesFeatureList, getValues: (p) => p.features },
];

export const DorenGoldenSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'DOREN SERIES GOLDEN' },
    ]}
    heroTitle="DOREN SERIES GOLDEN"
    heroDescription="A warm gold finish that adds a touch of luxury to everyday switching. The Doren Golden Series pairs dependable performance with a distinguished look."
    products={dorenGoldenSeriesCatalog}
    filterGroups={filterGroups}
  />
);
