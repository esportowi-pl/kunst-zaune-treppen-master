
# Plan naprawy systemu tworzenia administratora

## Podsumowanie problemów

Po audycie wykryłem następujące problemy:

1. **Zły URL Supabase** - Komponent `CreateFirstAdmin.tsx` używa starego projektu Supabase (`qjxfdfdujrjyedqukwfy`) zamiast nowego Lovable Cloud (`krjgngzlkgqfqrtlftfp`)

2. **Brakujące pole hasła** - Formularz wysyła tylko email, ale edge function wymaga również hasła

3. **Tabele nie istnieją w bazie** - Migracje SQL są w plikach, ale baza danych jest pusta (zapytanie zwrociło pustą tablicę)

4. **Edge function nie jest wdrożona** - Brak logów oznacza, że funkcja nie działa

5. **Hardcoded credentials** - Klucz API jest zahardkodowany w kodzie zamiast używać zmiennych środowiskowych

---

## Plan naprawy

### Krok 1: Uruchomienie migracji bazy danych

Uruchomię migracje SQL, które utworzą tabele:
- `admin_users` - tabela administratorów
- `website_content` - zawartość strony
- `projects` - projekty
- `team_members` - członkowie zespołu
- `reviews` - opinie klientów

Oraz funkcje i polityki RLS.

### Krok 2: Naprawa komponentu CreateFirstAdmin

Zmiany w `src/components/admin/CreateFirstAdmin.tsx`:
- Dodanie pola hasła do formularza
- Usunięcie hardcoded URL i klucza - użycie zmiennych środowiskowych z `.env`
- Użycie prawidłowego URL nowego projektu Lovable Cloud

### Krok 3: Aktualizacja edge function

Zmiany w `supabase/functions/create-admin-user/index.ts`:
- Upewnienie się, że funkcja działa poprawnie
- Dodanie konfiguracji CORS
- Wdrożenie funkcji do Lovable Cloud

### Krok 4: Dodanie konfiguracji edge function

Dodanie w `supabase/config.toml`:
```toml
[functions.create-admin-user]
verify_jwt = false
```

---

## Szczegóły techniczne

### Schemat bazy danych (z migracji)

```text
+------------------+     +------------------+     +------------------+
|   admin_users    |     |    projects      |     |  team_members    |
+------------------+     +------------------+     +------------------+
| id (UUID, PK)    |     | id (UUID, PK)    |     | id (UUID, PK)    |
| email (TEXT)     |     | title (TEXT)     |     | name (TEXT)      |
| role (TEXT)      |     | description      |     | position (TEXT)  |
| created_at       |     | image_url        |     | bio (TEXT)       |
+------------------+     | category         |     | image_url        |
         |               | location         |     | created_at       |
         |               | created_at       |     +------------------+
         v               +------------------+
+------------------+
|    reviews       |     +------------------+
+------------------+     | website_content  |
| id (UUID, PK)    |     +------------------+
| client_name      |     | id (UUID, PK)    |
| client_location  |     | page (TEXT)      |
| project_type     |     | section (TEXT)   |
| rating (1-5)     |     | title (TEXT)     |
| review_text      |     | content (TEXT)   |
| google_review_url|     | created_at       |
| is_featured      |     +------------------+
| created_at       |
+------------------+
```

### Nowy formularz tworzenia admina

Formularz będzie zawierał:
- Pole email (wymagane)
- Pole hasło (wymagane, min. 6 znaków)
- Pole potwierdzenia hasła
- Walidacja po stronie klienta

### Flow tworzenia admina

```text
1. Użytkownik wypełnia formularz (email + hasło)
           ↓
2. Frontend wysyła POST do edge function
           ↓
3. Edge function tworzy użytkownika w auth.users
           ↓
4. Edge function dodaje rekord do admin_users
           ↓
5. Użytkownik może się zalogować na /admin/login
```

---

## Kolejność implementacji

1. Uruchomienie migracji SQL (tabele + RLS)
2. Aktualizacja config.toml dla edge function
3. Naprawa komponentu CreateFirstAdmin.tsx
4. Aktualizacja edge function (jeśli potrzebna)
5. Wdrożenie edge function
6. Test tworzenia admina

---

## Uwagi bezpieczeństwa

- Edge function używa `SUPABASE_SERVICE_ROLE_KEY` (dostępny automatycznie)
- RLS chroni tabele przed nieautoryzowanym dostępem
- Hasła są hashowane przez Supabase Auth
- Formularz wymaga minimum 6 znaków w haśle
