import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client — initialized from environment variables.
 *
 * Required env vars (set in .env.local):
 *   NEXT_PUBLIC_SUPABASE_URL
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY
 *
 * For the MVP, RLS is set to public read/insert so the anon key is sufficient.
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
