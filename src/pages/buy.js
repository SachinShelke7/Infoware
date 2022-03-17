import Head from "next/head";
import React from "react";
import Buy from "./components/Buy";

const buy = () => {
  return (
    <div className="pt-20">
      <Head>
        <title>Buy Page</title>
      </Head>
      <Buy />
    </div>
  );
};

export default buy;
