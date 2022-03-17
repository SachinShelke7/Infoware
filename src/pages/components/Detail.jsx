import React, { useState, useEffect } from "react";
import Image from "next/image";
import CorouselDetail from "./CorouselDetail";
import Link from "next/link";

const Detail = () => {
  const [item, setItem] = useState("");
  useEffect(() => {
    var get = JSON.parse(localStorage.getItem("product"));
    setItem(get);
  }, []);
  return (
    <div>
      {item ? (
        <div>
          <CorouselDetail item={item} />
          <div className="flex space-x-5 py-10 mx-5">
            <div className="w-[30%]">
              <div className="w-full overflow-hidden">
                <Image
                  src={`/images/${item.image1}`}
                  width={"320px"}
                  height={"320px"}
                  alt={item.title}
                />
              </div>
            </div>
            <div className="w-1/2 pr-32">
              <div>
                <h2 className="text-xl font-medium py-2">{item.title}</h2>

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
              <div className="flex items-center w-full space-x-3 mt-5">
                <Link href="/" passHref>
                  <button className="btn">Back to home</button>
                </Link>
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[80vh] flex justify-center items-center">
          <Image
            src="/images/error.jpg"
            alt="error"
            width={700}
            height={500}
            className="w-full h-[80vh] overflow-hidden object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Detail;
