import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { ledSolarDcBulbCatalog } from '../data/series/ledSolarDcBulb';

const filterGroups: CatalogFilterGroup[] = [];

export const LedSolarDcBulbPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'LED Lighting', to: '/products/led-lighting' },
      { label: 'Solar DC Bulb' },
    ]}
    heroTitle="Solar DC Bulb"
    heroDescription="Solar-powered DC bulbs for reliable off-grid lighting."
    products={ledSolarDcBulbCatalog}
    filterGroups={filterGroups}
  />
);
