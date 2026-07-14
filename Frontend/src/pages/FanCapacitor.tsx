import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { fanCapacitorCatalog } from '../data/series/fanCapacitor';

const filterGroups: CatalogFilterGroup[] = [];

export const FanCapacitorPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Accessories', to: '/products/accessories' },
      { label: 'Fan Capacitor' },
    ]}
    heroTitle="Fan Capacitor"
    heroDescription="Reliable fan capacitors for consistent ceiling fan performance."
    products={fanCapacitorCatalog}
    filterGroups={filterGroups}
  />
);
