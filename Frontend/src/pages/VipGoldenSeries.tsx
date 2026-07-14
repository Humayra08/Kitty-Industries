import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { vipGoldenSeriesCatalog, vipGoldenSeriesProductTypes, vipGoldenSeriesSocketTypes, vipGoldenSeriesFeatureList } from '../data/series/vipGoldenSeries';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: vipGoldenSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: vipGoldenSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: vipGoldenSeriesFeatureList, getValues: (p) => p.features },
];

export const VipGoldenSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'VIP SERIES GOLDEN' },
    ]}
    heroTitle="VIP SERIES GOLDEN"
    heroDescription="A refined gold finish with a bold, thick-bordered plate. The VIP Golden Series pairs a premium, statement look with dependable everyday performance."
    products={vipGoldenSeriesCatalog}
    filterGroups={filterGroups}
  />
);
