import supabase from "app/supabase";

const logUserOut = async () => {
  const logoutResult = await supabase.auth.signOut();
  return logoutResult;
};

export default logUserOut;