
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Kontakt = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Anfrage gesendet",
      description: "Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.",
    });
    // In a real application, you would send the form data to a server here
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
            alt="Kontakt" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-white pt-16">
          <div className="max-w-3xl">
            <h1 className="mb-4">Kontaktieren Sie uns</h1>
            <p className="text-lg md:text-xl mb-8">
              Wir freuen uns auf Ihre Anfrage und beraten Sie gerne zu Ihrem individuellen Projekt.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="section-title">Kontaktinformationen</h2>
              <p className="mb-8 text-lg">
                Sie haben Fragen oder wünschen ein unverbindliches Angebot? Kontaktieren Sie uns – wir sind für Sie da.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-warmAccent mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Adresse</h3>
                    <p>
                      JW Zaune & Treppen<br />
                      Musterstraße 123<br />
                      12345 Musterstadt<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-warmAccent mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telefon</h3>
                    <p>
                      <a href="tel:+491234567890" className="hover:text-warmAccent">
                        +49 (0) 123 456 7890
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-warmAccent mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">E-Mail</h3>
                    <p>
                      <a href="mailto:info@jwzaune.de" className="hover:text-warmAccent">
                        info@jwzaune.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-warmAccent mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Öffnungszeiten</h3>
                    <p>
                      Montag - Freitag: 8:00 - 17:00 Uhr<br />
                      Samstag: Nach Vereinbarung<br />
                      Sonntag: Geschlossen
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-lg mb-4">Folgen Sie uns</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-warmAccent hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-warmAccent hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Senden Sie uns eine Nachricht</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Name *
                    </label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Ihr Name" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      E-Mail *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Ihre E-Mail-Adresse" 
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Telefon
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Betreff *
                  </label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="Betreff Ihrer Nachricht" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Nachricht *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Ihre Nachricht an uns" 
                    rows={5} 
                    required 
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full btn-primary">
                    Nachricht senden
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  Die mit * markierten Felder sind Pflichtfelder.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - In a real application, you would integrate an actual map here */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Besuchen Sie uns</h2>
          <div className="bg-gray-200 h-[400px] flex items-center justify-center">
            <p className="text-gray-600">Hier würde eine Google Maps Integration stehen.</p>
          </div>
          <p className="mt-4 text-gray-700">
            Musterstraße 123, 12345 Musterstadt, Deutschland
          </p>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
