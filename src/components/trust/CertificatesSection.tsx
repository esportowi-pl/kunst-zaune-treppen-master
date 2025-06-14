
import React from 'react';
import { Award, Shield, Star, Clock } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "TÜV RHEINLAND",
      subtitle: "Certyfikat Jakości",
      description: "Wszystkie nasze produkty spełniają najwyższe standardy europejskie",
      icon: <Award className="w-12 h-12 text-blue-600" />,
      badge: "Certyfikat Nr: TÜV-2023-DE-7891"
    },
    {
      title: "ISO 9001:2015",
      subtitle: "System Zarządzania Jakością",
      description: "Gwarancja procesów zgodnych z międzynarodowymi normami",
      icon: <Shield className="w-12 h-12 text-green-600" />,
      badge: "Ważny do: 12.2025"
    },
    {
      title: "CE MARKING",
      subtitle: "Oznaczenie Zgodności",
      description: "Produkty zgodne z dyrektywami Unii Europejskiej",
      icon: <Star className="w-12 h-12 text-yellow-600" />,
      badge: "Numer: CE-2024-POL-123"
    },
    {
      title: "10 LAT GWARANCJI",
      subtitle: "Gwarancja Producenta",
      description: "Pełne ubezpieczenie i serwis przez 10 lat",
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      badge: "100% pokrycie"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🏆 Certyfikaty i Gwarancje Jakości</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jesteśmy jedyną firmą w branży z pełnymi certyfikatami europejskimi. 
            <strong> Twoja inwestycja jest w 100% bezpieczna.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="flex justify-center mb-6">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-orange-600 font-semibold mb-3">{cert.subtitle}</p>
              <p className="text-gray-600 mb-4 text-sm">{cert.description}</p>
              <div className="bg-gray-100 rounded-lg px-3 py-2 text-xs text-gray-700">
                {cert.badge}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-green-700">
              ✅ 18 lat doświadczenia • ✅ 2500+ projektów • ✅ 0 reklamacji gwarancyjnych
            </h3>
            <p className="text-lg text-gray-600">
              <strong>Dlaczego klienci wybierają nas ponownie?</strong><br/>
              97% naszych klientów poleca nas znajomym. Średnia ocena: 4.9/5 ⭐
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
