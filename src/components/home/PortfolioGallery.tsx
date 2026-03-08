
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Willa w Wilanowie',
    category: 'Ogrodzenie metalowe',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
  },
  {
    title: 'Rezydencja w Sopocie',
    category: 'Schody dębowe',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
  },
  {
    title: 'Dom w Krakowie',
    category: 'Brama wjazdowa',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
  },
  {
    title: 'Apartament w Warszawie',
    category: 'Balustrada kuta',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
  },
];

const PortfolioGallery = () => {
  return (
    <section className="section-padding bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4 font-sans">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Wybrane realizacje
            </h2>
          </div>
          <Link
            to="/projekte"
            className="flex items-center gap-2 text-gold hover:text-white transition-colors mt-4 md:mt-0 text-sm"
          >
            Zobacz wszystkie <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/60 text-xs uppercase tracking-[0.15em] mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl font-display font-semibold text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
