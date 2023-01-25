import NavBar from "@/components/NavBar";
import supabase from "app/supabase";

export default function Login() {
  
  const handleGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <>
      <NavBar />
      <div className="bg-green-300 w-full h-screen border-4 border-black mt-20">
        <button onClick={handleGoogleSignIn} className="bg-black text-white">
          Sign in with Google
        </button>
      </div>
    </>
  );
}

export interface LoginUserPayload {
  email: string;
  password: string;
}
