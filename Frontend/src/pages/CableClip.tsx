import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { cableClipCatalog, cableClipProductTypes, cableClipFeatureList } from '../data/series/cableClip';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Type', options: cableClipProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Size', options: cableClipFeatureList, getValues: (p) => p.features },
];

export const CableClipPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Cable Clip' },
    ]}
    heroTitle="Cable Clip"
    heroDescription="K-Type and U-Type cable clips for secure wall and surface mounting, available across a full range of sizes."
    products={cableClipCatalog}
    filterGroups={filterGroups}
  />
);
