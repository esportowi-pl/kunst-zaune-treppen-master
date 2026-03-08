
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Kontakt = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Zapytanie wysłane',
      description: 'Dziękujemy za wiadomość. Odezwiemy się wkrótce.',
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
            alt="Kontakt"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-6 font-sans">Kontakt</p>
            <h1 className="text-5xl md:text-7xl font-display font-semibold leading-[1.1] mb-8">
              Porozmawiajmy
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
              Chętnie doradzimy przy Twoim indywidualnym projekcie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div {...fadeUp}>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4 font-sans">Dane kontaktowe</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">
                Informacje kontaktowe
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Masz pytania lub chcesz niezobowiązującą wycenę? Skontaktuj się z nami — jesteśmy do dyspozycji.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <MapPin className="w-5 h-5 text-accent" />,
                    title: 'Adres',
                    lines: ['JW Zaune & Treppen', 'Musterstraße 123', '12345 Musterstadt', 'Polska'],
                  },
                  {
                    icon: <Phone className="w-5 h-5 text-accent" />,
                    title: 'Telefon',
                    lines: [<a key="t" href="tel:+491234567890" className="hover:text-accent transition-colors">+49 (0) 123 456 7890</a>],
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-accent" />,
                    title: 'E-mail',
                    lines: [<a key="e" href="mailto:info@jwzaune.de" className="hover:text-accent transition-colors">info@jwzaune.de</a>],
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-accent" />,
                    title: 'Godziny otwarcia',
                    lines: ['Poniedziałek – Piątek: 8:00 – 17:00', 'Sobota: Po umówieniu', 'Niedziela: Zamknięte'],
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-sm text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="p-8 md:p-10 border border-border bg-secondary/20">
                <h2 className="font-display text-2xl font-semibold mb-8">Wyślij wiadomość</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-sans text-muted-foreground">
                        Imię i nazwisko *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Jan Kowalski"
                        required
                        className="rounded-sm border-border bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-sans text-muted-foreground">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jan@example.pl"
                        required
                        className="rounded-sm border-border bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-sans text-muted-foreground">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+48 123 456 789"
                      className="rounded-sm border-border bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-sans text-muted-foreground">
                      Temat *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Temat wiadomości"
                      required
                      className="rounded-sm border-border bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-sans text-muted-foreground">
                      Wiadomość *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Twoja wiadomość..."
                      rows={5}
                      required
                      className="rounded-sm border-border bg-background"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-foreground text-background hover:bg-foreground/90 py-6 text-base font-medium rounded-sm"
                  >
                    Wyślij wiadomość
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Pola oznaczone * są wymagane.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl font-semibold mb-8">Odwiedź nas</h2>
            <div className="bg-muted h-[400px] flex items-center justify-center border border-border">
              <p className="text-muted-foreground text-sm">Integracja Google Maps</p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Musterstraße 123, 12345 Musterstadt, Polska
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
