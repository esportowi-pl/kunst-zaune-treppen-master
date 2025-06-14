
import React, { useState, useEffect } from 'react';
import { Users, MapPin, Award, Calendar } from 'lucide-react';

const ProjectCounters = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    cities: 0
  });

  const finalCounts = {
    projects: 2547,
    clients: 2389,
    years: 18,
    cities: 156
  };

  useEffect(() => {
    const animationDuration = 3000; // 3 seconds
    const steps = 60;
    const stepDuration = animationDuration / steps;

    const timers = Object.keys(finalCounts).map((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts];
      const increment = finalValue / steps;
      
      let currentValue = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        currentValue = Math.min(Math.round(increment * step), finalValue);
        
        setCounts(prev => ({
          ...prev,
          [key]: currentValue
        }));

        if (step >= steps) {
          clearInterval(timers[timers.indexOf(timer)]);
        }
      }, stepDuration);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  const counters = [
    {
      value: counts.projects,
      label: "Zakończonych Projektów",
      suffix: "+",
      icon: <Award className="w-8 h-8 text-orange-600" />,
      color: "text-orange-600"
    },
    {
      value: counts.clients,
      label: "Zadowolonych Klientów",
      suffix: "+",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      color: "text-blue-600"
    },
    {
      value: counts.years,
      label: "Lat Doświadczenia",
      suffix: "",
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      color: "text-green-600"
    },
    {
      value: counts.cities,
      label: "Miast w Polsce",
      suffix: "+",
      icon: <MapPin className="w-8 h-8 text-purple-600" />,
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">📊 Nasza Pozycja na Rynku</h2>
          <p className="text-xl text-gray-600">
            Liczby, które mówią wszystko o naszej wiarygodności
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                {counter.icon}
              </div>
              <div className={`text-4xl font-bold mb-2 ${counter.color}`}>
                {counter.value.toLocaleString()}{counter.suffix}
              </div>
              <p className="text-gray-600 text-sm font-medium">{counter.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            🥇 Nr 1 w Polsce w kategorii zaunów premium
          </h3>
          <p className="text-lg">
            Jedyna firma z 18-letnim doświadczeniem i 97% wskaźnikiem satysfakcji klientów
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectCounters;
