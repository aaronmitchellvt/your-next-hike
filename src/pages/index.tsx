import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Layout
        pageContent={
          <div className="text-black mt-16">index page</div>
        }
      ></Layout>
    </>
  );
}
