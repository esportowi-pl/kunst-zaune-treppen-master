
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Projekte = () => {
  const projectCategories = [
    { id: 'alle', name: 'Alle Projekte' },
    { id: 'zaune', name: 'Metallzäune' },
    { id: 'treppen', name: 'Holztreppen' },
    { id: 'spezial', name: 'Spezialanfertigungen' },
  ];

  const projects = [
    {
      id: 1,
      title: "Eleganter Metallzaun, Berlin",
      category: "zaune",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      year: "2024"
    },
    {
      id: 2,
      title: "Gewendelte Holztreppe, München",
      category: "treppen",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      year: "2023"
    },
    {
      id: 3,
      title: "Freitragende Treppe, Hamburg",
      category: "treppen",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      year: "2023"
    },
    {
      id: 4,
      title: "Moderner Metallzaun, Köln",
      category: "zaune",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      year: "2022"
    },
    {
      id: 5,
      title: "Rustikale Eichentreppe, Stuttgart",
      category: "treppen",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      year: "2022"
    },
    {
      id: 6,
      title: "Schmiedeeiserner Zaun, Frankfurt",
      category: "zaune",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      year: "2021"
    },
    {
      id: 7,
      title: "Marmor-Fensterbänke, Düsseldorf",
      category: "spezial",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      year: "2021"
    },
    {
      id: 8,
      title: "Industriezaun, Leipzig",
      category: "zaune",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      year: "2020"
    },
    {
      id: 9,
      title: "Spindeltreppe aus Nussbaum, Hannover",
      category: "treppen",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      year: "2019"
    },
  ];

  const [activeCategory, setActiveCategory] = React.useState('alle');
  const [visibleProjects, setVisibleProjects] = React.useState(projects);

  React.useEffect(() => {
    if (activeCategory === 'alle') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544" 
            alt="Projektgalerie" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-white pt-16">
          <div className="max-w-3xl">
            <h1 className="mb-4">Unsere Projekte</h1>
            <p className="text-lg md:text-xl mb-8">
              Entdecken Sie eine Auswahl unserer über 2500 erfolgreich abgeschlossenen Projekte der letzten 18 Jahre.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-md transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="image-hover warm-overlay rounded-lg overflow-hidden h-72 mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <span className="text-gray-500">{project.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination - Simplified for demo */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-100 rounded-md">1</button>
              <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">2</button>
              <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">3</button>
              <button className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
                <span className="sr-only">Next</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "18+", label: "Jahre Erfahrung" },
              { number: "2500+", label: "Abgeschlossene Projekte" },
              { number: "100+", label: "Städte beliefert" },
              { number: "95%", label: "Zufriedene Kunden" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <p className="text-4xl font-bold text-warmAccent mb-2">{stat.number}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Lassen Sie uns Ihr Projekt verwirklichen</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Egal ob Metallzaun, Holztreppe oder Spezialanfertigung – wir setzen Ihre Ideen um.
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

export default Projekte;
