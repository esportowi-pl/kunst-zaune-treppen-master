
# Plan rozbudowy strony głównej — Elitarny, stonowany redesign

## Filozofia designu

**Ton:** Ciepły luksus — spokojny, pewny siebie, europejski rzemieślnik. Bez krzykliwych emoji, bez agresywnego marketingu. Jakość mówi sama za siebie.

**Inspiracja:** Strony premium marek architektonicznych i rzemieślniczych (jak Schüco, Hörmann, Bulthaup). Minimalizm z ciepłem naturalnych materiałów.

**Paleta kolorów:**
- Tło: Ciepły off-white `#FAF8F5` / kremowy
- Tekst główny: Ciemny antracyt `#2A2A2A`
- Akcent: Ciepłe złoto/brąz `#B8956A` (obecny warmAccent lekko ocieplony)
- Akcent drugorzędny: Stonowany oliwkowy `#7A8B6F` (zamiast zielonych/pomarańczowych)
- Tło sekcji: Delikatny piaskowy `#F2EDE6`

**Typografia:**
- Nagłówki: `Playfair Display` — elegancki serif
- Body: `DM Sans` — nowoczesny, czytelny sans-serif
- Rozmiary: Większe, bardziej oddychające

---

## Struktura strony głównej (nowa)

### 1. Hero — Pełnoekranowy, kinematograficzny
- Pełnoekranowe zdjęcie z delikatnym ciemnym gradientem (nie overlay 60%)
- Tytuł w Playfair Display, duży, elegancki
- Bez emoji, bez gwiazdek w hero
- Subtelny podtytuł: „Rzemiosło. Precyzja. Tradycja."
- Jeden CTA: „Bezpłatna konsultacja" — stonowany button
- Delikatna animacja scroll-down indicator

### 2. Pasek zaufania — Dyskretna linia
- Minimalistyczny pasek z logotypami/certyfikatami
- Szary na białym, bez kolorowych ikon
- TÜV, ISO, CE — same logotypy, bez opisów

### 3. Wprowadzenie — Sekcja „O nas" (NOWA)
- Krótki blok tekstu z dużym zdjęciem obok (split layout 50/50)
- „Od 2006 roku tworzymy dzieła rzemiosła..."
- Bez liczników, bez statystyk w tym miejscu

### 4. Produkty — Elegancka galeria
- 2-3 karty produktowe, duże zdjęcia
- Hover: delikatne powiększenie + ciemny overlay z nazwą
- Bez cen na stronie głównej
- Bez emoji w tytułach
- Layout: pełna szerokość, asymetryczny grid

### 5. Proces — Linia czasu
- 4 kroki w eleganckiej linii poziomej
- Ikony: cienkie, liniowe (stroke, nie filled)
- Numeracja: drobna, typograficzna
- Tło: piaskowe/kremowe

### 6. Realizacje — Galeria portfolio
- Zamiast before/after → elegancka galeria 3-4 najlepszych projektów
- Duże zdjęcia, minimalne opisy
- „Zobacz więcej" link do /projekte

### 7. Referencje — Eleganckie cytaty
- 2-3 opinie, duży cudzysłów typograficzny
- Bez gwiazdek, bez ratingu liczbowego
- Imię, lokalizacja, typ projektu
- Tło: delikatny gradient lub tekstura papieru

### 8. Liczby — Subtelna sekcja statystyk
- 4 liczby w jednej linii: 18+ lat, 2500+ projektów, 10 lat gwarancji, 150+ miast
- Animacja count-up zachowana, ale stonowana
- Bez emoji, bez kolorowych ikon

### 9. CTA końcowe — Spokojne zaproszenie
- „Porozmawiajmy o Twoim projekcie"
- Formularz kontaktowy inline LUB przycisk do /kontakt
- Bez „LIMITOWANEJ OFERTY", bez urgency tactics
- Tło: ciemny antracyt z ciepłym akcentem

### 10. Footer — Bez zmian strukturalnych
- Stonowanie kolorów do nowej palety

---

## Zmiany techniczne

### Design System (index.css + tailwind.config.ts)
- Nowe CSS variables: `--gold`, `--olive`, `--sand`, `--charcoal`
- Import fontów: Playfair Display + DM Sans
- Nowe utility classes: `.section-elegant`, `.text-display`

### Komponenty do przebudowy
1. `src/pages/Index.tsx` — kompletna przebudowa hero + sekcji
2. `src/components/trust/CertificatesSection.tsx` — uproszczenie do paska logotypów
3. `src/components/trust/ProjectCounters.tsx` — stonowanie, usunięcie kolorów i emoji
4. `src/components/trust/BeforeAfterGallery.tsx` → zamiana na elegancką galerię portfolio
5. `src/components/trust/ProjectMap.tsx` — usunięcie ze strony głównej (przeniesienie do /uber-uns)
6. `src/components/reviews/ReviewsSection.tsx` — eleganckie cytaty bez gwiazdek
7. `src/components/layout/Navbar.tsx` — stonowanie, dodanie lepszej typografii
8. `src/components/layout/Footer.tsx` — dopasowanie do nowej palety

### Nowe komponenty
- `src/components/home/HeroSection.tsx`
- `src/components/home/IntroSection.tsx`
- `src/components/home/ProductsGallery.tsx`
- `src/components/home/ProcessTimeline.tsx`
- `src/components/home/PortfolioGallery.tsx`
- `src/components/home/TestimonialsElegant.tsx`
- `src/components/home/StatsBar.tsx`
- `src/components/home/CtaElegant.tsx`

### Animacje
- framer-motion: fade-in on scroll dla sekcji
- Parallax efekt na hero
- Delikatne hover transitions na kartach

---

## Kolejność implementacji

1. **Design System** — paleta, fonty, tokeny (index.css + tailwind.config.ts)
2. **Navbar + Footer** — dopasowanie do nowego stylu
3. **Hero** — nowy kinematograficzny hero
4. **Sekcje treściowe** — po kolei od góry do dołu
5. **Animacje** — framer-motion na końcu
6. **Responsywność** — sprawdzenie mobile

---

## Czego NIE robimy

- ❌ Emoji w treściach (🔥🚀🎯⭐✅)
- ❌ Agresywne CTA ("ZADZWOŃ TERAZ!", "LIMITOWANA OFERTA!")
- ❌ Krzykliwe gradienty (orange-to-red)
- ❌ Gwiazdki i ratingi liczbowe na stronie głównej
- ❌ Powtarzanie "2547+" w co drugiej sekcji
- ❌ Kolorowe ikony (niebieskie, zielone, pomarańczowe, fioletowe)
- ❌ Mapa regionów na stronie głównej (przeniesiona)
