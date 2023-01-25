import useLogin from "@/hooks/useLogin";
import { SupabaseClient } from "@supabase/supabase-js";
import supabase from "app/supabase";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "react-query";

export default function Login() {
  const router = useRouter();

  const [loginUserPayload, setLoginUserPayload] = useState<LoginUserPayload>({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    setLoginUserPayload((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  const handleGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };
  const googleLogin = useMutation(() => handleGoogleSignIn());
  const loginMutation = useLogin(loginUserPayload);



  if (googleLogin.isSuccess) {
    console.log("Data: ", googleLogin.data);
    return (
      <>
        <h1>Successfully logged in</h1>
      </>
    );
  }

  if (googleLogin.isError) {
    console.log("Error: ", googleLogin.error);
    return (
      <>
        <h1>Sorry, there was an error logging you in</h1>
      </>
    );
  }

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
    // <form onSubmit={handleSubmit} className="">
    //   <div className="">
    //     <div className="">
    //       <label htmlFor="email">Email</label>
    //       <input
    //         type="text"
    //         name="email"
    //         id="email"
    //         onChange={handleChange}
    //         value={loginUserPayload.email}
    //         className="border-2 border-indigo-600"
    //       />
    //     </div>

    //     <div className="">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         name="password"
    //         id="password"
    //         onChange={handleChange}
    //         value={loginUserPayload.password}
    //         className="border-2 border-indigo-600"
    //       />
    //     </div>

    //       <button type="submit">{loginMutation.isLoading ? <p>Logging in..</p> : <p>Login</p>}</button>

    //   </div>
    // </form>
  );
}

export interface LoginUserPayload {
  email: string;
  password: string;
}
