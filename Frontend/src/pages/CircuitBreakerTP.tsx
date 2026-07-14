import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { circuitBreakerTPCatalog, circuitBreakerTPRatings, circuitBreakerTPFeatureList } from '../data/series/circuitBreakerTP';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Rating', options: circuitBreakerTPRatings, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Features', options: circuitBreakerTPFeatureList, getValues: (p) => p.features },
];

export const CircuitBreakerTPPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Circuit Breakers', to: '/products/circuit-breakers' },
      { label: 'TP Circuit Breaker' },
    ]}
    heroTitle="TP Circuit Breaker"
    heroDescription="Triple Pole miniature circuit breakers with 6kA breaking capacity, engineered for reliable overload and short-circuit protection."
    products={circuitBreakerTPCatalog}
    filterGroups={filterGroups}
  />
);
