import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { ledDownLightCatalog, ledDownLightProductTypes, ledDownLightWattages } from '../data/series/ledDownLight';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Series', options: ledDownLightProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Wattage', options: ledDownLightWattages, getValues: (p) => p.features },
];

export const LedDownLightPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'LED Lighting', to: '/products/led-lighting' },
      { label: 'Down Light' },
    ]}
    heroTitle="Down Light"
    heroDescription="Panelux 2-in-1 and Supernova series LED downlights for surface or concealed mounting."
    products={ledDownLightCatalog}
    filterGroups={filterGroups}
  />
);
