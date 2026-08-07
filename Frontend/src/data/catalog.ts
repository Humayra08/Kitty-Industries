/**
 * Generic product-detail shape shared by every series' catalog. Any product
 * catalog (a new series, a different category) maps its raw data into this
 * shape and the shared ProductCatalogPage / ProductDetailPage render it
 * correctly without knowing which series it came from.
 */
export interface CatalogProduct {
  slug: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  /** Smaller Cloudinary derivative for catalog grids / related-product cards, where the full 1000px zoom image is overkill. */
  thumbSrc: string;
  modelNo: string;
  seriesName: string;
  seriesPath: string;
  categoryName: string;
  categoryPath: string;
  productType?: string;
  socketType?: string;
  features: string[];
}

export const slugify = (title: string) =>
  title.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-');

export const getModelNo = (image: string) => {
  const match = image.match(/\.\s*([A-Z0-9-]+)\.png$/i);
  return match ? match[1] : '';
};

/** Raw shape a series data file provides before it's mapped into a CatalogProduct. */
export interface RawSeriesProduct {
  id: number;
  title: string;
  subtitle: string;
  /** A filename resolved against config.imageFolder, or a full http(s) URL used as-is (e.g. a hosted CDN image). */
  image: string;
  /** Overrides the model number derived from the image filename — needed when image is a full URL. */
  modelNo?: string;
  productType?: string;
  socketType?: string;
  features: string[];
}

export interface SeriesConfig {
  seriesName: string;
  seriesPath: string;
  categoryName: string;
  categoryPath: string;
  imageFolder: string;
}

const isUrl = (image: string) => /^https?:\/\//i.test(image);

/**
 * Migrated from Cloudinary to R2 (2026-08-08): Cloudinary generated these
 * resized/trimmed/padded derivatives on the fly per the transform string in
 * the URL. R2 has no equivalent, so each derivative was pre-baked once and
 * stored as a static object under a key that mirrors the old transform path
 * (see applyImageTransform below) — the "transform" is now just a path
 * segment picking which pre-baked file to fetch, not a live operation.
 *
 * Original rationale, still accurate: source photos come straight off a
 * phone camera (often 3000px+, several MB each) — undersized for nothing,
 * since they only ever render into a thumbnail or a single product image.
 * ~1000px is generous enough for the product-detail zoom view while still
 * cutting multi-MB originals down to tens of KB.
 *
 * The shoots are inconsistently framed — the product fills anywhere from ~9% to
 * ~45% of the frame depending on the photo — so on a fixed-size square box some
 * products render tiny with a sea of background around them. `e_trim` crops each
 * photo down to its actual content bounding box first, then `c_pad` re-centers
 * that trimmed content into a uniform square on a white backdrop, so every product
 * fills its box consistently regardless of how the original was framed.
 *
 * Two sizes are stored per photo: a 1000px version for the zoomable
 * product-detail image, and a 400px thumbnail for catalog grids and
 * related-product cards, which only ever render at a few hundred px wide —
 * serving the 1000px version everywhere would mean grid views transfer and
 * decode ~4-6x more image data than they display.
 */
const R2_BASE = 'https://pub-a013ba46066c48fc9b39d74fe917f7b7.r2.dev';
const IMAGE_ZOOM_TRANSFORM = 'e_trim/c_pad,w_1000,h_1000,b_white/f_auto,q_auto';
const IMAGE_THUMB_TRANSFORM = 'e_trim/c_pad,w_400,h_400,b_white/f_auto,q_auto';

const applyImageTransform = (url: string, transform: string): string =>
  url.startsWith(R2_BASE) ? url.replace(`${R2_BASE}/`, `${R2_BASE}/${transform}/`) : url;

/** Maps a series' raw product list into the shared CatalogProduct shape. */
export const buildSeriesCatalog = (products: RawSeriesProduct[], config: SeriesConfig): CatalogProduct[] =>
  products.map((p) => ({
    slug: slugify(p.title),
    title: p.title,
    subtitle: p.subtitle,
    imageSrc: isUrl(p.image) ? applyImageTransform(p.image, IMAGE_ZOOM_TRANSFORM) : `${config.imageFolder}/${p.image}`,
    thumbSrc: isUrl(p.image) ? applyImageTransform(p.image, IMAGE_THUMB_TRANSFORM) : `${config.imageFolder}/${p.image}`,
    modelNo: p.modelNo ?? getModelNo(p.image),
    seriesName: config.seriesName,
    seriesPath: config.seriesPath,
    categoryName: config.categoryName,
    categoryPath: config.categoryPath,
    productType: p.productType,
    socketType: p.socketType,
    features: p.features,
  }));
