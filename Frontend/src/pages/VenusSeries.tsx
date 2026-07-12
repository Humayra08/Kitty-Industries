import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { venusSeriesCatalog, venusSeriesProductTypes, venusSeriesSocketTypes, venusSeriesFeatureList } from '../data/series/venusSeries';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Product Type', options: venusSeriesProductTypes, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Socket Type', options: venusSeriesSocketTypes, getValues: (p) => (p.socketType ? [p.socketType] : []) },
  { title: 'Features', options: venusSeriesFeatureList, getValues: (p) => p.features },
];

export const VenusSeriesPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Switch & Socket', to: '/products/switch-socket' },
      { label: 'Gang Switch Socket', to: '/products/switch-socket/gang-switch-socket' },
      { label: 'VENUS SERIES' },
    ]}
    heroTitle="VENUS SERIES"
    heroDescription="A soft, warm-toned finish that brings understated elegance to any interior. The Venus Series pairs everyday reliability with a refined look."
    products={venusSeriesCatalog}
    filterGroups={filterGroups}
  />
);
