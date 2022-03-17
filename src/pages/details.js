import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Detail from "./components/Detail";

const details = () => {
  return (
    <div className="pt-16">
      <Head>
        <title>Product Detail Page</title>
        <meta
          name="description"
          content="The best E-commerce platform for your needs, Every essential products in one platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Detail />
    </div>
  );
};

export default details;
