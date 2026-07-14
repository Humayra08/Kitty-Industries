import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import {
  lampHoldersCeilingRoseCatalog,
  lampHoldersCeilingRoseProductTypes,
  lampHoldersCeilingRoseFeatureList,
} from '../data/series/lampHoldersCeilingRose';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: lampHoldersCeilingRoseProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Finish', options: lampHoldersCeilingRoseFeatureList, getValues: (p) => p.features },
];

export const LampHoldersCeilingRosePage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Accessories', to: '/products/accessories' },
      { label: 'Lamp Holders & Ceiling Rose' },
    ]}
    heroTitle="Lamp Holders & Ceiling Rose"
    heroDescription="Decorative and everyday lamp holders and ceiling roses in a wide range of finishes and designs."
    products={lampHoldersCeilingRoseCatalog}
    filterGroups={filterGroups}
  />
);
