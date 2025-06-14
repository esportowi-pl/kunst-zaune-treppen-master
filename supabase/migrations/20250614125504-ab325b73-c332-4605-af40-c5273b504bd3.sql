
-- Create tables for managing website content

-- Content table for general website content
CREATE TABLE public.website_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page TEXT NOT NULL,
  section TEXT NOT NULL,
  title TEXT,
  content TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(page, section)
);

-- Projects table
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  category TEXT NOT NULL,
  completion_date DATE,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Team members table
CREATE TABLE public.team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Admin users table
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS on all tables
ALTER TABLE public.website_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create is_admin function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create RLS policies
CREATE POLICY "Anyone can read website content" ON public.website_content
  FOR SELECT USING (true);

CREATE POLICY "Only admins can modify website content" ON public.website_content
  FOR ALL USING (is_admin());

CREATE POLICY "Anyone can read projects" ON public.projects
  FOR SELECT USING (true);

CREATE POLICY "Only admins can modify projects" ON public.projects
  FOR ALL USING (is_admin());

CREATE POLICY "Anyone can read team members" ON public.team_members
  FOR SELECT USING (true);

CREATE POLICY "Only admins can modify team members" ON public.team_members
  FOR ALL USING (is_admin());

CREATE POLICY "Only admins can read admin users" ON public.admin_users
  FOR SELECT USING (is_admin());

CREATE POLICY "Only admins can modify admin users" ON public.admin_users
  FOR ALL USING (is_admin());

-- Create triggers to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_website_content_updated_at
BEFORE UPDATE ON public.website_content
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER set_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER set_team_members_updated_at
BEFORE UPDATE ON public.team_members
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data for the website content
INSERT INTO public.website_content (page, section, title, content) VALUES 
('home', 'hero', 'JW Zaune & Treppen', '18 Jahre Erfahrung und über 2500 erfolgreiche Projekte. Spezialisiert auf hochwertige Metallzäune und Holztreppen. Qualität aus Polen für Deutschland.'),
('home', 'about', 'Über uns', 'Seit 2006 stehen wir für Qualität und Zuverlässigkeit im Zaunbau und Treppenbau.'),
('metallzaune', 'hero', 'Metallzäune', 'Hochwertige Metallzäune nach Maß'),
('holztreppen', 'hero', 'Holztreppen', 'Maßgeschneiderte Holztreppen für Ihr Zuhause'),
('kontakt', 'info', 'Kontakt', 'Nehmen Sie Kontakt mit uns auf für ein unverbindliches Angebot.');
