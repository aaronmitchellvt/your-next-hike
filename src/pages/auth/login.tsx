import Layout from "@/components/Layout";
import useGoogleSignIn from "@/hooks/useSignInGoogleUser";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Layout
        pageContent={
          <div className="grid place-items-center mt-16">
            <div className="bg-white w-3/5 w:md-1/3  h-auto rounded p-6">
              <h1 className="text-black text-xl text-center font-bold pt-3">
                Log in and start Exploring
              </h1>
              <button
                className="p-2 mt-3 w-full bg-blue-500 text-white rounded"
                onClick={() => useGoogleSignIn()}
              >
                <span className="flex justify-between items-center pr-3">
                  <p className="pl-3">Contine with Google</p>
                  <ion-icon name="logo-google"></ion-icon>
                </span>
              </button>
              <div className="flex justify-center py-3">
                <span className="flex items-center">
                  <p>Don't have an account?</p>
                  <Link href="/auth/signup">
                    <p className="pl-2 text-green-700 font-bold underline">
                      Create account
                    </p>
                  </Link>
                </span>
              </div>
            </div>
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
