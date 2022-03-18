import React from "react";
import Cart from "./components/Cart";
import { Footer } from "../components";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/navbar/Navbar"), {
  ssr: false,
});

const cart = () => {
  return (
    <div className="2xl:container mx-auto relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default cart;
