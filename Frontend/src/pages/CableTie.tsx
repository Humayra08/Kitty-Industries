import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { cableTieCatalog, cableTieProductTypes, cableTieFeatureList } from '../data/series/cableTie';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Color', options: cableTieProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Size', options: cableTieFeatureList, getValues: (p) => p.features },
];

export const CableTiePage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Cable Tie' },
    ]}
    heroTitle="Cable Tie"
    heroDescription="Durable nylon cable ties in white and black, available in a full range of sizes for organized, secure cable management."
    products={cableTieCatalog}
    filterGroups={filterGroups}
  />
);
