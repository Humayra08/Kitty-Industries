import { ProductCatalogPage, type CatalogFilterGroup } from '../components/products/ProductCatalogPage';
import { circuitBreakerSPCatalog, circuitBreakerSPRatings, circuitBreakerSPFeatureList } from '../data/series/circuitBreakerSP';

const filterGroups: CatalogFilterGroup[] = [
  { title: 'Rating', options: circuitBreakerSPRatings, getValues: (p) => (p.productType ? [p.productType] : []) },
  { title: 'Features', options: circuitBreakerSPFeatureList, getValues: (p) => p.features },
];

export const CircuitBreakerSPPage = () => (
  <ProductCatalogPage
    breadcrumbs={[
      { label: 'Home', to: '/' },
      { label: 'Circuit Breakers', to: '/products/circuit-breakers' },
      { label: 'SP Circuit Breaker' },
    ]}
    heroTitle="SP Circuit Breaker"
    heroDescription="Single Pole miniature circuit breakers with 6kA breaking capacity, engineered for reliable overload and short-circuit protection."
    products={circuitBreakerSPCatalog}
    filterGroups={filterGroups}
  />
);
