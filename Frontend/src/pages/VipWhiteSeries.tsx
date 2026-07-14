import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { vipWhiteSeriesCatalog, vipWhiteSeriesProductTypes, vipWhiteSeriesSocketTypes, vipWhiteSeriesFeatureList } from '../data/series/vipWhiteSeries';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: vipWhiteSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: vipWhiteSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: vipWhiteSeriesFeatureList, getValues: (p) => p.features },
];

export const VipWhiteSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'VIP SERIES WHITE' },
    ]}
    heroTitle="VIP SERIES WHITE"
    heroDescription="A crisp white finish with a thick gold border. The VIP White Series pairs a clean, refined look with dependable everyday performance."
    products={vipWhiteSeriesCatalog}
    filterGroups={filterGroups}
  />
);
