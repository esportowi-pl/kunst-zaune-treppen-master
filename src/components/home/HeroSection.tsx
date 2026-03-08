
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Elegante Hausfassade mit Metallzaun"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-6 font-sans">
            Rzemiosło · Precyzja · Tradycja
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-semibold leading-[1.1] mb-8">
            Ogrodzenia i schody
            <br />
            <span className="text-gold">najwyższej klasy</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed">
            Od 2006 roku tworzymy dzieła rzemiosła dla najbardziej wymagających klientów.
            Każdy projekt to unikalne połączenie tradycji i nowoczesności.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/kontakt">
              <Button className="bg-white text-charcoal hover:bg-white/90 px-8 py-6 text-base font-medium rounded-sm">
                Bezpłatna konsultacja
              </Button>
            </Link>
            <Link to="/projekte">
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base font-light rounded-sm"
              >
                Zobacz realizacje
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
