import { useQuery } from "react-query";
import supabase from "app/supabase";

const getCurrentUser =  async () => {
  //TODO Add additional logic for error messages, etc
  const user = await supabase.auth.getUser();
  return user.data
}

export default function useGetCurrentUser() {
  return useQuery("user", () => getCurrentUser());
}
