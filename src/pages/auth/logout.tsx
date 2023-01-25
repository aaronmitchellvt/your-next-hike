import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import logUserOut from "@/hooks/useLogOutUser";

const logout = () => {
  const router = useRouter()
  const onUserLogOut = async () => {
    if((await logUserOut()).error === null) {
      router.push("/")
    }
  }
  return (
    <>
      <Layout
        pageContent={
          <div className="bg-green-300 w-full h-screen border-4 border-black mt-20">
            <button onClick={() => onUserLogOut()}>logout</button>
          </div>
        }
      ></Layout>
    </>
  );
};

export default logout;
