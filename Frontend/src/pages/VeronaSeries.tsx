import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { veronaSeriesCatalog, veronaSeriesProductTypes, veronaSeriesSocketTypes, veronaSeriesFeatureList } from '../data/series/veronaSeries';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: veronaSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: veronaSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: veronaSeriesFeatureList, getValues: (p) => p.features },
];

export const VeronaSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'VERONA SERIES' },
    ]}
    heroTitle="VERONA SERIES"
    heroDescription="A sleek metallic finish with a modern silver edge. The Verona Series brings a crisp, contemporary look to any space without compromising on everyday durability."
    products={veronaSeriesCatalog}
    filterGroups={filterGroups}
  />
);
