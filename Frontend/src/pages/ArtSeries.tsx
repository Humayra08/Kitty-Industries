import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { artSeriesCatalog, artSeriesProductTypes, artSeriesSocketTypes, artSeriesFeatureList } from '../data/series/artSeries';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: artSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: artSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: artSeriesFeatureList, getValues: (p) => p.features },
];

export const ArtSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'ART SERIES' },
    ]}
    heroTitle="ART SERIES"
    heroDescription="A perfect blend of elegance and durability. The ART Series brings a premium look to your space with superior safety and long-lasting performance."
    products={artSeriesCatalog}
    filterGroups={filterGroups}
  />
);
