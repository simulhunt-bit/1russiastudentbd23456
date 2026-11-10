import { createClient } from "@supabase/supabase-js";
const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const service=process.env.SUPABASE_SERVICE_ROLE_KEY;
export const hasSupabase=Boolean(url && anon);
export const publicDb=()=> { if(!url||!anon) throw new Error("Supabase public environment variables are missing"); return createClient(url,anon); };
export const adminDb=()=> { if(!url||!service) throw new Error("Supabase server environment variables are missing"); return createClient(url,service,{auth:{autoRefreshToken:false,persistSession:false}}); };
