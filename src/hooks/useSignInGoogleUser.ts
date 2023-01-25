import supabase from "app/supabase";

const useGoogleSignIn = async () =>  {
  await supabase.auth.signInWithOAuth({
    provider: "google",
  });
}

export default useGoogleSignIn;