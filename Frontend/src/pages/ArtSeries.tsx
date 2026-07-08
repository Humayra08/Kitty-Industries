import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronUp, ChevronDown, Search, LayoutGrid, List, ChevronLeft, SlidersHorizontal, X, ArrowRight } from 'lucide-react';
import { artSeriesProducts as products, artSeriesProductTypes as productTypes, artSeriesSocketTypes as socketTypes, artSeriesFeatureList as featureList, slugify } from '../data/artSeriesProducts';

const FilterSection = ({
  title,
  options,
  counts,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  counts: Record<string, number>;
  selected: Set<string>;
  onToggle: (value: string) => void;
}) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-100 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-sm font-bold text-gray-700 uppercase tracking-wide mb-1"
      >
        {title}
        <ChevronUp className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? '' : 'rotate-180'}`} />
      </button>
      {open && (
        <div className="flex flex-col gap-2.5 mt-3">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer group">
              <input
                type="checkbox"
                checked={selected.has(opt)}
                onChange={() => onToggle(opt)}
                className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500 accent-red-600"
              />
              <span className="group-hover:text-red-600 transition-colors">
                {opt} <span className="text-gray-400">({counts[opt] ?? 0})</span>
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export const ArtSeriesPage = () => {
  const [search, setSearch] = useState('');
  const [selectedProductTypes, setSelectedProductTypes] = useState<Set<string>>(new Set());
  const [selectedSocketTypes, setSelectedSocketTypes] = useState<Set<string>>(new Set());
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [page, setPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'az' | 'za'>('default');

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    [...productTypes, ...socketTypes, ...featureList].forEach((key) => (c[key] = 0));
    products.forEach((p) => {
      if (p.productType) c[p.productType] = (c[p.productType] ?? 0) + 1;
      if (p.socketType) c[p.socketType] = (c[p.socketType] ?? 0) + 1;
      p.features.forEach((f) => (c[f] = (c[f] ?? 0) + 1));
    });
    return c;
  }, []);

  const toggle = (set: Set<string>, setter: (s: Set<string>) => void, value: string) => {
    const next = new Set(set);
    next.has(value) ? next.delete(value) : next.add(value);
    setter(next);
    setPage(1);
  };

  const filtered = useMemo(() => {
    const result = products.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchesProductType = selectedProductTypes.size === 0 || (p.productType && selectedProductTypes.has(p.productType));
      const matchesSocketType = selectedSocketTypes.size === 0 || (p.socketType && selectedSocketTypes.has(p.socketType));
      const matchesFeatures = selectedFeatures.size === 0 || p.features.some((f) => selectedFeatures.has(f));
      return matchesSearch && matchesProductType && matchesSocketType && matchesFeatures;
    });

    if (sortBy === 'az') result.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === 'za') result.sort((a, b) => b.title.localeCompare(a.title));

    return result;
  }, [search, selectedProductTypes, selectedSocketTypes, selectedFeatures, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const rangeStart = filtered.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const rangeEnd = Math.min(currentPage * itemsPerPage, filtered.length);

  const resetAll = () => {
    setSearch('');
    setSelectedProductTypes(new Set());
    setSelectedSocketTypes(new Set());
    setSelectedFeatures(new Set());
    setPage(1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── Breadcrumb ─────────────────────────────────────────────────── */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl py-4 sm:py-5">
          <div className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-gray-500">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/products/switch-socket" className="hover:text-red-600 transition-colors">Switch &amp; Socket</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/products/switch-socket/gang-switch-socket" className="hover:text-red-600 transition-colors">Gang Switch Socket</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-red-600 font-semibold">ART SERIES</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-10">

          {/* Mobile overlay */}
          {showMobileFilters && (
            <div
              className="lg:hidden fixed inset-x-0 bottom-0 top-16 md:top-20 bg-black/40 z-30"
              onClick={() => setShowMobileFilters(false)}
            />
          )}

          {/* ── Sidebar filters ─────────────────────────────────────────── */}
          <aside
            className={`${showMobileFilters ? 'fixed left-0 top-16 md:top-20 bottom-0 z-40 w-[85vw] max-w-sm bg-white p-5 overflow-y-auto' : 'hidden'} lg:sticky lg:top-24 lg:z-0 lg:block lg:w-auto lg:max-w-none lg:bg-transparent lg:p-0 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto pr-2 scrollbar-thin`}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-700 text-base uppercase tracking-wide">Filters</h3>
              <div className="flex items-center gap-3">
                <button onClick={resetAll} className="text-xs font-semibold text-red-600 hover:underline">
                  Reset All
                </button>
                <button onClick={() => setShowMobileFilters(false)} className="lg:hidden text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mb-2">
              <p className="text-sm font-bold text-gray-700 mb-2">Search Products</p>
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  placeholder="Search by product name..."
                  className="w-full text-sm border border-gray-200 rounded-lg pl-3 pr-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400"
                />
                <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <FilterSection
              title="Product Type"
              options={productTypes}
              counts={counts}
              selected={selectedProductTypes}
              onToggle={(v) => toggle(selectedProductTypes, setSelectedProductTypes, v)}
            />
            <FilterSection
              title="Socket Type"
              options={socketTypes}
              counts={counts}
              selected={selectedSocketTypes}
              onToggle={(v) => toggle(selectedSocketTypes, setSelectedSocketTypes, v)}
            />
            <FilterSection
              title="Features"
              options={featureList}
              counts={counts}
              selected={selectedFeatures}
              onToggle={(v) => toggle(selectedFeatures, setSelectedFeatures, v)}
            />
          </aside>

          {/* ── Main content ──────────────────────────────────────────────── */}
          <div>
            <div className="mb-14">
              <h1 className="text-3xl sm:text-4xl font-black text-red-600 tracking-tight mb-4">ART SERIES</h1>
              <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
                A perfect blend of elegance and durability. The ART Series brings a premium look to your space with superior safety and long-lasting performance.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-5">
              <p className="text-sm text-gray-500">
                Showing {rangeStart} to {rangeEnd} of {filtered.length} products
              </p>

              <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-nowrap lg:items-center lg:gap-3">
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700"
                >
                  <span className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-red-600" />
                    Filters
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                <div className="relative flex items-center gap-2 px-3 py-2.5 rounded-lg border border-gray-200">
                  <span className="text-xs text-gray-500 whitespace-nowrap">Sort By</span>
                  <select
                    value={sortBy}
                    onChange={(e) => { setSortBy(e.target.value as 'default' | 'az' | 'za'); setPage(1); }}
                    className="appearance-none bg-transparent text-sm font-semibold text-gray-700 pr-5 focus:outline-none flex-1 min-w-0"
                  >
                    <option value="default">Default</option>
                    <option value="az">Name (A-Z)</option>
                    <option value="za">Name (Z-A)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 pointer-events-none" />
                </div>

                <div className="relative flex items-center gap-2 px-3 py-2.5 rounded-lg border border-gray-200">
                  <span className="text-xs text-gray-500 whitespace-nowrap">Show</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => { setItemsPerPage(Number(e.target.value)); setPage(1); }}
                    className="appearance-none bg-transparent text-sm font-semibold text-gray-700 pr-5 focus:outline-none flex-1 min-w-0"
                  >
                    <option value={9}>9</option>
                    <option value={18}>18</option>
                    <option value={27}>27</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 pointer-events-none" />
                </div>

                <div className="flex items-center justify-end gap-1 flex-shrink-0">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-400 hover:text-red-600'}`}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${viewMode === 'list' ? 'bg-red-600 text-white' : 'border border-gray-200 text-gray-400 hover:text-red-600'}`}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product grid / list */}
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-5 gap-y-8'
                  : 'flex flex-col gap-4'
              }
            >
              {pageItems.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/switch-socket/gang-switch-socket/art-series/${slugify(product.title)}`}
                  className={
                    viewMode === 'grid'
                      ? 'group relative bg-white border border-gray-100 rounded-2xl p-4 pt-3 flex flex-col shadow-sm hover:shadow-[0_10px_24px_-10px_rgba(220,38,38,0.18)] hover:-translate-y-1 transition-all duration-300'
                      : 'group relative bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-5 shadow-sm hover:shadow-[0_10px_24px_-10px_rgba(220,38,38,0.18)] transition-all duration-300'
                  }
                >
                  <div className={viewMode === 'grid' ? 'w-full aspect-[4/3] mb-2' : 'w-24 h-24 flex-shrink-0'}>
                    <img
                      src={`/Products/ART SERIES/${product.image}`}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {viewMode === 'grid' && <div className="w-full h-px bg-gray-200/50 mb-2" />}

                  <div className={viewMode === 'grid' ? 'flex-1 pb-5' : 'flex-1'}>
                    <h3 className="font-bold text-gray-700 text-sm uppercase tracking-tight leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">{product.subtitle}</p>
                  </div>

                  <span
                    className={
                      viewMode === 'grid'
                        ? 'absolute right-4 bottom-4 w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:bg-red-700 transition-colors'
                        : 'w-10 h-10 flex-shrink-0 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:bg-red-700 transition-colors'
                    }
                  >
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}

              {pageItems.length === 0 && (
                <p className="col-span-full text-center text-gray-400 py-16">No products match the selected filters.</p>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-9 h-9 rounded-full border border-red-200 text-red-400 flex items-center justify-center hover:border-red-500 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const n = i + 1;
                  return (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`w-9 h-9 rounded-full text-sm font-semibold flex items-center justify-center transition-colors ${
                        n === currentPage ? 'bg-red-600 text-white' : 'border border-red-200 text-gray-600 hover:border-red-500 hover:text-red-600'
                      }`}
                    >
                      {n}
                    </button>
                  );
                })}

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 rounded-full border border-red-200 text-red-400 flex items-center justify-center hover:border-red-500 hover:text-red-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
