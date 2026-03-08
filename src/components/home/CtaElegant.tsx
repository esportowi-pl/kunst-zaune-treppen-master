
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CtaElegant = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-white relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gold mb-6 font-sans">
            Zapraszamy
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Porozmawiajmy
            <br />
            o Twoim projekcie
          </h2>
          <p className="text-white/60 leading-relaxed mb-10 text-lg">
            Każda realizacja zaczyna się od rozmowy. Bezpłatna konsultacja,
            niewiążąca wycena — bez zobowiązań.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt">
              <Button className="bg-gold text-charcoal hover:bg-gold/90 px-10 py-6 text-base font-medium rounded-sm">
                Umów konsultację <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:+491234567890">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 px-10 py-6 text-base font-light rounded-sm"
              >
                +49 (0) 123 456 7890
              </Button>
            </a>
          </div>

          <p className="text-white/30 text-xs mt-8 tracking-wide">
            Bezpłatna konsultacja · Niewiążąca wycena · Odpowiedź w 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaElegant;
