
import { Award, Shield, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustBar = () => {
  const items = [
    { icon: <Award className="w-5 h-5" />, label: 'TÜV Rheinland' },
    { icon: <Shield className="w-5 h-5" />, label: 'ISO 9001:2015' },
    { icon: <Star className="w-5 h-5" />, label: 'CE Marking' },
    { icon: <Clock className="w-5 h-5" />, label: '10 lat gwarancji' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground">
              {item.icon}
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TrustBar;
