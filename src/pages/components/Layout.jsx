import React from "react";
import { Footer, Navbar } from "../../components";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow 2xl:container mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
