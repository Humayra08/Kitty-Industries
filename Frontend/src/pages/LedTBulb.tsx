import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { ledTBulbCatalog } from '../data/series/ledTBulb';

const filterGroups: CatalogFilterGroup[] = [];

export const LedTBulbPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'LED Lighting', to: '/products/led-lighting' },
      { label: 'T Bulb' },
    ]}
    heroTitle="T Bulb"
    heroDescription="Bright, efficient T-Bulbs and shop lights available across a full range of wattages and fittings."
    products={ledTBulbCatalog}
    filterGroups={filterGroups}
  />
);
