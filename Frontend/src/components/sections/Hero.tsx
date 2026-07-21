import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Play, X } from 'lucide-react';

const PROMO_VIDEO_ID = 'vwV3DxYYgys';

const VideoModal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 sm:-right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl aspect-video bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${PROMO_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&vq=hd1080`}
            title="KITTY Industries Promo Video"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] bg-black overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://res.cloudinary.com/dcdo4venk/video/upload/q_auto,f_auto/v1783166575/Kitty_hero_lzupmy.mp4"
      />

      {/* Red gradient overlay — left-heavy so the headline stays readable */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(120,10,10,0.85) 0%, rgba(160,20,20,0.7) 30%, rgba(120,10,10,0.4) 60%, rgba(120,10,10,0.2) 100%)',
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
      <div className="absolute inset-0 z-20 flex items-center py-10 sm:py-0">
        <div className="container mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-5">
              <span className="text-white block">Powering</span>
              <span className="block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #ff5252 0%, #ff0000 55%, #e60000 100%)' }}
                >
                  Everyday
                </span>
                <span className="text-white"> Life</span>
              </span>
            </h1>

            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Delivering premium switches, accessories, and lighting solutions
              that power homes, businesses, and industries across Bangladesh.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(239,68,68,0.6)] transition-colors hover:bg-red-700"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2.5 rounded-lg border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white">
                  <Play className="h-3 w-3 fill-white" />
                </span>
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && <VideoModal onClose={() => setIsVideoOpen(false)} />}
      </AnimatePresence>
    </section>
  );
};
