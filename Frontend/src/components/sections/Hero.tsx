import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background video — swap src for the Cloudinary URL once uploaded */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />

      {/* Red gradient overlay — left-heavy so the headline stays readable */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(120,10,10,0.95) 0%, rgba(160,20,20,0.85) 30%, rgba(120,10,10,0.55) 60%, rgba(120,10,10,0.35) 100%)',
        }}
      />

      {/* Celebration decoration — top right */}
      <img
        src="/celebration.png"
        alt=""
        aria-hidden="true"
        className="absolute z-20 top-4 right-4 w-28 sm:top-6 sm:right-6 sm:w-40 lg:top-8 lg:right-10 lg:w-56 xl:w-64"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-6xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-5">
  <span className="whitespace-nowrap">Building Connections,</span>
  <br />
  Powering Progress.
</h1>
            {/* <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              From switches to full lighting systems, we partner with homes,
              businesses, and industries nationwide — engineered on spec,
              built to last, delivered on time.
            </p> */}

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button className="inline-flex items-center gap-2.5 rounded-md border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70">
                  <Play className="h-3 w-3 fill-white" />
                </span>
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
