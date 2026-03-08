
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const team = [
  {
    name: 'Johann Werner',
    position: 'Założyciel i dyrektor',
    bio: 'Z ponad 30-letnim doświadczeniem w obróbce metalu i stolarstwie, Johann Werner założył firmę i prowadzi ją z pasją i wizją.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
  },
  {
    name: 'Maria Schmidt',
    position: 'Projektantka',
    bio: 'Maria odpowiada za projektowanie i wizualizację. Jej oko do detalu i estetyki ożywia życzenia klientów.',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544',
  },
  {
    name: 'Thomas Weber',
    position: 'Kierownik produkcji',
    bio: 'Thomas nadzoruje produkcję, zapewniając najwyższe standardy jakości i terminowość realizacji.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
  },
];

const values = [
  'Najwyższe standardy jakości w każdym projekcie',
  'Rozwiązania szyte na miarę indywidualnych potrzeb',
  'Niezawodny serwis od doradztwa po montaż',
  'Zrównoważona produkcja z szacunkiem dla środowiska',
];

const UberUns = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
            alt="O nas"
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
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-6 font-sans">O nas</p>
            <h1 className="text-5xl md:text-7xl font-display font-semibold leading-[1.1] mb-8">
              Nasza <span className="text-gold">historia</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
              Poznaj naszą firmę, wartości i ludzi, którzy tworzą wyjątkowe projekty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Historia</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8">
                Od warsztatu do firmy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  JW Zaune & Treppen została założona w 2006 roku przez Johanna Wernera z jasną wizją: połączenie tradycji rzemieślniczej z nowoczesną techniką.
                </p>
                <p>
                  Z małego warsztatu wyrosła firma licząca ponad 25 pracowników, ceniona za wyjątkową jakość i niezawodność.
                </p>
                <p>
                  Ponad 2500 zrealizowanych projektów w całej Polsce to dowód kompetencji i zaangażowania w każdy detal.
                </p>
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544"
                alt="Historia firmy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div {...fadeUp}>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Misja</p>
              <h2 className="font-display text-3xl font-semibold mb-6">Nasza misja</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dążymy do tworzenia produktów, które nie tylko są funkcjonalne, ale także zachwycają estetyką i trwałością — dzięki wyjątkowemu rzemiosłu i podejściu skoncentrowanemu na kliencie.
              </p>
              <ul className="space-y-4">
                {values.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Wizja</p>
              <h2 className="font-display text-3xl font-semibold mb-6">Nasza wizja</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chcemy być wiodącym dostawcą ogrodzeń metalowych i schodów drewnianych, znanym z wyjątkowego rzemiosła, innowacji i rozwiązań szytych na miarę.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Pozostajemy wierni naszym korzeniom: jakość ponad ilością, tradycja rzemieślnicza w połączeniu z nowoczesną techniką, a każdy projekt zasługuje na naszą pełną uwagę.
              </p>
              <Link to="/projekte">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium rounded-sm">
                  Zobacz nasze projekty <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Zespół</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Nasz zespół</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Za każdym udanym projektem stoją utalentowani rzemieślnicy i specjaliści pracujący z pasją.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-accent text-sm mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Passions */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
                alt="Pasje założyciela"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Poza pracą</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">
                Sztuka i wędkarstwo — dwie pasje
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Gdy Johann Werner nie tworzy ogrodzeń ani schodów, oddaje się swoim dwóm największym pasjom: sztuce i wędkarstwu.
                </p>
                <p>
                  Nad wodą odnajduje idealną równowagę — cierpliwość wymagana przy wędkowaniu inspiruje go również w pracy zawodowej.
                </p>
                <p>
                  Artystyczna dusza przejawia się w abstrakcyjnych rzeźbach metalowych, które tworzy w wolnym czasie. To połączenie rzemiosła i sztuki odzwierciedla się w estetyce wszystkich produktów.
                </p>
              </div>
              <div className="flex gap-6 mt-8">
                <div className="p-6 border border-border flex-1">
                  <h4 className="font-display font-semibold mb-2">Sztuka</h4>
                  <p className="text-muted-foreground text-sm">Abstrakcyjne rzeźby metalowe i artystyczne prace kowalskie</p>
                </div>
                <div className="p-6 border border-border flex-1">
                  <h4 className="font-display font-semibold mb-2">Wędkarstwo</h4>
                  <p className="text-muted-foreground text-sm">Pasjonackie wędkowanie na polskich akwenach</p>
                </div>
              </div>
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
              Poznaj nas osobiście
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Umów się na spotkanie lub odwiedź nasz warsztat.
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

export default UberUns;
