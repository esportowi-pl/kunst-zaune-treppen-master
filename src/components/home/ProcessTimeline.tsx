
import { Phone, Ruler, Factory, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Konsultacja',
    description: 'Bezpłatne doradztwo i niewiążąca wycena projektu',
    icon: <Phone className="w-5 h-5" />,
  },
  {
    num: '02',
    title: 'Pomiar i projekt',
    description: 'Precyzyjne pomiary na miejscu i szczegółowy projekt',
    icon: <Ruler className="w-5 h-5" />,
  },
  {
    num: '03',
    title: 'Produkcja',
    description: 'Ręczna produkcja zgodna z europejskimi standardami',
    icon: <Factory className="w-5 h-5" />,
  },
  {
    num: '04',
    title: 'Dostawa i montaż',
    description: 'Terminowa dostawa i fachowy montaż przez nasz zespół',
    icon: <Truck className="w-5 h-5" />,
  },
];

const ProcessTimeline = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
              <div className="text-accent mb-4 flex justify-center">{step.icon}</div>
              <div className="text-xs tracking-[0.2em] text-muted-foreground mb-3 font-sans">
                {step.num}
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Connecting line (desktop) */}
        <div className="hidden md:block relative mt-[-140px] mb-[80px] mx-auto max-w-[80%]">
          <div className="h-[1px] bg-border" />
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
