import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="main_nav">
      <div className="flex items-center space-x-10">
        <h4 className="font-medium font-serif lg:text-xl">E-Shop</h4>
        <div className="flex items-center border rounded-md border-[#c8d8e4] bg-[#c8d8e4] lg:w-[400px]">
          <input
            type="search"
            name=""
            id=""
            className="border-0 focus:ring-0 rounded-l-md flex-grow text-[#2b6777]"
          />
          <button className="w-10 flex justify-center items-center text-[#2b6777]">
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="relative">
        <AiOutlineShoppingCart className="w-6 h-6" />
        <p className="text-[8px] absolute -top-4 -right-2 bg-white rounded-full text-black p-1">
          01
        </p>
      </div>
    </div>
  );
};

export default Navbar;
