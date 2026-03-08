
import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">O nas</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Od 2006 roku tworzymy
              <br />
              dzieła rzemiosła
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Każdy projekt, który opuszcza nasz warsztat, jest wynikiem wieloletniego doświadczenia,
                pasji do detalu i głębokiego szacunku dla materiału. Łączymy polską tradycję rzemieślniczą
                z najwyższymi europejskimi standardami.
              </p>
              <p>
                Nasze ogrodzenia metalowe i schody drewniane to nie produkty — to inwestycje, które
                podnoszą wartość nieruchomości i służą pokoleniom.
              </p>
            </div>
            <div className="mt-8 flex gap-12">
              <div>
                <div className="text-3xl font-display font-semibold text-foreground">18+</div>
                <div className="text-sm text-muted-foreground mt-1">lat doświadczenia</div>
              </div>
              <div>
                <div className="text-3xl font-display font-semibold text-foreground">2500+</div>
                <div className="text-sm text-muted-foreground mt-1">zrealizowanych projektów</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                alt="Rzemiosło - detal ogrodzenia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
