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

/** Maps a series' raw product list into the shared CatalogProduct shape. */
export const buildSeriesCatalog = (products: RawSeriesProduct[], config: SeriesConfig): CatalogProduct[] =>
  products.map((p) => ({
    slug: slugify(p.title),
    title: p.title,
    subtitle: p.subtitle,
    imageSrc: isUrl(p.image) ? p.image : `${config.imageFolder}/${p.image}`,
    modelNo: p.modelNo ?? getModelNo(p.image),
    seriesName: config.seriesName,
    seriesPath: config.seriesPath,
    categoryName: config.categoryName,
    categoryPath: config.categoryPath,
    productType: p.productType,
    socketType: p.socketType,
    features: p.features,
  }));
