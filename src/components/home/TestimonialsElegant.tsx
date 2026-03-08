
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: 'Jakość wykonania przewyższa wszystkie oczekiwania. Nasze ogrodzenie po trzech latach wciąż wygląda jak nowe. Profesjonalizm na każdym etapie współpracy.',
    name: 'Rodzina Schmidt',
    location: 'Monachium',
    project: 'Ogrodzenie metalowe premium',
  },
  {
    text: 'Od pierwszej konsultacji do końcowego montażu — perfekcja. Schody drewniane zostały dopasowane z precyzją do milimetra. Prawdziwe rzemiosło.',
    name: 'Thomas Weber',
    location: 'Berlin',
    project: 'Schody dębowe',
  },
  {
    text: 'Terminowość, profesjonalizm i uczciwe ceny. Po osiemnastu miesiącach wciąż jesteśmy zachwyceni jakością wykonania. Polecamy bez wahania.',
    name: 'Rodzina Müller',
    location: 'Hamburg',
    project: 'Ogrodzenie kute z bramą',
  },
];

const TestimonialsElegant = () => {
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
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">
            Referencje
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Głos naszych klientów
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background p-8 rounded-sm"
            >
              <div className="text-4xl font-display text-accent/40 leading-none mb-4">"</div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {t.text}
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t.location} · {t.project}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsElegant;
