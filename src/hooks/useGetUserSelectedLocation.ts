import { useQuery } from "react-query";
import supabase from "app/supabase";

const getCurrentUserSelectedLocation =  async () => {
  const session = await supabase.auth.getSession();
  const { data } = await supabase
  .from("selectedLocations")
  .select("*")
  .eq("user", session.data.session?.user.id);
  return data;
}

export default function useGetUserSelectedLocation() {
  return useQuery("userSelectedLocation", () => getCurrentUserSelectedLocation());
}