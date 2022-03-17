import React, { useState, useEffect } from "react";

const MenuBar = ({ categories, filterMenu }) => {
  return (
    <div className="z-10 fixed top-14 sm:top-16 left-0 right-0 bg-[#c8d8e4] text-[#2b6777] p-2 2xl:container mx-auto">
      <div className="flex gap-5">
        {categories &&
          categories.map((item, index) => {
            return (
              <button
                key={index}
                className="capitalize"
                onClick={() => filterMenu(item)}
              >
                {item}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default MenuBar;
