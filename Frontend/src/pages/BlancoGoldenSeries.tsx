import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { blancoGoldenSeriesCatalog, blancoGoldenSeriesProductTypes, blancoGoldenSeriesSocketTypes, blancoGoldenSeriesFeatureList } from '../data/series/blancoGolden';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: blancoGoldenSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: blancoGoldenSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: blancoGoldenSeriesFeatureList, getValues: (p) => p.features },
];

export const BlancoGoldenSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'BLANCO SERIES GOLDEN' },
    ]}
    heroTitle="BLANCO SERIES GOLDEN"
    heroDescription="A minimalist design finished in warm gold. The Blanco Golden range pairs clean lines with dependable safety and everyday durability."
    products={blancoGoldenSeriesCatalog}
    filterGroups={filterGroups}
  />
);
