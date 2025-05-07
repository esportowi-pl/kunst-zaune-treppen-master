
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const UberUns = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
            alt="Über Uns" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-white pt-16">
          <div className="max-w-3xl">
            <h1 className="mb-4">Über Uns</h1>
            <p className="text-lg md:text-xl mb-8">
              Lernen Sie unser Unternehmen, unsere Werte und unsere Geschichte kennen.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Unsere Geschichte</h2>
              <p className="mb-4 text-lg">
                JW Zaune & Treppen wurde 2006 von Johann Werner gegründet, mit einer klaren Vision: die handwerkliche Tradition mit moderner Technik zu verbinden, um hochwertige Metallzäune und Holztreppen zu schaffen.
              </p>
              <p className="mb-4">
                Was als kleiner Handwerksbetrieb begann, hat sich in 18 Jahren zu einem angesehenen Unternehmen mit über 25 Mitarbeitern entwickelt, das für seine außergewöhnliche Qualität und Zuverlässigkeit bekannt ist.
              </p>
              <p className="mb-4">
                Mit über 2500 erfolgreich abgeschlossenen Projekten in ganz Deutschland haben wir uns einen Namen gemacht als kompetenter Partner für anspruchsvolle Kunden, die Wert auf Präzision, Detailgenauigkeit und langlebige Produkte legen.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544" 
                alt="Unternehmensgeschichte" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-title">Unsere Mission</h2>
              <p className="text-lg">
                Wir streben danach, durch herausragende Handwerkskunst und kundenorientierte Lösungen Produkte zu schaffen, die nicht nur funktional sind, sondern auch durch ihre Ästhetik und Langlebigkeit überzeugen.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Höchste Qualitätsstandards in jedem Projekt",
                  "Maßgeschneiderte Lösungen für individuelle Anforderungen",
                  "Zuverlässiger Service von der Beratung bis zur Montage",
                  "Nachhaltige Produktion mit Respekt für Umwelt und Ressourcen"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-warmAccent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-title">Unsere Vision</h2>
              <p className="text-lg">
                Wir wollen der führende Anbieter für hochwertige Metallzäune und Holztreppen in Deutschland werden, bekannt für außergewöhnliche Handwerkskunst, Innovation und kundenorientierte Lösungen.
              </p>
              <p className="mt-4">
                Dabei bleiben wir unseren Wurzeln und Werten treu: Qualität steht über Quantität, handwerkliche Tradition verbindet sich mit modernster Technik, und jedes Projekt verdient unsere volle Aufmerksamkeit und Hingabe.
              </p>
              <div className="mt-8">
                <Link to="/projekte">
                  <Button className="btn-primary flex items-center gap-2">
                    Unsere Projekte ansehen <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Unser Team</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Hinter jedem erfolgreichen Projekt stehen talentierte Handwerker und Fachleute, die mit Leidenschaft und Engagement arbeiten.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Johann Werner",
                position: "Gründer & Geschäftsführer",
                bio: "Mit über 30 Jahren Erfahrung in der Metallverarbeitung und Tischlerei gründete Johann Werner das Unternehmen und leitet es bis heute mit Leidenschaft und Vision.",
                image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
              },
              {
                name: "Maria Schmidt",
                position: "Designerin",
                bio: "Maria ist verantwortlich für die Gestaltung und Visualisierung unserer Projekte. Mit ihrem Auge für Detail und Ästhetik bringt sie die Wünsche unserer Kunden zum Leben.",
                image: "https://images.unsplash.com/photo-1486718448742-163732cd1544"
              },
              {
                name: "Thomas Weber",
                position: "Leiter Produktion",
                bio: "Thomas überwacht die Produktion und stellt sicher, dass jedes Projekt den höchsten Qualitätsstandards entspricht und termingerecht fertiggestellt wird.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-warmAccent mb-3">{member.position}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies & Passions */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Über den Handwerker hinaus</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Lernen Sie Johann Werner auch abseits seiner beruflichen Leidenschaft kennen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                alt="Kunst und Angeln - die Leidenschaften des Geschäftsführers" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Kunst & Angeln - Die zwei Leidenschaften</h3>
              <p className="mb-4 text-lg">
                Wenn Johann Werner nicht gerade kunstvolle Metallzäune oder elegante Holztreppen erschafft, widmet er sich seinen beiden größten Leidenschaften: der Kunst und dem Angeln.
              </p>
              <p className="mb-4">
                Als begeisterter Hobbyangeler findet er am Wasser den perfekten Ausgleich zum geschäftigen Alltag. Die Ruhe der Natur und die Geduld, die das Angeln erfordert, inspirieren ihn auch in seiner beruflichen Tätigkeit.
              </p>
              <p className="mb-6">
                Seine künstlerische Ader zeigt sich nicht nur in seinem Beruf, sondern auch in seinen abstrakten Metallskulpturen, die er in seiner Freizeit erschafft. Diese Verbindung von Handwerk und Kunst spiegelt sich in der einzigartigen Ästhetik wider, die alle unsere Produkte auszeichnet.
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Kunst</h4>
                  <p className="text-gray-700">Abstrakte Metallskulpturen und künstlerische Schmiedearbeiten</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold mb-2">Angeln</h4>
                  <p className="text-gray-700">Leidenschaftliches Friedfischangeln an deutschen Gewässern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Lernen Sie uns persönlich kennen</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Vereinbaren Sie einen Termin für ein persönliches Gespräch oder eine Besichtigung unserer Werkstatt.
          </p>
          <Link to="/kontakt">
            <Button className="bg-warmAccent hover:bg-warmDark text-white px-8 py-4 text-lg rounded-md inline-flex items-center gap-2">
              Kontakt aufnehmen <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default UberUns;
