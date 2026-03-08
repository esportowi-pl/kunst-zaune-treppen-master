
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const categories = [
  { id: 'alle', name: 'Wszystkie' },
  { id: 'zaune', name: 'Ogrodzenia' },
  { id: 'treppen', name: 'Schody' },
  { id: 'spezial', name: 'Specjalne' },
];

const projects = [
  { id: 1, title: 'Eleganckie ogrodzenie, Warszawa', category: 'zaune', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625', year: '2024' },
  { id: 2, title: 'Schody kręcone, Kraków', category: 'treppen', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716', year: '2023' },
  { id: 3, title: 'Schody samonośne, Gdańsk', category: 'treppen', image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb', year: '2023' },
  { id: 4, title: 'Nowoczesne ogrodzenie, Wrocław', category: 'zaune', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', year: '2022' },
  { id: 5, title: 'Schody dębowe, Poznań', category: 'treppen', image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544', year: '2022' },
  { id: 6, title: 'Ogrodzenie kute, Łódź', category: 'zaune', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625', year: '2021' },
  { id: 7, title: 'Parapety marmurowe, Katowice', category: 'spezial', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716', year: '2021' },
  { id: 8, title: 'Ogrodzenie przemysłowe, Szczecin', category: 'zaune', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', year: '2020' },
  { id: 9, title: 'Schody spiralne, Lublin', category: 'treppen', image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb', year: '2019' },
];

const Projekte = () => {
  const [active, setActive] = React.useState('alle');
  const filtered = active === 'alle' ? projects : projects.filter(p => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
            alt="Galeria projektów"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-6 font-sans">Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-display font-semibold leading-[1.1] mb-8">
              Nasze <span className="text-gold">realizacje</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
              Ponad 2500 zrealizowanych projektów w całej Polsce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-6 py-3 text-sm font-sans tracking-wide transition-colors rounded-sm ${
                  active === cat.id
                    ? 'bg-foreground text-background'
                    : 'border border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-display text-base font-semibold">{project.title}</h3>
                  <span className="text-xs text-muted-foreground font-sans">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '18+', label: 'Lat doświadczenia' },
              { number: '2500+', label: 'Zrealizowanych projektów' },
              { number: '150+', label: 'Miast w Polsce' },
              { number: '95%', label: 'Zadowolonych klientów' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground font-sans">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4 font-sans">Zapraszamy</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Zrealizujmy Twój projekt
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Niezależnie od tego czy to ogrodzenie, schody czy projekt specjalny — zrealizujemy Twoje pomysły.
            </p>
            <Link to="/kontakt">
              <Button className="bg-white text-charcoal hover:bg-white/90 px-8 py-6 text-base font-medium rounded-sm">
                Skontaktuj się <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projekte;
