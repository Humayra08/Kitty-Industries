import { Hero } from '../components/sections/Hero';
import { AboutUs } from '../components/sections/AboutUs';
import { ProductShowcase } from '../components/sections/ProductShowcase';

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutUs />
      <ProductShowcase />
    </div>
  );
};
