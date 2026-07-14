import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { sixPinSocketsCatalog } from '../data/series/sixPinSockets';

const filterGroups: CatalogFilterGroup[] = [];

export const SixPinSocketsPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Accessories', to: '/products/accessories' },
      { label: '6 Pin Sockets' },
    ]}
    heroTitle="6 Pin Sockets"
    heroDescription="A range of universal and combined 6-pin sockets built for everyday reliability."
    products={sixPinSocketsCatalog}
    filterGroups={filterGroups}
  />
);
