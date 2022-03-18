import React from "react";
import Cart from "./components/Cart";
import { Footer, Navbar } from "../components";

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
