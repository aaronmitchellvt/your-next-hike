import { NextPage } from "next";
import { Head } from "next/document";
import React from "react";
import NavBar from "./NavBar";

const Layout: NextPage<LayoutProps> = ({ pageContent }) => {
  return (
    <>
      <NavBar />
      <main className="bg-green-300 w-full h-screen">
        {pageContent}
      </main>
    </>
  );
};

export default Layout;

interface LayoutProps {
  pageContent?: React.ReactNode
}
