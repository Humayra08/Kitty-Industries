import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { plugAdaptersCatalog } from '../data/series/plugAdapters';

const filterGroups: CatalogFilterGroup[] = [];

export const PlugAdaptersPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Accessories', to: '/products/accessories' },
      { label: 'Plug & Adapters' },
    ]}
    heroTitle="Plug & Adapters"
    heroDescription="Durable plugs and adapters for everyday household and industrial use."
    products={plugAdaptersCatalog}
    filterGroups={filterGroups}
  />
);
