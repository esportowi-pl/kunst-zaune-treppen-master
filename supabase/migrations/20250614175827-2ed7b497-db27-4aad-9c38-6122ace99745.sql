
-- Create reviews table for storing client reviews
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_location TEXT NOT NULL,
  project_type TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  google_review_url TEXT,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) but make it public readable since reviews should be visible to everyone
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read reviews (public visibility)
CREATE POLICY "Everyone can view reviews" 
  ON public.reviews 
  FOR SELECT 
  USING (true);

-- Only admins can insert, update, delete reviews
CREATE POLICY "Only admins can manage reviews" 
  ON public.reviews 
  FOR ALL 
  USING (public.is_admin());

-- Add trigger to automatically update updated_at
CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON public.reviews
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
