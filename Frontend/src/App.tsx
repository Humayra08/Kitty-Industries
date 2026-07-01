import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ContactUs } from './pages/ContactUs';

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
          <Route path="manufacturing" element={<Placeholder title="Manufacturing" />} />
          <Route path="industries" element={<Placeholder title="Industries" />} />
          <Route path="about" element={<Placeholder title="About Us" />} />
          <Route path="board-of-directors" element={<Placeholder title="Board of Directors" />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<Placeholder title="404 Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
