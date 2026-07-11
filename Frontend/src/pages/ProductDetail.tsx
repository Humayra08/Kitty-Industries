import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { getCatalogProductByPath, getRelatedCatalogProducts } from '../data/productRegistry';
import type { CatalogProduct } from '../data/catalog';
import { getSpecSheetRows } from '../data/specSheet';

const ZOOM = 2;
const LENS_WIDTH = 220;
const LENS_HEIGHT = 160;

const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 0, height: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(100, Math.max(0, ((e.clientY - rect.top) / rect.height) * 100));
    setPos({ x, y });
    setSize({ width: rect.width, height: rect.height });
  };

  const zoomedWidth = size.width * ZOOM;
  const zoomedHeight = size.height * ZOOM;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full cursor-crosshair"
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {hovering && size.width > 0 && (
        <div
          className="hidden md:block pointer-events-none absolute rounded-lg overflow-hidden border-2 border-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] ring-1 ring-red-200 bg-white"
          style={{
            width: LENS_WIDTH,
            height: LENS_HEIGHT,
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img
            src={src}
            alt=""
            className="absolute object-cover max-w-none"
            style={{
              width: zoomedWidth,
              height: zoomedHeight,
              left: -(pos.x / 100) * zoomedWidth + LENS_WIDTH / 2,
              top: -(pos.y / 100) * zoomedHeight + LENS_HEIGHT / 2,
            }}
          />
        </div>
      )}
    </div>
  );
};

/** Pulls a leading rating (e.g. "20A", "13A") off the title, defaulting to the standard rating. */
const buildSpecs = (product: CatalogProduct) => {
  const fromSheet = getSpecSheetRows(product.modelNo, product.socketType);
  if (fromSheet) return fromSheet;

  const ratingMatch = product.title.match(/^(\d+A)\b/);
  const rating = ratingMatch ? `${ratingMatch[1]}~250V~` : '10A~250V~';
  const hasSwitch = product.features.includes('With Switch') || !!product.productType;
  const hasSocket = !!product.socketType;

  const specs: { label: string; value: string }[] = [{ label: 'Rating', value: rating }];
  if (hasSwitch) specs.push({ label: 'Switching', value: '40,000+' });
  if (hasSocket) specs.push({ label: 'Plugging', value: '5,000+' });
  if (product.socketType) {
    specs.push({ label: 'Pin Type', value: product.socketType.includes('Round') ? 'Round' : 'Universal' });
  }
  specs.push({ label: 'Case Material', value: 'PC Virgin' });
  specs.push({ label: 'Component Material', value: hasSocket ? 'Brass' : 'Copper Alloy' });
  return specs;
};

const buildTechnicalInfo = (product: CatalogProduct) => [
  { label: 'Model No.', value: product.modelNo },
  { label: 'Series', value: product.seriesName },
  { label: 'Category', value: product.productType ?? product.socketType ?? product.categoryName },
  { label: 'Application', value: 'Residential / Commercial' },
  { label: 'Warranty', value: 'Manufacturer Standard' },
  { label: 'Standards', value: 'International Quality Standards' },
];

const buildDescription = (product: CatalogProduct) => {
  const traits: string[] = [];
  if (product.features.includes('With Neon')) traits.push('a neon power indicator');
  if (product.features.includes('Fan Speed Control')) traits.push('smooth multi-speed fan control');
  if (product.socketType) traits.push(`a ${product.socketType.toLowerCase()} outlet`);
  const traitText = traits.length
    ? ` It features ${traits.join(' and ')}, built for everyday reliability.`
    : '';

  return [
    `The KITTY ${product.seriesName} ${product.title} is designed to deliver superior safety, durability and performance with a premium finish.${traitText} Ideal for modern homes, offices and commercial spaces.`,
    'Manufactured with high quality PC Virgin material and premium brass components, it ensures excellent conductivity, durability and corrosion resistance. With more than 40,000 switching cycles, it is the perfect choice for residential, commercial and industrial applications.',
  ];
};

/** 2 per row on mobile, 4 per row from sm up — keeps related products to a single row. */
const useRelatedPerPage = () => {
  const [perPage, setPerPage] = useState(() => (typeof window !== 'undefined' && window.innerWidth < 640 ? 2 : 4));

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    const update = () => setPerPage(mq.matches ? 4 : 2);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return perPage;
};

