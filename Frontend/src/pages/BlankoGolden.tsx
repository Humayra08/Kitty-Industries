import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { blankoGoldenCatalog, blankoGoldenProductTypes, blankoGoldenSocketTypes, blankoGoldenFeatureList } from '../data/series/blankoGolden';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: blankoGoldenProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: blankoGoldenSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: blankoGoldenFeatureList, getValues: (p) => p.features },
];

export const BlankoGoldenPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'Blanko', to: '/products/switch-socket/gang-switch-socket/blanko' },
      { label: 'GOLDEN' },
    ]}
    heroTitle="BLANKO GOLDEN"
    heroDescription="A minimalist design finished in warm gold. The Blanko Golden range pairs clean lines with dependable safety and everyday durability."
    products={blankoGoldenCatalog}
    filterGroups={filterGroups}
  />
);
