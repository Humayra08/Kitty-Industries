import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { ledLinearTubeBattenLightCatalog, ledLinearTubeBattenLightProductTypes } from '../data/series/ledLinearTubeBattenLight';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Series', options: ledLinearTubeBattenLightProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
];

export const LedLinearTubeBattenLightPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'LED Lighting', to: '/products/led-lighting' },
      { label: 'Linear Tube (Batten) Light' },
    ]}
    heroTitle="Linear Tube (Batten) Light"
    heroDescription="Eco, Deco, Euro and Kitty series LED linear tube lights across oval, slim and square profiles."
    products={ledLinearTubeBattenLightCatalog}
    filterGroups={filterGroups}
  />
);
