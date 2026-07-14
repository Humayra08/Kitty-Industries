import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';
import { AboutUsPage } from './pages/AboutUs';
import { Gallery } from './pages/Gallery';
import { BoardOfDirectorsPage } from './pages/BoardOfDirectors';
import { SwitchSocketPage } from './pages/SwitchSocket';
import { GangSwitchSocket } from './pages/GangSwitchSocket';
import { ArtSeriesPage } from './pages/ArtSeries';
import { ProductDetailPage } from './pages/ProductDetail';
import { PianoSwitchSocket } from './pages/PianoSwitchSocket';
import { BlancoGoldenSeriesPage } from './pages/BlancoGoldenSeries';
import { BlancoWhiteSeriesPage } from './pages/BlancoWhiteSeries';
import { GloriaSeriesPage } from './pages/GloriaSeries';
import { VenusSeriesPage } from './pages/VenusSeries';
import { VeronaSeriesPage } from './pages/VeronaSeries';
import { DorenWhiteSeriesPage } from './pages/DorenWhiteSeries';
import { DorenGoldenSeriesPage } from './pages/DorenGoldenSeries';
import { VipGoldenSeriesPage } from './pages/VipGoldenSeries';
import { VipWhiteSeriesPage } from './pages/VipWhiteSeries';
import { OppleSeriesPage } from './pages/OppleSeries';

// Placeholder components for other routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center min-h-[70vh]">
    <h1 className="text-4xl font-bold text-muted">{title} - Coming Soon</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Placeholder title="Products" />} />
          <Route path="products/switch-socket" element={<SwitchSocketPage />} />
          <Route path="products/switch-socket/gang-switch-socket" element={<GangSwitchSocket />} />
          <Route path="products/switch-socket/gang-switch-socket/art-series" element={<ArtSeriesPage />} />
          <Route path="products/switch-socket/gang-switch-socket/art-series/:slug" element={<ProductDetailPage />} />
          <Route path="products/switch-socket/gang-switch-socket/blanco-series-golden" element={<BlancoGoldenSeriesPage />} />
          <Route path="products/switch-socket/gang-switch-socket/blanco-series-golden/:slug" element={<ProductDetailPage />} />
          <Route path="products/switch-socket/gang-switch-socket/blanco-series-white" element={<BlancoWhiteSeriesPage />} />
          <Route path="products/switch-socket/gang-switch-socket/blanco-series-white/:slug" element={<ProductDetailPage />} />
          <Route path="products/switch-socket/gang-switch-socket/gloria-series" element={<GloriaSeriesPage />} />
          <Route path="products/switch-socket/gang-switch-socket/gloria-series/:slug" element={<ProductDetailPage />} />
          <Route path="products/switch-socket/gang-switch-socket/venus-series" element={<VenusSeriesPage />} />
          <Route path="products/switch-socket/gang-switch-socket/venus-series/:slug" element={<ProductDetailPage />} />
          <Route path="products/switch-socket/gang-switch-socket/verona-series" element={<VeronaSeriesPage />} />
          <Route path="products/switch-socket/gang-switch-socket/verona-series/:slug" element={<ProductDetailPage />} />
          <Route path="products/switch-socket/gang-switch-socket/doren-series-white" element={<DorenWhiteSeriesPage />} />
          <Route path="products/switch-socket/gang-switch-socket/doren-series-white/:slug" element={<ProductDetailPage />} />
          <Route path="products/switch-socket/gang-switch-socket/doren-series-golden" element={<DorenGoldenSeriesPage />} />
          <Route path="products/switch-socket/gang-switch-socket/doren-series-golden/:slug" element={<ProductDetailPage />} />
          <Route path="products/switch-socket/gang-switch-socket/vip-series-golden" element={<VipGoldenSeriesPage />} />
          <Route path="products/switch-socket/gang-switch-socket/vip-series-golden/:slug" element={<ProductDetailPage />} />
          <Route path="products/switch-socket/gang-switch-socket/vip-series-white" element={<VipWhiteSeriesPage />} />
          <Route path="products/switch-socket/gang-switch-socket/vip-series-white/:slug" element={<ProductDetailPage />} />
          <Route path="products/switch-socket/gang-switch-socket/opple-series" element={<OppleSeriesPage />} />
          <Route path="products/switch-socket/gang-switch-socket/opple-series/:slug" element={<ProductDetailPage />} />
          <Route path="products/switch-socket/piano-switch-socket" element={<PianoSwitchSocket />} />
          <Route path="manufacturing" element={<Placeholder title="Manufacturing" />} />
          <Route path="industries" element={<Placeholder title="Industries" />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="board-of-directors" element={<BoardOfDirectorsPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<Placeholder title="404 Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
