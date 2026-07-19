import type { CatalogProduct } from './catalog';
import { artSeriesCatalog } from './series/artSeries';
import { blancoGoldenSeriesCatalog } from './series/blancoGolden';
import { blancoWhiteSeriesCatalog } from './series/blancoWhite';
import { gloriaSeriesCatalog } from './series/gloriaSeries';
import { venusSeriesCatalog } from './series/venusSeries';
import { veronaSeriesCatalog } from './series/veronaSeries';
import { dorenWhiteSeriesCatalog } from './series/dorenWhiteSeries';
import { dorenGoldenSeriesCatalog } from './series/dorenGoldenSeries';
import { vipGoldenSeriesCatalog } from './series/vipGoldenSeries';
import { vipWhiteSeriesCatalog } from './series/vipWhiteSeries';
import { oppleSeriesCatalog } from './series/oppleSeries';
import { zhilikWhiteSeriesCatalog } from './series/zhilikWhite';
import { zhilikGoldenSeriesCatalog } from './series/zhilikGolden';
import { pianoIconSeriesCatalog } from './series/pianoIconSeries';
import { circuitBreakerSPCatalog } from './series/circuitBreakerSP';
import { circuitBreakerDPCatalog } from './series/circuitBreakerDP';
import { circuitBreakerTPCatalog } from './series/circuitBreakerTP';
import { cableTieCatalog } from './series/cableTie';
import { cableClipCatalog } from './series/cableClip';
import { sixPinSocketsCatalog } from './series/sixPinSockets';
import { plugAdaptersCatalog } from './series/plugAdapters';
import { extensionSocketCatalog } from './series/extensionSocket';
import { lampHoldersCeilingRoseCatalog } from './series/lampHoldersCeilingRose';
import { switchBoxCatalog } from './series/switchBox';
import { fanCapacitorCatalog } from './series/fanCapacitor';
import { ledABulbCatalog } from './series/ledABulb';
import { ledTBulbCatalog } from './series/ledTBulb';
import { ledSolarDcBulbCatalog } from './series/ledSolarDcBulb';
import { ledEmergencyBulbCatalog } from './series/ledEmergencyBulb';
import { ledLinearTubeBattenLightCatalog } from './series/ledLinearTubeBattenLight';
import { ledFloodLightCatalog } from './series/ledFloodLight';
import { ledDownLightCatalog } from './series/ledDownLight';
import { ledSpotLightCatalog } from './series/ledSpotLight';

/** Central registry — add other series' catalogs here as they're built. */
export const allCatalogProducts: CatalogProduct[] = [
  ...artSeriesCatalog,
  ...blancoGoldenSeriesCatalog,
  ...blancoWhiteSeriesCatalog,
  ...gloriaSeriesCatalog,
  ...venusSeriesCatalog,
  ...veronaSeriesCatalog,
  ...dorenWhiteSeriesCatalog,
  ...dorenGoldenSeriesCatalog,
  ...vipGoldenSeriesCatalog,
  ...vipWhiteSeriesCatalog,
  ...oppleSeriesCatalog,
  ...zhilikWhiteSeriesCatalog,
  ...zhilikGoldenSeriesCatalog,
  ...pianoIconSeriesCatalog,
  ...circuitBreakerSPCatalog,
  ...circuitBreakerDPCatalog,
  ...circuitBreakerTPCatalog,
  ...cableTieCatalog,
  ...cableClipCatalog,
  ...sixPinSocketsCatalog,
  ...plugAdaptersCatalog,
  ...extensionSocketCatalog,
  ...lampHoldersCeilingRoseCatalog,
  ...switchBoxCatalog,
  ...fanCapacitorCatalog,
  ...ledABulbCatalog,
  ...ledTBulbCatalog,
  ...ledSolarDcBulbCatalog,
  ...ledEmergencyBulbCatalog,
  ...ledLinearTubeBattenLightCatalog,
  ...ledFloodLightCatalog,
  ...ledDownLightCatalog,
  ...ledSpotLightCatalog,
];

export const getCatalogProductBySlug = (slug: string) =>
  allCatalogProducts.find((p) => p.slug === slug);

/**
 * Looks up a product by its full detail-page path (e.g. the current route's pathname).
 * Series-scoped, unlike getCatalogProductBySlug — needed because two series can produce
 * the same slug for a same-named product (e.g. "Fan Speed Controller with Switch" in
 * both ART and Blanco), and only the full path disambiguates which one was requested.
 */
export const getCatalogProductByPath = (pathname: string) =>
  allCatalogProducts.find((p) => `${p.seriesPath}/${p.slug}` === pathname);

export const getRelatedCatalogProducts = (product: CatalogProduct) =>
  allCatalogProducts.filter((p) => p.seriesPath === product.seriesPath && p.slug !== product.slug);
