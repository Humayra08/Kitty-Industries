import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { zhilikGoldenSeriesCatalog, zhilikGoldenSeriesProductTypes, zhilikGoldenSeriesSocketTypes, zhilikGoldenSeriesFeatureList } from '../data/series/zhilikGolden';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: zhilikGoldenSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: zhilikGoldenSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: zhilikGoldenSeriesFeatureList, getValues: (p) => p.features },
];

export const ZhilikGoldenSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'ZHILIK SERIES GOLDEN' },
    ]}
    heroTitle="ZHILIK SERIES GOLDEN"
    heroDescription="A refined golden finish built for reliable, everyday performance. The Zhilik Golden Series pairs an elevated look with dependable switching and sockets."
    products={zhilikGoldenSeriesCatalog}
    filterGroups={filterGroups}
  />
);
