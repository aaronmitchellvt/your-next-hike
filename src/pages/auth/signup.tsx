import Layout from "@/components/Layout";
import useGoogleSignIn from "@/hooks/useSignInGoogleUser";

const Signup = () => {

  return (
    <Layout
    pageContent={
      <div className="bg-green-300 w-full h-screen border-4 border-black mt-20">
        <button onClick={() => useGoogleSignIn()}>Contine with Google</button>
      </div>
    }
  ></Layout>
  );
};

export default Signup;

