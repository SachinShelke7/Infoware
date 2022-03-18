import React from "react";
import Head from "next/head";
import Detail from "./components/Detail";
import { Footer, Navbar } from "../components";

const details = () => {
  return (
    <div className="pt-16 text-[#2b6777] 2xl:container mx-auto flex flex-col min-h-screen">
      <Head>
        <title>Product Detail Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex-grow">
        <Detail />
      </div>
      <Footer />
    </div>
  );
};

export default details;