export const ProductDetailPage = () => {
  const { pathname } = useLocation();
  const [relatedPage, setRelatedPage] = useState(1);
  const [direction, setDirection] = useState(1);
  const relatedPerPage = useRelatedPerPage();

  const goToRelatedPage = (updater: (p: number) => number) => {
    setRelatedPage((p) => {
      const next = updater(p);
      setDirection(next > p ? 1 : -1);
      return next;
    });
  };

  const product = getCatalogProductByPath(pathname);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-lg text-gray-500">Product not found.</p>
        <Link to="/products" className="text-red-600 font-semibold hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  const specs = buildSpecs(product);
  const technicalInfo = buildTechnicalInfo(product);
  const description = buildDescription(product);

  const related = getRelatedCatalogProducts(product);
  const relatedTotalPages = Math.max(1, Math.ceil(related.length / relatedPerPage));
  const relatedCurrentPage = Math.min(relatedPage, relatedTotalPages);
  const relatedItems = related.slice((relatedCurrentPage - 1) * relatedPerPage, relatedCurrentPage * relatedPerPage);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl py-4 sm:py-5">
          <div className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-gray-500">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/products" className="hover:text-red-600 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to={product.categoryPath} className="hover:text-red-600 transition-colors">{product.categoryName}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to={product.seriesPath} className="hover:text-red-600 transition-colors">{product.seriesName}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-red-600 font-semibold">{product.subtitle}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-6xl py-8 sm:py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* ── Image ────────────────────────────────────────────────────── */}
          <div>
            <div className="w-full max-w-lg mx-auto lg:mx-0 aspect-square rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex items-center justify-center p-1">
              <ZoomableImage src={product.imageSrc} alt={product.title} />
            </div>
          </div>

          {/* ── Details ──────────────────────────────────────────────────── */}
          <div>
            <span className="inline-block px-3 py-1 rounded-md border border-red-500 text-red-600 text-xs font-bold uppercase tracking-wide mb-4">
              {product.seriesName}
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight leading-tight mb-3">
              {product.title}
            </h1>

            <p className="text-sm text-gray-500 mb-4">
              Model No.: <span className="text-red-600 font-bold">{product.modelNo}</span>
            </p>

            <div className="h-0.5 w-10 bg-red-600 rounded-full mb-6" />

            <div className="mb-2">
              <h2 className="text-red-600 font-bold text-sm uppercase tracking-wide">Product Overview</h2>
              <div className="h-0.5 w-8 bg-red-600 rounded-full mt-1.5 mb-4" />
            </div>

            {description.map((paragraph, i) => (
              <p key={i} className={`text-sm sm:text-base text-gray-500 leading-relaxed ${i < description.length - 1 ? 'mb-4' : ''}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* ── Specifications ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 sm:mt-16">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8 overflow-hidden">
            <h2 className="text-red-600 font-bold text-sm uppercase tracking-wide">Product Specifications</h2>
            <div className="h-0.5 w-8 bg-red-600 rounded-full mt-1.5 mb-5" />
            <div className="flex flex-col -mx-6 sm:-mx-8">
              {specs.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between gap-4 px-6 sm:px-8 py-3.5 text-sm ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <span className="font-semibold text-gray-900">{row.label}</span>
                  <span className="text-gray-500">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8">
            <h2 className="text-red-600 font-bold text-sm uppercase tracking-wide">Technical Information</h2>
            <div className="h-0.5 w-8 bg-red-600 rounded-full mt-1.5 mb-5" />
            <div className="flex flex-col divide-y divide-gray-100">
              {technicalInfo.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 py-3.5 text-sm">
                  <span className="font-semibold text-gray-900">{row.label}</span>
                  <span className="text-gray-500">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Related products ──────────────────────────────────────────── */}
        {relatedItems.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <h2 className="text-xl sm:text-2xl font-black text-red-600 uppercase tracking-tight">Related Products</h2>
            <div className="h-0.5 w-10 bg-red-600 rounded-full mt-2 mb-8" />

            <div className="flex items-center gap-3 sm:gap-5">
              {relatedTotalPages > 1 && (
                <button
                  onClick={() => goToRelatedPage((p) => Math.max(1, p - 1))}
                  disabled={relatedCurrentPage === 1}
                  className="hidden sm:flex flex-shrink-0 w-11 h-11 rounded-full border border-red-200 bg-white text-red-400 items-center justify-center shadow-sm hover:border-red-500 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous related products"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              <div className="flex-1 min-w-0 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={relatedCurrentPage}
                    custom={direction}
                    initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
                  >
                    {relatedItems.map((item) => (
                      <Link
                        key={item.slug}
                        to={`${item.seriesPath}/${item.slug}`}
                        className="group relative aspect-[4/5] bg-white border border-gray-100 rounded-2xl p-4 flex flex-col shadow-sm hover:shadow-[0_10px_24px_-10px_rgba(220,38,38,0.18)] hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="w-full flex-1 min-h-0">
                          <img src={item.imageSrc} alt={item.title} className="w-full h-full object-contain" />
                        </div>

                        <div className="w-full h-px bg-gray-200/50 my-2" />

                        <div className="pr-9">
                          <h3 className="font-bold text-gray-700 text-xs sm:text-sm uppercase tracking-tight leading-snug line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-400 mt-1 line-clamp-1">{item.subtitle}</p>
                        </div>

                        <span className="absolute right-3 bottom-3 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:bg-red-700 transition-colors">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {relatedTotalPages > 1 && (
                <button
                  onClick={() => goToRelatedPage((p) => Math.min(relatedTotalPages, p + 1))}
                  disabled={relatedCurrentPage === relatedTotalPages}
                  className="hidden sm:flex flex-shrink-0 w-11 h-11 rounded-full border border-red-200 bg-white text-red-400 items-center justify-center shadow-sm hover:border-red-500 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next related products"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>

            {relatedTotalPages > 1 && (
              <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
                <button
                  onClick={() => goToRelatedPage((p) => Math.max(1, p - 1))}
                  disabled={relatedCurrentPage === 1}
                  className="w-10 h-10 rounded-full border border-red-200 text-red-400 flex items-center justify-center hover:border-red-500 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous related products"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => goToRelatedPage((p) => Math.min(relatedTotalPages, p + 1))}
                  disabled={relatedCurrentPage === relatedTotalPages}
                  className="w-10 h-10 rounded-full border border-red-200 text-red-400 flex items-center justify-center hover:border-red-500 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next related products"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
