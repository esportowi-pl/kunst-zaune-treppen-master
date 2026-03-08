
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Ogrodzenia metalowe',
    subtitle: 'Kute, spawane, nowoczesne',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
    link: '/metallzaune',
  },
  {
    title: 'Schody drewniane',
    subtitle: 'Dąb, buk, jesion',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    link: '/holztreppen',
  },
  {
    title: 'Projekty indywidualne',
    subtitle: 'Balustrady, bramy, ogrody zimowe',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    link: '/projekte',
  },
];

const ProductsGallery = () => {
  return (
    <section className="section-padding bg-sand">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Oferta</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">Nasze specjalizacje</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link to={product.link} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-display font-semibold text-white mb-1">
                      {product.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">{product.subtitle}</p>
                    <div className="flex items-center gap-2 text-white/80 text-sm group-hover:text-white transition-colors">
                      <span>Dowiedz się więcej</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGallery;
