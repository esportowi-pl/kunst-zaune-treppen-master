import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Star, Award, Shield, Clock, Phone, Users, MapPin } from 'lucide-react';
import CertificatesSection from '@/components/trust/CertificatesSection';
import ProjectCounters from '@/components/trust/ProjectCounters';
import BeforeAfterGallery from '@/components/trust/BeforeAfterGallery';
import ProjectMap from '@/components/trust/ProjectMap';

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
            <span className="text-lg">4.9/5 • Ponad 2547 zrealizowanych projektów</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Najwyższa jakość i rzemiosło 
            <span className="text-orange-400"> od 2006 roku</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            🏆 <strong>Lider w Polsce</strong> w produkcji wysokiej jakości ogrodzeń metalowych i schodów drewnianych z Polski. 
            18 lat doświadczenia • 2547+ udanych projektów • 100% gwarancja satysfakcji
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/kontakt">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-xl flex items-center gap-2">
                🎯 BEZPŁATNA KONSULTACJA <ArrowRight className="w-6 h-6" />
              </Button>
            </Link>
            <Link to="/projekte">
              <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-xl">
                2547+ Projektów do obejrzenia
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>10 lat gwarancji</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Certyfikat TÜV</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>Dostawa w 14 dni</span>
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
            ✅ Dlaczego ponad 2547 klientów nam ufa
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">18+</div>
            <p className="text-sm">Lat doświadczenia</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">2547+</div>
            <p className="text-sm">Zadowolonych klientów</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">10</div>
            <p className="text-sm">Lat gwarancji</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <p className="text-sm">Niemiecka jakość</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "🔥 Ogrodzenia Metalowe Premium",
      description: "Wysokiej jakości, wykonane na zamówienie ogrodzenia metalowe z 10-letnią gwarancją. Jakość certyfikowana przez TÜV bezpośrednio od producenta.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      link: "/metallzaune",
      price: "Od 89€/mb"
    },
    {
      title: "🌟 Schody Drewniane Ekskluzywne",
      description: "Eleganckie schody drewniane z najlepszego polskiego drewna. Każde schody to unikat, idealnie dopasowany do Twojego domu.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      link: "/holztreppen",
      price: "Od 1.299€"
    },
    {
      title: "⚡ Projekty na Zamówienie",
      description: "Od balustrad po ogrody zimowe - realizujemy Twoje indywidualne życzenia z najwyższą precyzją.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      link: "/projekte",
      price: "Na zapytanie"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🏆 Nasze Produkty Premium</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Z precyzją i pasją tworzymy trwałe wartości dla ponad 2547 zadowolonych klientów w całych Niemczech.
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
                    Dowiedz się więcej <ArrowRight className="w-4 h-4 ml-2" />
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
      title: "Bezpłatna Konsultacja",
      description: "Doradzamy szczegółowo i tworzymy niewiążącą ofertę",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Precyzyjne Planowanie",
      description: "Nasi eksperci dokonują pomiarów na miejscu i planują Twój projekt w najdrobniejszych szczegółach",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Produkcja w Polsce",
      description: "Produkcja zgodnie z niemieckimi standardami jakości w naszej nowoczesnej manufakturze",
      icon: <Award className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Dostawa i Montaż",
      description: "Punktualna dostawa i fachowy montaż przez nasz zespół ekspertów",
      icon: <MapPin className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🚀 Tak łatwo zrealizujesz swój wymarzony projekt</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Od pierwszej konsultacji do końcowego montażu - prowadzimy Cię przez cały proces
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
      text: "Absolutnie doskonałe! Jakość przewyższa wszystkie oczekiwania. Nasze ogrodzenie metalowe po 3 latach wciąż wygląda jak nowe. 100% rekomendacji!",
      name: "Rodzina Schmidt",
      location: "Monachium",
      rating: 5,
      project: "Ogrodzenie Metalowe Premium, 45 mb"
    },
    {
      title: "Od konsultacji do montażu wszystko top! Schody drewniane to absolutny hit i zostały dopasowane z precyzją do milimetra.",
      name: "Thomas Weber", 
      location: "Berlin",
      rating: 5,
      project: "Kręcone schody dębowe"
    },
    {
      text: "Terminowo, profesjonalnie i w uczciwych cenach. Po 18 miesiącach wciąż jesteśmy zachwyceni naszym ogrodzeniem. Dziękujemy całemu zespołowi!",
      name: "Rodzina Müller",
      location: "Hamburg", 
      rating: 5,
      project: "Kute ogrodzenie z bramą"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">⭐ To mówią nasi 2547+ klientów</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold">4,9/5 gwiazdek</span>
            <span className="text-gray-600">(ponad 500 ocen)</span>
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
          🎯 Gotowy na swój wymarzony projekt?
        </h2>
        <p className="text-2xl mb-8 max-w-3xl mx-auto">
          Ponad 2547 zadowolonych klientów już ufa naszej jakości. 
          <strong> Zostań następnym!</strong>
        </p>
        
        <div className="bg-white/10 backdrop-blur rounded-xl p-8 max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold mb-4">🚀 OFERTA LIMITOWANA</h3>
          <p className="text-lg mb-4">
            <strong>Tylko do końca miesiąca:</strong><br/>
            Bezpłatna konsultacja + dojazd + 5% rabatu na wszystkie projekty powyżej 2.000€
          </p>
          <div className="text-sm opacity-90">
            *Ważne przy zleceniu do 31.12.2024
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/kontakt">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 px-10 py-6 text-xl font-bold">
              📞 ZADZWOŃ TERAZ: 0800 123 456 789
            </Button>
          </Link>
          <Link to="/kontakt">
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-6 text-xl">
              💬 Rozpocznij konsultację online
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-sm opacity-90">
          ✅ Bezpłatna konsultacja • ✅ Niewiążąca oferta • ✅ Gwarancja oddzwonienia w 24h
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
      <CertificatesSection />
      <ProjectCounters />
      <Features />
      <ProcessSection />
      <BeforeAfterGallery />
      <ProjectMap />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default Index;
