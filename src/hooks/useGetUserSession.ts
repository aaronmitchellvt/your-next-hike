import { useQuery } from "react-query";
import supabase from "app/supabase";

const getCurrentUserSession =  async () => {
  //TODO Add additional logic for error messages, etc
  const session = await supabase.auth.getSession();
  return session;
}

export default function useGetCurrentUserSession() {
  return useQuery("userSession", () => getCurrentUserSession());
}