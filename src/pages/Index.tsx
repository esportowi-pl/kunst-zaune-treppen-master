
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

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
        <div className="max-w-3xl">
          <h1 className="mb-4">Qualität und Handwerkskunst seit 2006</h1>
          <p className="text-lg md:text-xl mb-8">
            Hochwertige Metallzäune und Holztreppen aus Polen mit 18 Jahren Erfahrung und über 2500 erfolgreich abgeschlossenen Projekten.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/kontakt">
              <Button className="bg-warmAccent hover:bg-warmDark text-white px-6 py-6 text-lg flex items-center gap-2">
                Jetzt anfragen <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/projekte">
              <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-6 py-6 text-lg">
                Projekte ansehen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Metallzäune",
      description: "Hochwertige, maßgefertigte Metallzäune mit individuellen Designs und höchster Qualität.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      link: "/metallzaune"
    },
    {
      title: "Holztreppen",
      description: "Elegante Holztreppen, die Funktionalität mit ästhetischem Design verbinden.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      link: "/holztreppen"
    },
    {
      title: "Spezialanfertigungen",
      description: "Von Marmorfensterbänken bis zu komplexen Projekten – wir setzen Ihre Ideen um.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      link: "/projekte"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Unsere Spezialgebiete</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Mit Präzision und Leidenschaft schaffen wir bleibende Werte, die Ihr Zuhause verschönern.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index} className="group">
              <div className="image-hover warm-overlay rounded-lg overflow-hidden h-64 mb-4">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-warmAccent transition-colors">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">18 Jahre Erfahrung in der Metallverarbeitung und Tischlerei</h2>
            <p className="mb-6 text-lg">
              Seit 2006 haben wir uns der erstklassigen Handwerkskunst verschrieben und liefern hochwertige Metallzäune und Holztreppen an zufriedene Kunden in Deutschland.
            </p>
            <p className="mb-8">
              Mit über 2500 erfolgreich abgeschlossenen Projekten sind wir stolz darauf, ein zuverlässiger Partner für anspruchsvolle Kunden zu sein, die Wert auf Qualität und Detailgenauigkeit legen.
            </p>
            <ul className="space-y-3">
              {[
                "Maßgefertigte Lösungen nach Ihren Wünschen",
                "Fachberatung von der Planung bis zur Montage",
                "Hochwertiges Material und präzise Verarbeitung",
                "Pünktliche Lieferung und professionelle Montage",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-0.5 text-warmAccent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/uber-uns">
                <Button className="btn-primary flex items-center gap-2">
                  Mehr über uns <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
                alt="Handwerker bei der Arbeit" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-warmAccent text-white p-6 rounded-lg shadow-lg md:max-w-xs">
              <p className="text-xl font-bold">Über 2500</p>
              <p>erfolgreich abgeschlossene Projekte</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "Die Qualität der Holztreppe übertrifft alle unsere Erwartungen. Die Handwerkskunst ist erstklassig und der gesamte Prozess von der Beratung bis zur Installation verlief reibungslos.",
      name: "Familie Schmidt",
      location: "München"
    },
    {
      text: "Wir haben einen maßgefertigten Metallzaun für unser Grundstück bestellt und sind begeistert vom Ergebnis. Die Detailgenauigkeit und Verarbeitung sind hervorragend.",
      name: "Thomas Weber",
      location: "Berlin"
    },
    {
      text: "Die Zusammenarbeit war von Anfang bis Ende professionell. Termintreue, exzellente Handwerkskunst und ein fantastisches Endergebnis – wir empfehlen JW Zaune & Treppen gerne weiter.",
      name: "Familie Müller",
      location: "Hamburg"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Was unsere Kunden sagen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <svg className="w-10 h-10 text-warmAccent mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 text-gray-700">{testimonial.text}</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Cta = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Ihr Projekt zu starten?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
        </p>
        <Link to="/kontakt">
          <Button className="bg-warmAccent hover:bg-warmDark text-white px-8 py-4 text-lg rounded-md inline-flex items-center gap-2">
            Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <Hero />
      <Features />
      <AboutSection />
      <Testimonials />
      <Cta />
    </>
  );
};

export default Index;
