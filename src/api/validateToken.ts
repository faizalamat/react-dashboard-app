// import { supabase } from '../../supabaseClient';

import { supabase } from "../../supabaseClient";

// export const validateToken = async (token: string) => {
//   const { data, error } = await supabase.auth.getUser(token);
//   if (error) {
//     console.error(error);
//     return false;
//   }
//   return data;
// }

export const validateToken = async () => {
    const authToken = localStorage.getItem('sb-kondhjkgoyxzwcyudaub-auth-token');
    if (!authToken) {
        return false;
    }
    try {
        const session = JSON.parse(authToken);
        const { access_token } = session;
        if (!access_token) {
            return false;
        }

        const {data, error} = await supabase.auth.getUser(access_token);

        if (error) {
            return false;
        } 
        return !!data;
        }catch (error) {
            
            return false;
        }
        return true;
    }