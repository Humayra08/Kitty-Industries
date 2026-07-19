import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { zhilikWhiteSeriesCatalog, zhilikWhiteSeriesProductTypes, zhilikWhiteSeriesSocketTypes, zhilikWhiteSeriesFeatureList } from '../data/series/zhilikWhite';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: zhilikWhiteSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: zhilikWhiteSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: zhilikWhiteSeriesFeatureList, getValues: (p) => p.features },
];

export const ZhilikWhiteSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'ZHILIK SERIES WHITE' },
    ]}
    heroTitle="ZHILIK SERIES WHITE"
    heroDescription="A clean white finish built for reliable, everyday performance. The Zhilik White Series delivers dependable switching and sockets with a minimal, modern look."
    products={zhilikWhiteSeriesCatalog}
    filterGroups={filterGroups}
  />
);
