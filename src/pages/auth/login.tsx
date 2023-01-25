import Layout from "@/components/Layout";
import useGoogleSignIn from "@/hooks/useSignInGoogleUser";

export default function Login() {

  return (
    <>
      <Layout
        pageContent={
          <div className="bg-green-300 w-full h-screen border-4 border-black mt-20">
            <button
              onClick={() => useGoogleSignIn()}
              className="bg-black text-white"
            >
              Sign in with Google
            </button>
          </div>
        }
      ></Layout>
    </>
  );
}

export interface LoginUserPayload {
  email: string;
  password: string;
}
