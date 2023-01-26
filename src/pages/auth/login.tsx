import Layout from "@/components/Layout";
import useGoogleSignIn from "@/hooks/useSignInGoogleUser";
import Link from "next/link";

export default function Login() {

  return (
    <>
      <Layout
        pageContent={
          <div className="grid place-items-center mt-16 pt-8">
            <div className="bg-white w-full sm:w-2/3 md:1/3 h-auto rounded mt-8 p-6">
              <h1 className="text-black text-xl text-center font-bold pt-3">
                Log in and start Exploring
              </h1>
              <button
                className="p-2 mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white rounded"
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
                    <p className="pl-2 text-green-700 hover:text-green-800 font-bold underline">
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
