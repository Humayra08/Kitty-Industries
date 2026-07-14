import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { ledSpotLightCatalog } from '../data/series/ledSpotLight';

const filterGroups: CatalogFilterGroup[] = [];

export const LedSpotLightPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'LED Lighting', to: '/products/led-lighting' },
      { label: 'Spot Light' },
    ]}
    heroTitle="Spot Light"
    heroDescription="Classic series concealed-mount LED spot lights for accent lighting."
    products={ledSpotLightCatalog}
    filterGroups={filterGroups}
  />
);
