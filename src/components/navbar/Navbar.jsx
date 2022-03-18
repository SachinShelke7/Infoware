import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem("cart"));
    setCartItem(getCart);
  }, [localStorage.getItem("cart")]);

  return (
    <div className="main_nav">
      <div className="flex items-center space-x-10">
        <Link href="/" passHref>
          <h4 className="font-medium font-serif lg:text-xl cursor-pointer">
            E-Shop
          </h4>
        </Link>
        <div className="hidden sm:flex items-center border rounded-md border-[#c8d8e4] bg-[#c8d8e4] lg:w-[400px]">
          <input
            type="search"
            className="border-0 focus:ring-0 rounded-l-md flex-grow text-[#2b6777]"
          />
          <button className="w-10 flex justify-center items-center text-[#2b6777]">
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flex space-x-10 items-center">
        <div>
          <p className="text-xs">hello,</p>
          <p className="text-sm font-bold">Username</p>
        </div>
        <Link href="/cart" passHref>
          <div className="relative cursor-pointer">
            <AiOutlineShoppingCart className="w-6 h-6" />
            <p className="absolute -top-4 -right-1">
              {cartItem ? <span>{cartItem.length}</span> : <span>0</span>}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
