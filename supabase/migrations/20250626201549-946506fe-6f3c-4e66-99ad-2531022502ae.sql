
-- Create a table to store contact form requests
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - make it readable by admins only
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert contact requests (public form)
CREATE POLICY "Anyone can submit contact requests" 
  ON public.contact_requests 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that only allows authenticated users to view requests (for admin access)
CREATE POLICY "Authenticated users can view contact requests" 
  ON public.contact_requests 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
