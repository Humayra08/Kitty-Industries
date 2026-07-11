import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { blankoWhiteCatalog, blankoWhiteProductTypes, blankoWhiteSocketTypes, blankoWhiteFeatureList } from '../data/series/blankoWhite';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: blankoWhiteProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: blankoWhiteSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: blankoWhiteFeatureList, getValues: (p) => p.features },
];

export const BlankoWhitePage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'Blanko', to: '/products/switch-socket/gang-switch-socket/blanko' },
      { label: 'WHITE' },
    ]}
    heroTitle="BLANKO WHITE"
    heroDescription="A minimalist design finished in clean white. The Blanko White range pairs simple, understated styling with dependable safety and everyday durability."
    products={blankoWhiteCatalog}
    filterGroups={filterGroups}
  />
);
