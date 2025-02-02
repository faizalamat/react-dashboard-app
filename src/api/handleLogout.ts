import { supabase } from "../../supabaseClient";

export const handleLogout = () => {
  localStorage.removeItem("sb-kondhjkgoyxzwcyudaub-auth-token");
  supabase.auth.signOut();
  window.location.href = "/login";
};
