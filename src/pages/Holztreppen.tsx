
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const products = [
  {
    title: 'Schody proste',
    description: 'Eleganckie i oszczędzające miejsce schody o prostym przebiegu.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
  },
  {
    title: 'Schody kręcone',
    description: 'Artystyczne schody z zakręconymi stopniami i wyjątkowym charakterem.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
  },
  {
    title: 'Schody spiralne',
    description: 'Oszczędzające miejsce schody z centralnym słupem i wyrafinowanymi detalami.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
  },
  {
    title: 'Schody samonośne',
    description: 'Nowoczesne schody o minimalistycznej konstrukcji i efekcie lewitacji.',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
  },
];

const woodTypes = [
  { name: 'Dąb', description: 'Wytrzymały z charakterystycznym usłojeniem, idealny do klasycznych i nowoczesnych schodów.' },
  { name: 'Buk', description: 'Równomierna struktura, wyjątkowo wytrzymały i wszechstronny.' },
  { name: 'Orzech', description: 'Szlachetny wygląd z ciepłym, ciemnym odcieniem dla luksusowych schodów.' },
  { name: 'Klon', description: 'Jasne drewno z delikatnym usłojeniem dla świeżego, nowoczesnego wyglądu.' },
  { name: 'Jesion', description: 'Jasne do średniobrązowego drewno o wyraźnym usłojeniu i dużej elastyczności.' },
  { name: 'Sosna', description: 'Ekonomiczna opcja o ciepłym odcieniu i rustykalnym charakterze.' },
];

const features = [
  'Indywidualne planowanie i wizualizacja 3D',
  'Wysokiej jakości drewno lite różnych gatunków',
  'Precyzyjne rzemieślnicze wykonanie',
  'Elastyczne możliwości projektowe',
  'Trwała i zrównoważona konstrukcja',
  'Profesjonalny montaż na miejscu',
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Holztreppen = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
            alt="Eleganckie schody drewniane"
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
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-6 font-sans">
              Schody drewniane
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-semibold leading-[1.1] mb-8">
              Ręcznie robione <span className="text-gold">schody</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
              Mistrzowskie rzemiosło — idealne połączenie funkcjonalności i ponadczasowej elegancji.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">O produkcie</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8">
                Schody na wymiar dla Twojego domu
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nasze schody drewniane to więcej niż element łączący piętra — to centralny element stylistyczny, który nadaje Twojemu domowi charakter i ciepło. 18 lat doświadczenia w stolarstwie gwarantuje najwyższą jakość.
              </p>
              <ul className="space-y-3">
                {features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
                alt="Detal schodów drewnianych"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4 font-sans">Kolekcja</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Nasze modele schodów</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden mb-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Types */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Materiały</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Gatunki drewna</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {woodTypes.map((wood, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 border border-border hover:border-accent transition-colors"
              >
                <h3 className="font-display text-lg font-semibold mb-3">{wood.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{wood.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Oferujemy także inne gatunki drewna i kombinacje. Zapytaj nas!
            </p>
            <Link to="/kontakt">
              <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium rounded-sm">
                Zapytaj o doradztwo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                alt="Detal schodów"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Jakość</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8">
                Dlaczego nasze schody?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nasze schody drewniane wyróżniają się wyjątkową jakością, trwałą konstrukcją i indywidualnym wzornictwem. Tradycyjne rzemiosło łączymy z nowoczesną techniką.
              </p>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-gold mb-4 font-sans">Zapraszamy</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Twoje wymarzone schody czekają
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Skontaktuj się z nami po bezpłatną konsultację i niezobowiązującą wycenę.
            </p>
            <Link to="/kontakt">
              <Button className="bg-white text-charcoal hover:bg-white/90 px-8 py-6 text-base font-medium rounded-sm">
                Zapytaj o wycenę <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Holztreppen;
