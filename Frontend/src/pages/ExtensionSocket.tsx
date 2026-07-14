import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { extensionSocketCatalog, extensionSocketProductTypes, extensionSocketFeatureList } from '../data/series/extensionSocket';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Color', options: extensionSocketProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Ways', options: extensionSocketFeatureList, getValues: (p) => p.features },
];

export const ExtensionSocketPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Accessories', to: '/products/accessories' },
      { label: 'Extension Socket' },
    ]}
    heroTitle="Extension Socket"
    heroDescription="Multi-way extension sockets in black and white, built for safe, everyday power distribution."
    products={extensionSocketCatalog}
    filterGroups={filterGroups}
  />
);
