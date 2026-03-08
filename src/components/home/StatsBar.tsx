
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const stats = [
  { value: 18, suffix: '+', label: 'Lat doświadczenia' },
  { value: 2500, suffix: '+', label: 'Zrealizowanych projektów' },
  { value: 10, suffix: '', label: 'Lat gwarancji' },
  { value: 150, suffix: '+', label: 'Miast w Polsce' },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 40;
    const stepDuration = duration / steps;
    const increment = target / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round(increment * step), target));
      if (step >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <motion.div
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      <span className="text-4xl md:text-5xl font-display font-semibold text-foreground">
        {count.toLocaleString()}{suffix}
      </span>
    </motion.div>
  );
}

const StatsBar = () => {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2 font-sans">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
