
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-display font-semibold text-white mb-4">
              JW Zaune & Treppen
            </h3>
            <p className="text-sm leading-relaxed text-white/50">
              Mit über 18 Jahren Erfahrung und mehr als 2500 erfolgreich abgeschlossenen Projekten
              sind wir Ihr zuverlässiger Partner für hochwertige Metallzäune und Holztreppen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-sans font-medium uppercase tracking-[0.15em] text-white/40 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Metallzäune', path: '/metallzaune' },
                { name: 'Holztreppen', path: '/holztreppen' },
                { name: 'Projekte', path: '/projekte' },
                { name: 'Über Uns', path: '/uber-uns' },
                { name: 'Kontakt', path: '/kontakt' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-sans font-medium uppercase tracking-[0.15em] text-white/40 mb-6">
              Kontakt
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <p className="text-white/50">
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                  <br />
                  Deutschland
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a
                  href="tel:+491234567890"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  +49 (0) 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a
                  href="mailto:info@jwzaune.de"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  info@jwzaune.de
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <p>&copy; {currentYear} JW Zaune & Treppen. Alle Rechte vorbehalten.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link to="/impressum" className="hover:text-white/60 transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white/60 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
