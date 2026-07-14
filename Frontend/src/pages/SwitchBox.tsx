import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { switchBoxCatalog } from '../data/series/switchBox';

const filterGroups: CatalogFilterGroup[] = [];

export const SwitchBoxPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Accessories', to: '/products/accessories' },
      { label: 'Switch Box' },
    ]}
    heroTitle="Switch Box"
    heroDescription="Concealed switch boxes and distribution boxes for clean, safe electrical installations."
    products={switchBoxCatalog}
    filterGroups={filterGroups}
  />
);
