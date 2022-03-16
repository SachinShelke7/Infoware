import React from "react";
import { Navbar } from "../../components";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#f2f2f2]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
