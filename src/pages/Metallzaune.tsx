
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const Metallzaune = () => {
  const products = [
    {
      title: "Klassische Metallzäune",
      description: "Zeitlose Eleganz mit traditionellem Design und höchster Qualität.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    },
    {
      title: "Moderne Metallzäune",
      description: "Klare Linien und minimalistische Designs für zeitgemäße Architektur.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    },
    {
      title: "Schmiedeeiserne Zäune",
      description: "Kunstvolle Schmiedearbeiten mit individuellen Verzierungen.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    },
    {
      title: "Industrielle Zäune",
      description: "Robuste und funktionale Zäune für gewerbliche und industrielle Anwendungen.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    },
  ];

  const features = [
    "Individuelle Beratung und Planung",
    "Maßanfertigung nach Ihren Wünschen",
    "Hochwertige Materialien und Verarbeitung",
    "Langlebige Pulverbeschichtung",
    "Rostbeständige Konstruktionen",
    "Professionelle Montage vor Ort"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544" 
            alt="Eleganter Metallzaun" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-white pt-16">
          <div className="max-w-3xl">
            <h1 className="mb-4">Hochwertige Metallzäune</h1>
            <p className="text-lg md:text-xl mb-8">
              Maßgefertigte Metallzäune, die Sicherheit und Ästhetik perfekt verbinden. Entdecken Sie unsere vielfältigen Designs und individuellen Lösungen.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Kunstvolle Metallzäune für höchste Ansprüche</h2>
              <p className="mb-6 text-lg">
                Unsere Metallzäune vereinen Funktionalität mit ästhetischem Design und bieten nicht nur Schutz und Privatsphäre, sondern sind auch ein wichtiges gestalterisches Element für Ihr Grundstück.
              </p>
              <p className="mb-8">
                Mit über 18 Jahren Erfahrung in der Metallverarbeitung fertigen wir Zäune, die durch ihre Qualität, Langlebigkeit und individuelle Gestaltung überzeugen.
              </p>
              <ul className="space-y-3">
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-warmAccent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                alt="Detailaufnahme eines Metallzauns" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Unsere Metallzaun-Modelle</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Entdecken Sie unsere vielfältigen Designs von klassisch bis modern. Jeder Zaun wird individuell nach Ihren Wünschen und Maßen gefertigt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="image-hover warm-overlay rounded-lg overflow-hidden h-72 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Unser Prozess</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Von der ersten Beratung bis zur finalen Installation – wir begleiten Sie durch jeden Schritt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Beratung & Planung",
                description: "Wir beraten Sie ausführlich zu Ihren Optionen und erstellen einen detaillierten Plan."
              },
              {
                step: "2",
                title: "Design & Angebot",
                description: "Nach Ihren Wünschen erstellen wir ein passendes Design und ein transparentes Angebot."
              },
              {
                step: "3",
                title: "Produktion",
                description: "In unserer Werkstatt fertigen wir Ihren Zaun mit höchster handwerklicher Präzision."
              },
              {
                step: "4",
                title: "Lieferung & Montage",
                description: "Wir liefern und montieren Ihren Zaun fachgerecht vor Ort."
              }
            ].map((item) => (
              <div key={item.step} className="text-center p-6 border border-gray-200 rounded-lg hover:border-warmAccent transition-colors">
                <div className="w-12 h-12 bg-warmAccent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                alt="Metallzaun Detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="section-title">Warum unsere Metallzäune?</h2>
              <p className="mb-8 text-lg">
                Unsere Metallzäune zeichnen sich durch herausragende Qualität, Langlebigkeit und individuelles Design aus. Wir verwenden nur hochwertige Materialien und setzen auf traditionelle Handwerkskunst kombiniert mit modernen Technologien.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-warmAccent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interessiert an einem Metallzaun?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
          </p>
          <Link to="/kontakt">
            <Button className="bg-warmAccent hover:bg-warmDark text-white px-8 py-4 text-lg rounded-md inline-flex items-center gap-2">
              Anfrage stellen <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Metallzaune;
