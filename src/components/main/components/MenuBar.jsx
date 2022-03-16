import React from "react";

const MenuBar = () => {
  return (
    <div className="z-10 fixed top-16 left-0 right-0 bg-[#c8d8e4] text-[#2b6777] p-2">
      <div className="flex gap-5">
        <p>Categories</p>
        <p>Mobiles</p>
        <p>Fashion</p>
        <p>Kitchen</p>
        <p>Todays Deal</p>
      </div>
    </div>
  );
};

export default MenuBar;
