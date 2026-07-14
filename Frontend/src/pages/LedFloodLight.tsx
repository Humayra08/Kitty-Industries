import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { ledFloodLightCatalog } from '../data/series/ledFloodLight';

const filterGroups: CatalogFilterGroup[] = [];

export const LedFloodLightPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'LED Lighting', to: '/products/led-lighting' },
      { label: 'Flood Light' },
    ]}
    heroTitle="Flood Light"
    heroDescription="Matrix series LED flood lights, IP65 water-proof rated for outdoor use."
    products={ledFloodLightCatalog}
    filterGroups={filterGroups}
  />
);
