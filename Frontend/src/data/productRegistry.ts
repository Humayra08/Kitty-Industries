import type { CatalogProduct } from './catalog';
import { artSeriesCatalog } from './series/artSeries';
import { blankoGoldenCatalog } from './series/blankoGolden';
import { blankoWhiteCatalog } from './series/blankoWhite';
import { gloriaSeriesCatalog } from './series/gloriaSeries';

/** Central registry — add other series' catalogs here as they're built. */
export const allCatalogProducts: CatalogProduct[] = [
  ...artSeriesCatalog,
  ...blankoGoldenCatalog,
  ...blankoWhiteCatalog,
  ...gloriaSeriesCatalog,
];

export const getCatalogProductBySlug = (slug: string) =>
  allCatalogProducts.find((p) => p.slug === slug);

/**
 * Looks up a product by its full detail-page path (e.g. the current route's pathname).
 * Series-scoped, unlike getCatalogProductBySlug — needed because two series can produce
 * the same slug for a same-named product (e.g. "Fan Speed Controller with Switch" in
 * both ART and Blanko), and only the full path disambiguates which one was requested.
 */
export const getCatalogProductByPath = (pathname: string) =>
  allCatalogProducts.find((p) => `${p.seriesPath}/${p.slug}` === pathname);

export const getRelatedCatalogProducts = (product: CatalogProduct) =>
  allCatalogProducts.filter((p) => p.seriesPath === product.seriesPath && p.slug !== product.slug);
