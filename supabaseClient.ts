import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kondhjkgoyxzwcyudaub.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvbmRoamtnb3l4endjeXVkYXViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNTMxMzQsImV4cCI6MjA1MjkyOTEzNH0.vhmelaHHVFwwcItnpv6Trv_e-iGfz4g4ejmY-t6Nttk";

export const supabase = createClient(supabaseUrl, supabaseKey);