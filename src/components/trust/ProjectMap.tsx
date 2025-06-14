
import React, { useState } from 'react';
import { MapPin, Users, Award } from 'lucide-react';

const ProjectMap = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    {
      id: 'mazowieckie',
      name: 'Mazowieckie',
      projects: 847,
      cities: ['Warszawa', 'Radom', 'Płock', 'Siedlce'],
      highlight: true
    },
    {
      id: 'malopolskie',
      name: 'Małopolskie',
      projects: 423,
      cities: ['Kraków', 'Tarnów', 'Nowy Sącz', 'Oświęcim']
    },
    {
      id: 'slaskie',
      name: 'Śląskie',
      projects: 356,
      cities: ['Katowice', 'Częstochowa', 'Sosnowiec', 'Gliwice']
    },
    {
      id: 'pomorskie',
      name: 'Pomorskie',
      projects: 289,
      cities: ['Gdańsk', 'Gdynia', 'Sopot', 'Słupsk']
    },
    {
      id: 'wielkopolskie',
      name: 'Wielkopolskie',
      projects: 267,
      cities: ['Poznań', 'Kalisz', 'Konin', 'Piła']
    },
    {
      id: 'dolnoslaskie',
      name: 'Dolnośląskie',
      projects: 234,
      cities: ['Wrocław', 'Wałbrzych', 'Legnica', 'Jelenia Góra']
    },
    {
      id: 'lodzkie',
      name: 'Łódzkie',
      projects: 131,
      cities: ['Łódź', 'Piotrków Trybunalski', 'Pabianice']
    }
  ];

  const totalProjects = regions.reduce((sum, region) => sum + region.projects, 0);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🗺️ Mapa Naszych Realizacji</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obecność w całej Polsce. Zobacz, gdzie już zaufano naszej jakości i 
            <strong> dołącz do grona zadowolonych klientów w Twojej okolicy.</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map visualization */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Zasięg Działania</h3>
            
            {/* Simulated map with regions */}
            <div className="relative bg-gray-100 rounded-lg p-8 h-96 flex flex-col justify-center">
              <div className="text-center mb-6">
                <div className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-bold">
                  🇵🇱 Cała Polska
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {regions.slice(0, 6).map((region) => (
                  <div 
                    key={region.id}
                    className={`bg-white rounded-lg p-4 text-center cursor-pointer transition-all hover:shadow-md ${
                      region.highlight ? 'ring-2 ring-orange-500' : ''
                    }`}
                    onClick={() => setSelectedRegion(region.id)}
                  >
                    <div className="text-2xl font-bold text-orange-600">{region.projects}</div>
                    <div className="text-sm text-gray-600">{region.name}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">Najwyższa jakość w każdym regionie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics and details */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">📈 Statystyki Krajowe</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-orange-600" />
                    <span className="font-medium">Łączna liczba projektów</span>
                  </div>
                  <span className="text-2xl font-bold text-orange-600">{totalProjects.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    <span className="font-medium">Miasta z realizacjami</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">156+</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-green-600" />
                    <span className="font-medium">Średnia ocena</span>
                  </div>
                  <span className="text-2xl font-bold text-green-600">4.9/5 ⭐</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">🏆 Nasze Najlepsze Regiony</h3>
              <div className="space-y-3">
                {regions.slice(0, 4).map((region, index) => (
                  <div key={region.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-400' : 'bg-blue-500'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-medium">{region.name}</span>
                    </div>
                    <span className="text-orange-600 font-bold">{region.projects} projektów</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white p-8 text-center">
              <h3 className="text-xl font-bold mb-4">🚀 Twój Region?</h3>
              <p className="mb-4">
                Niezależnie od lokalizacji, zapewniamy tę samą wysoką jakość. 
                Bezpłatny dojazd w promieniu 50km!
              </p>
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Sprawdź Dostępność w Twojej Okolicy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMap;
