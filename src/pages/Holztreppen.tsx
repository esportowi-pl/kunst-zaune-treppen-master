
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const Holztreppen = () => {
  const products = [
    {
      title: "Geradläufige Treppen",
      description: "Elegante und platzsparende Treppen mit geradem Verlauf.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    },
    {
      title: "Gewendelte Treppen",
      description: "Kunstvolle Treppen mit gewendelten Stufen für einen besonderen Charakter.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    },
    {
      title: "Spindeltreppen",
      description: "Platzsparende Treppen mit zentraler Spindel und raffinierten Details.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    },
    {
      title: "Freitragende Treppen",
      description: "Moderne Designtreppen mit minimalistischer Konstruktion und schwebender Optik.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    },
  ];

  const woodTypes = [
    {
      name: "Eiche",
      description: "Robust und langlebig mit markanter Maserung, ideal für klassische und moderne Treppen.",
      color: "bg-amber-100"
    },
    {
      name: "Buche",
      description: "Gleichmäßige Struktur und Färbung, besonders belastbar und vielseitig einsetzbar.",
      color: "bg-orange-100"
    },
    {
      name: "Nussbaum",
      description: "Edles Erscheinungsbild mit dunkler, warmer Färbung für luxuriöse Treppen.",
      color: "bg-stone-200"
    },
    {
      name: "Ahorn",
      description: "Helles Holz mit feiner Maserung für einen frischen, modernen Look.",
      color: "bg-yellow-50"
    },
    {
      name: "Esche",
      description: "Helles bis mittelbraunes Holz mit deutlicher Maserung und hoher Elastizität.",
      color: "bg-amber-50"
    },
    {
      name: "Kiefer",
      description: "Preiswerte Option mit warmem Farbton und rustikalem Charakter.",
      color: "bg-yellow-100"
    },
  ];

  const features = [
    "Individuelle Planung und 3D-Visualisierung",
    "Hochwertiges Massivholz verschiedener Holzarten",
    "Präzise handwerkliche Verarbeitung",
    "Flexible Designmöglichkeiten",
    "Langlebige und nachhaltige Konstruktion",
    "Professionelle Montage vor Ort"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
            alt="Elegante Holztreppe" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-white pt-16">
          <div className="max-w-3xl">
            <h1 className="mb-4">Handgefertigte Holztreppen</h1>
            <p className="text-lg md:text-xl mb-8">
              Meisterhaftes Treppenhandwerk aus Polen – erleben Sie die perfekte Verbindung von Funktionalität und zeitloser Eleganz für Ihr Zuhause.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Maßgefertigte Holztreppen für Ihr Zuhause</h2>
              <p className="mb-6 text-lg">
                Unsere Holztreppen sind mehr als nur ein Verbindungselement zwischen Etagen – sie sind ein zentrales Gestaltungselement, das Ihrem Zuhause Charakter und Wärme verleiht.
              </p>
              <p className="mb-8">
                Mit 18 Jahren Erfahrung in der Tischlerei fertigen wir Treppen, die durch höchste Qualität, handwerkliche Präzision und individuelle Gestaltung überzeugen.
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
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
                alt="Detailaufnahme einer Holztreppe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Unsere Holztreppen-Modelle</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Entdecken Sie unsere vielfältigen Treppenformen, die wir nach Ihren Wünschen und Raumverhältnissen maßanfertigen.
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

      {/* Wood Types */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Unsere Holzarten</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Wir bieten verschiedene Holzarten für Ihre Treppe, jede mit einzigartigen Eigenschaften und Ästhetik.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {woodTypes.map((wood, index) => (
              <div key={index} className={`p-6 rounded-lg ${wood.color}`}>
                <h3 className="text-xl font-bold mb-2">{wood.name}</h3>
                <p className="text-gray-700">{wood.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              Wir bieten auch weitere Holzarten und Kombinationsmöglichkeiten an. Sprechen Sie uns gerne an!
            </p>
            <Link to="/kontakt">
              <Button className="btn-primary inline-flex items-center gap-2">
                Beratung anfragen <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Unser Prozess</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Von der ersten Idee bis zur fertigen Treppe – wir begleiten Sie durch jeden Schritt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Beratung & Planung",
                description: "Wir besprechen Ihre Wünsche, messen vor Ort und beraten Sie zu den besten Optionen."
              },
              {
                step: "2",
                title: "Design & Visualisierung",
                description: "Wir erstellen detaillierte Pläne und 3D-Visualisierungen Ihrer zukünftigen Treppe."
              },
              {
                step: "3",
                title: "Fertigung",
                description: "In unserer Tischlerei fertigen wir Ihre Treppe mit höchster handwerklicher Präzision."
              },
              {
                step: "4",
                title: "Lieferung & Montage",
                description: "Wir liefern und montieren Ihre Treppe fachgerecht in Ihrem Zuhause."
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
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544" 
                alt="Holztreppe Detail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="section-title">Warum unsere Holztreppen?</h2>
              <p className="mb-8 text-lg">
                Unsere Holztreppen zeichnen sich durch herausragende Qualität, langlebige Konstruktion und individuelles Design aus. Wir setzen auf traditionelles Handwerk kombiniert mit moderner Technik.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ihre Traumtreppe wartet auf Sie</h2>
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

export default Holztreppen;
