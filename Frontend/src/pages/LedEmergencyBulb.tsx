import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { ledEmergencyBulbCatalog, ledEmergencyBulbRatings } from '../data/series/ledEmergencyBulb';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Wattage', options: ledEmergencyBulbRatings, getValues: (p) => (p.productType ? [p.productType] : []) },
];

export const LedEmergencyBulbPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'LED Lighting', to: '/products/led-lighting' },
      { label: 'Emergency (AC/DC) Bulb' },
    ]}
    heroTitle="Emergency (AC/DC) Bulb"
    heroDescription="Rechargeable emergency bulbs that keep working through power cuts, in B22 and E27 fittings."
    products={ledEmergencyBulbCatalog}
    filterGroups={filterGroups}
  />
);
