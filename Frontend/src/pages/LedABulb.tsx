import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { ledABulbCatalog } from '../data/series/ledABulb';

const filterGroups: CatalogFilterGroup[] = [];

export const LedABulbPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'LED Lighting', to: '/products/led-lighting' },
      { label: 'A Bulb' },
    ]}
    heroTitle="A Bulb"
    heroDescription="Energy-efficient LED A-Bulbs available across a full range of wattages and fittings."
    products={ledABulbCatalog}
    filterGroups={filterGroups}
  />
);
