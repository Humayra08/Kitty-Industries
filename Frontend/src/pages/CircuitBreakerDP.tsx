import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { circuitBreakerDPCatalog, circuitBreakerDPRatings, circuitBreakerDPFeatureList } from '../data/series/circuitBreakerDP';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Rating', options: circuitBreakerDPRatings, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Features', options: circuitBreakerDPFeatureList, getValues: (p) => p.features },
];

export const CircuitBreakerDPPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Circuit Breakers', to: '/products/circuit-breakers' },
      { label: 'DP Circuit Breaker' },
    ]}
    heroTitle="DP Circuit Breaker"
    heroDescription="Double Pole miniature circuit breakers with 6kA breaking capacity, engineered for reliable overload and short-circuit protection."
    products={circuitBreakerDPCatalog}
    filterGroups={filterGroups}
  />
);
