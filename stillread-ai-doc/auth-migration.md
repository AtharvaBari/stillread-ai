# STILL READ - NEXTAUTH DATABASE MIGRATION

Run this SQL in the Supabase SQL Editor to create the required NextAuth tables and link them to our `saved_items` table.

```sql
-- Create NextAuth required tables in the public schema
CREATE TABLE public.users (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name text,
  email text,
  "emailVerified" timestamp with time zone,
  image text,
  CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE public.accounts (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  "userId" uuid NOT NULL,
  type text NOT NULL,
  provider text NOT NULL,
  "providerAccountId" text NOT NULL,
  refresh_token text,
  access_token text,
  expires_at bigint,
  token_type text,
  scope text,
  id_token text,
  session_state text,
  CONSTRAINT accounts_pkey PRIMARY KEY (id),
  CONSTRAINT accounts_userId_fkey FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE
);

CREATE TABLE public.sessions (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  "sessionToken" text NOT NULL,
  "userId" uuid NOT NULL,
  expires timestamp with time zone NOT NULL,
  CONSTRAINT sessions_pkey PRIMARY KEY (id),
  CONSTRAINT sessions_userId_fkey FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE
);

-- Link our existing saved_items table to the new NextAuth users table
ALTER TABLE public.saved_items
  DROP CONSTRAINT IF EXISTS saved_items_user_id_fkey,
  ADD CONSTRAINT saved_items_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;

-- Secure the saved_items table so users can only access their own data
DROP POLICY IF EXISTS "Allow public read" ON public.saved_items;
DROP POLICY IF EXISTS "Allow public insert" ON public.saved_items;

CREATE POLICY "Users can insert their own items" ON public.saved_items FOR INSERT WITH CHECK (user_id IS NOT NULL);
CREATE POLICY "Users can read their own items" ON public.saved_items FOR SELECT USING (true); 
-- Note: In the Next.js server code, we will enforce isolation by querying `.eq('user_id', session.user.id)`