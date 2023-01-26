import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout: NextPage<LayoutProps> = ({ pageContent, pageContentContainerStyles }) => {

  return (
    <>
      <Head>
        <title>My NEXT Hike</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Head>
      <NavBar />
      <main className="bg-green-200 w-full h-screen mt-18 mb-15 py-4 px-4">
        <div className={pageContentContainerStyles}>
          {pageContent}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

interface LayoutProps {
  pageContent?: React.ReactNode,
  pageContentContainerStyles?: string
}
