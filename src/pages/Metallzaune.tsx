
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const products = [
  {
    title: 'Ogrodzenia klasyczne',
    description: 'Ponadczasowa elegancja z tradycyjnym wzornictwem i najwyższą jakością wykonania.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
  },
  {
    title: 'Ogrodzenia nowoczesne',
    description: 'Czyste linie i minimalistyczny design dla współczesnej architektury.',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
  },
  {
    title: 'Ogrodzenia kute',
    description: 'Artystyczne prace kowalskie z indywidualnymi zdobieniami.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
  },
  {
    title: 'Ogrodzenia przemysłowe',
    description: 'Solidne i funkcjonalne rozwiązania dla obiektów komercyjnych.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
  },
];

const features = [
  'Indywidualne doradztwo i projektowanie',
  'Produkcja na wymiar według Twoich potrzeb',
  'Najwyższej jakości materiały i obróbka',
  'Trwałe malowanie proszkowe',
  'Konstrukcje odporne na korozję',
  'Profesjonalny montaż na miejscu',
];

const steps = [
  { num: '01', title: 'Konsultacja', description: 'Bezpłatne doradztwo i wycena projektu' },
  { num: '02', title: 'Projekt', description: 'Indywidualny design i transparentna oferta' },
  { num: '03', title: 'Produkcja', description: 'Ręczna produkcja z najwyższą precyzją' },
  { num: '04', title: 'Montaż', description: 'Terminowa dostawa i fachowy montaż' },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Metallzaune = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
            alt="Eleganckie ogrodzenie metalowe"
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
              Ogrodzenia metalowe
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-semibold leading-[1.1] mb-8">
              Ogrodzenia <span className="text-gold">najwyższej klasy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
              Maßgefertigte Metallzäune, die Sicherheit und Ästhetik perfekt verbinden.
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
                Artystyczne ogrodzenia dla wymagających
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nasze ogrodzenia metalowe łączą funkcjonalność z estetycznym wzornictwem. Zapewniają ochronę i prywatność, a jednocześnie stanowią ważny element architektoniczny Twojej posesji. Ponad 18 lat doświadczenia gwarantuje najwyższą jakość.
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
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                alt="Detale ogrodzenia metalowego"
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
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Nasze modele</h2>
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

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Proces</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Od pomysłu do realizacji
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-xs tracking-[0.2em] text-muted-foreground mb-3 font-sans">
                  {step.num}
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeUp}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
                alt="Detal ogrodzenia"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Jakość</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8">
                Dlaczego nasze ogrodzenia?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nasze ogrodzenia wyróżniają się wyjątkową jakością, trwałością i indywidualnym wzornictwem. Stosujemy tylko najlepsze materiały, łącząc tradycyjne rzemiosło z nowoczesnymi technologiami.
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
              Zainteresowany ogrodzeniem?
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

export default Metallzaune;
