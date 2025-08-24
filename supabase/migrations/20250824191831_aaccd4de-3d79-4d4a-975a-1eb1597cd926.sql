-- Create app_role enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table to manage user permissions
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check if user has a specific role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to check if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT public.has_role(auth.uid(), 'admin'::app_role)
$$;

-- RLS policies for user_roles table
CREATE POLICY "Users can view their own roles" ON public.user_roles
FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "Admins can view all roles" ON public.user_roles
FOR SELECT
USING (public.is_admin());

CREATE POLICY "Admins can manage all roles" ON public.user_roles
FOR ALL
USING (public.is_admin());

-- Update RLS policy on contact_requests to restrict access to admins only
DROP POLICY IF EXISTS "Authenticated users can view contact requests" ON public.contact_requests;

CREATE POLICY "Only admins can view contact requests" ON public.contact_requests
FOR SELECT
USING (public.is_admin());

-- Keep the existing insert policy for anyone to submit requests
-- Policy "Anyone can submit contact requests" remains unchanged

-- Insert an admin user role for the first user (you'll need to update the user_id)
-- Note: Replace with actual user ID after authentication is set up
-- INSERT INTO public.user_roles (user_id, role) 
-- VALUES ('your-user-id-here', 'admin');

COMMENT ON TABLE public.user_roles IS 'Stores user roles for access control';
COMMENT ON FUNCTION public.has_role(UUID, app_role) IS 'Security definer function to check user roles without RLS recursion';
COMMENT ON FUNCTION public.is_admin() IS 'Convenience function to check if current user is admin';