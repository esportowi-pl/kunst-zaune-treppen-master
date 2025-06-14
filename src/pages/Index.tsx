
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Star, Award, Shield, Clock, Phone, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
          alt="Elegante Hausfassade mit Metallzaun" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-lg">4.9/5 • Über 500 zufriedene Kunden</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Qualität und Handwerkskunst 
            <span className="text-orange-400"> seit 2006</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            🏆 <strong>Deutschlands führender Anbieter</strong> für hochwertige Metallzäune und Holztreppen aus Polen. 
            18 Jahre Erfahrung • 2500+ erfolgreiche Projekte • 100% Zufriedenheitsgarantie
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/kontakt">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-xl flex items-center gap-2">
                🎯 KOSTENLOSE BERATUNG <ArrowRight className="w-6 h-6" />
              </Button>
            </Link>
            <Link to="/projekte">
              <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-xl">
                2500+ Projekte ansehen
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>10 Jahre Garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>TÜV-zertifiziert</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>Lieferung in 14 Tagen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-12 bg-green-50 border-y-4 border-green-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            ✅ Warum über 2500 Kunden uns vertrauen
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">18+</div>
            <p className="text-sm">Jahre Erfahrung</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">2500+</div>
            <p className="text-sm">Zufriedene Kunden</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">10</div>
            <p className="text-sm">Jahre Garantie</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <p className="text-sm">Deutsche Qualität</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "🔥 Metallzäune Premium",
      description: "Hochwertige, maßgefertigte Metallzäune mit 10 Jahren Garantie. TÜV-zertifizierte Qualität direkt vom Hersteller.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      link: "/metallzaune",
      price: "Ab 89€/lfd. Meter"
    },
    {
      title: "🌟 Holztreppen Exklusiv",
      description: "Elegante Holztreppen aus bestem polnischen Holz. Jede Treppe ein Unikat, perfekt auf Ihr Zuhause abgestimmt.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      link: "/holztreppen",
      price: "Ab 1.299€"
    },
    {
      title: "⚡ Spezialanfertigungen",
      description: "Von Geländern bis Wintergärten - wir verwirklichen Ihre individuellen Wünsche mit höchster Präzision.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      link: "/projekte",
      price: "Auf Anfrage"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🏆 Unsere Premium-Produkte</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Mit Präzision und Leidenschaft schaffen wir bleibende Werte für über 2500 zufriedene Kunden in ganz Deutschland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {feature.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{feature.title}</h3>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <Link to={feature.link}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Mehr erfahren <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      step: "1",
      title: "Kostenlose Beratung",
      description: "Wir beraten Sie ausführlich und erstellen ein unverbindliches Angebot",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Maßgenaue Planung",
      description: "Unsere Experten vermessen vor Ort und planen Ihr Projekt bis ins Detail",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Produktion in Polen",
      description: "Fertigung nach deutschen Qualitätsstandards in unserer modernen Manufaktur",
      icon: <Award className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Lieferung & Montage",
      description: "Pünktliche Lieferung und fachgerechte Montage durch unser Expertenteam",
      icon: <MapPin className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🚀 So einfach geht's zu Ihrem Traumprodukt</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Von der ersten Beratung bis zur finalen Montage - wir begleiten Sie durch den gesamten Prozess
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {step.step}
              </div>
              <div className="text-orange-500 mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Absolut perfekt! Die Qualität übertrifft alle Erwartungen. Unser Metallzaun sieht auch nach 3 Jahren noch aus wie neu. 100% Weiterempfehlung!",
      name: "Familie Schmidt",
      location: "München",
      rating: 5,
      project: "Metallzaun Premium, 45 lfd. Meter"
    },
    {
      text: "Von der Beratung bis zur Montage alles top! Die Holztreppe ist ein absoluter Hingucker und wurde millimetergenau eingepasst.",
      name: "Thomas Weber", 
      location: "Berlin",
      rating: 5,
      project: "Gewendelte Eichentreppe"
    },
    {
      text: "Termintreu, professionell und faire Preise. Nach 18 Monaten sind wir immer noch begeistert von unserem Zaun. Danke an das gesamte Team!",
      name: "Familie Müller",
      location: "Hamburg", 
      rating: 5,
      project: "Schmiedeeiserner Zaun mit Tor"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">⭐ Das sagen unsere 2500+ Kunden</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold">4.9/5 Sterne</span>
            <span className="text-gray-600">(über 500 Bewertungen)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 p-8 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.location}</p>
                <p className="text-sm text-green-600 font-medium mt-2">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          🎯 Bereit für Ihr Traumprojekt?
        </h2>
        <p className="text-2xl mb-8 max-w-3xl mx-auto">
          Über 2500 zufriedene Kunden vertrauen bereits auf unsere Qualität. 
          <strong> Werden Sie der nächste!</strong>
        </p>
        
        <div className="bg-white/10 backdrop-blur rounded-xl p-8 max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold mb-4">🚀 LIMITIERTES ANGEBOT</h3>
          <p className="text-lg mb-4">
            <strong>Nur noch bis Ende des Monats:</strong><br/>
            Kostenlose Beratung + Anfahrt + 5% Rabatt auf alle Projekte über 2.000€
          </p>
          <div className="text-sm opacity-90">
            *Gültig bei Beauftragung bis 31.12.2024
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/kontakt">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-10 py-6 text-xl font-bold">
              📞 JETZT ANRUFEN: 0800 123 456 789
            </Button>
          </Link>
          <Link to="/kontakt">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-xl">
              💬 Online-Beratung starten
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-sm opacity-90">
          ✅ Kostenlose Beratung • ✅ Unverbindliches Angebot • ✅ 24h Rückruf-Garantie
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <Features />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default Index;
