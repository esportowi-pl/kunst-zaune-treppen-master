
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

const BeforeAfterGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Willa w Warszawie - Ogrodzenie Premium",
      location: "Warszawa, Wilanów",
      date: "Październik 2023",
      beforeImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      afterImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      description: "Transformacja starego ogrodzenia w nowoczesny system bezpieczeństwa"
    },
    {
      title: "Dom Jednorodzinny - Schody Dębowe",
      location: "Kraków, Nowa Huta",
      date: "Wrzesień 2023",
      beforeImage: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
      afterImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      description: "Eleganckie schody dębowe z ręcznym wykończeniem"
    },
    {
      title: "Rezydencja - Kombinacja Zaun + Schody",
      location: "Gdańsk, Sopot",
      date: "Sierpień 2023",
      beforeImage: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      afterImage: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      description: "Kompleksowa modernizacja wejścia głównego"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentSlide];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">✨ Transformacje PRZED i PO</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zobacz, jak zmieniamy domy naszych klientów. Każdy projekt to dowód na to, 
            że inwestycja w jakość się opłaca.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main content */}
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Before image */}
                <div className="relative">
                  <img 
                    src={currentProject.beforeImage} 
                    alt="Przed realizacją" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                    PRZED
                  </div>
                </div>
                
                {/* After image */}
                <div className="relative">
                  <img 
                    src={currentProject.afterImage} 
                    alt="Po realizacji" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                    PO
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{currentProject.title}</h3>
                <p className="text-gray-300 mb-6">{currentProject.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span>{currentProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    <span>{currentProject.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🎯 Chcesz podobną transformację?</h3>
            <p className="text-lg mb-6">
              Każdy z tych projektów zaczął się od bezpłatnej konsultacji. 
              <strong> Twój dom też może wyglądać tak spektakularnie!</strong>
            </p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              📞 Umów Bezpłatną Konsultację
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
