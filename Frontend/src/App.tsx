import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ProductsPage } from './pages/Products';
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
import { CircuitBreakerPage } from './pages/CircuitBreaker';
import { CircuitBreakerSPPage } from './pages/CircuitBreakerSP';
import { CircuitBreakerDPPage } from './pages/CircuitBreakerDP';
import { CircuitBreakerTPPage } from './pages/CircuitBreakerTP';
import { AccessoriesPage } from './pages/Accessories';
import { CableTiePage } from './pages/CableTie';
import { CableClipPage } from './pages/CableClip';
import { SixPinSocketsPage } from './pages/SixPinSockets';
import { PlugAdaptersPage } from './pages/PlugAdapters';
import { ExtensionSocketPage } from './pages/ExtensionSocket';
import { LampHoldersCeilingRosePage } from './pages/LampHoldersCeilingRose';
import { SwitchBoxPage } from './pages/SwitchBox';
import { FanCapacitorPage } from './pages/FanCapacitor';
import { LedLightingPage } from './pages/LedLighting';
import { LedABulbPage } from './pages/LedABulb';
import { LedTBulbPage } from './pages/LedTBulb';
import { LedSolarDcBulbPage } from './pages/LedSolarDcBulb';
import { LedEmergencyBulbPage } from './pages/LedEmergencyBulb';
import { LedLinearTubeBattenLightPage } from './pages/LedLinearTubeBattenLight';
import { LedFloodLightPage } from './pages/LedFloodLight';
import { LedDownLightPage } from './pages/LedDownLight';
import { LedSpotLightPage } from './pages/LedSpotLight';
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
          <Route path="products" element={<ProductsPage />} />
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
          <Route path="products/switch-socket/piano-switch-socket/:slug" element={<ProductDetailPage />} />
          <Route path="products/circuit-breakers" element={<CircuitBreakerPage />} />
          <Route path="products/circuit-breakers/sp-circuit-breaker" element={<CircuitBreakerSPPage />} />
          <Route path="products/circuit-breakers/sp-circuit-breaker/:slug" element={<ProductDetailPage />} />
          <Route path="products/circuit-breakers/dp-circuit-breaker" element={<CircuitBreakerDPPage />} />
          <Route path="products/circuit-breakers/dp-circuit-breaker/:slug" element={<ProductDetailPage />} />
          <Route path="products/circuit-breakers/tp-circuit-breaker" element={<CircuitBreakerTPPage />} />
          <Route path="products/circuit-breakers/tp-circuit-breaker/:slug" element={<ProductDetailPage />} />
          <Route path="products/accessories" element={<AccessoriesPage />} />
          <Route path="products/accessories/cable-tie" element={<CableTiePage />} />
          <Route path="products/accessories/cable-tie/:slug" element={<ProductDetailPage />} />
          <Route path="products/accessories/cable-clip" element={<CableClipPage />} />
          <Route path="products/accessories/cable-clip/:slug" element={<ProductDetailPage />} />
          <Route path="products/accessories/others/6-pin-sockets" element={<SixPinSocketsPage />} />
          <Route path="products/accessories/others/6-pin-sockets/:slug" element={<ProductDetailPage />} />
          <Route path="products/accessories/others/plug-adapters" element={<PlugAdaptersPage />} />
          <Route path="products/accessories/others/plug-adapters/:slug" element={<ProductDetailPage />} />
          <Route path="products/accessories/others/extension-socket" element={<ExtensionSocketPage />} />
          <Route path="products/accessories/others/extension-socket/:slug" element={<ProductDetailPage />} />
          <Route path="products/accessories/others/lamp-holders-ceiling-rose" element={<LampHoldersCeilingRosePage />} />
          <Route path="products/accessories/others/lamp-holders-ceiling-rose/:slug" element={<ProductDetailPage />} />
          <Route path="products/accessories/others/switch-box" element={<SwitchBoxPage />} />
          <Route path="products/accessories/others/switch-box/:slug" element={<ProductDetailPage />} />
          <Route path="products/accessories/others/fan-capacitor" element={<FanCapacitorPage />} />
          <Route path="products/accessories/others/fan-capacitor/:slug" element={<ProductDetailPage />} />
          <Route path="products/led-lighting" element={<LedLightingPage />} />
          <Route path="products/led-lighting/a-bulb" element={<LedABulbPage />} />
          <Route path="products/led-lighting/a-bulb/:slug" element={<ProductDetailPage />} />
          <Route path="products/led-lighting/t-bulb" element={<LedTBulbPage />} />
          <Route path="products/led-lighting/t-bulb/:slug" element={<ProductDetailPage />} />
          <Route path="products/led-lighting/solar-dc-bulb" element={<LedSolarDcBulbPage />} />
          <Route path="products/led-lighting/solar-dc-bulb/:slug" element={<ProductDetailPage />} />
          <Route path="products/led-lighting/emergency-bulb" element={<LedEmergencyBulbPage />} />
          <Route path="products/led-lighting/emergency-bulb/:slug" element={<ProductDetailPage />} />
          <Route path="products/led-lighting/linear-tube-batten-light" element={<LedLinearTubeBattenLightPage />} />
          <Route path="products/led-lighting/linear-tube-batten-light/:slug" element={<ProductDetailPage />} />
          <Route path="products/led-lighting/flood-light" element={<LedFloodLightPage />} />
          <Route path="products/led-lighting/flood-light/:slug" element={<ProductDetailPage />} />
          <Route path="products/led-lighting/down-light" element={<LedDownLightPage />} />
          <Route path="products/led-lighting/down-light/:slug" element={<ProductDetailPage />} />
          <Route path="products/led-lighting/spot-light" element={<LedSpotLightPage />} />
          <Route path="products/led-lighting/spot-light/:slug" element={<ProductDetailPage />} />
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
