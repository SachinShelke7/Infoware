import React, { useState, useEffect } from "react";
import Image from "next/image";
import CorouselDetail from "./CorouselDetail";

const Detail = () => {
  const [item, setItem] = useState("");
  useEffect(() => {
    var get = JSON.parse(localStorage.getItem("product"));
    setItem(get);
  }, []);
  return (
    <div>
      {item && (
        <div>
          <CorouselDetail item={item} />
          <h2 className="text-xl font-medium py-2">{item.title}</h2>
          <div className="flex space-x-5">
            <div className="w-[30%]">
              <div className="w-full overflow-hidden">
                <Image
                  src={`/images/${item.image1}`}
                  width={"320px"}
                  height={"320px"}
                  alt="band"
                  className="hover:scale-105 transform transition-all duration-[500ms] object-cover w-full h-full cursor-pointer"
                />
              </div>
            </div>
            <div className="w-1/2 pr-32">
              <div>
                <p>
                  <span className="font-medium">M.R.P.:</span> ₹{item.price}
                </p>
                <p>
                  <span className="font-medium">Brand :</span> {item.brand}
                </p>
              </div>

              <div>
                <h5 className="font-medium">About this item</h5>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
