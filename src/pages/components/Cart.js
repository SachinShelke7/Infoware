import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";

const Detail = () => {
  const [finalPrice, setFinalPrice] = useState();
  const [items, setItems] = useState("");
  useEffect(() => {
    const get = JSON.parse(localStorage.getItem("cart"));
    setItems(get);

    if (get) {
      const getPrices = get.map((item) => item.price);
      const stringToNumber = getPrices.map((i) => Number(i));
      var total = 0;
      for (let i = 0; i < stringToNumber.length; i++) {
        total += stringToNumber[i];
      }
      setFinalPrice(total);
    }
  }, []);

  const handleClearCart = () => {
    localStorage.removeItem("cart");
  };

  return (
    <div className="lg:py-16 w-full flex flex-col lg:flex-row lg:space-x-20 px-5 space-y-10 lg:space-y-0 mb-5">
      <div>
        <div className="pt-5 text-[#2b6777]">
          {items ? (
            <div>
              Your have total <span className="font-bold">{items?.length}</span>{" "}
              items in your cart
              <Link href="/" passHref>
                <button
                  className="bg-red-400 text-white px-2 py-1 rounded-md text-sm float-right"
                  onClick={() => handleClearCart()}
                >
                  Clear Cart
                </button>
              </Link>
              <p className="text-base">
                Total Amount: <span className="font-bold">{finalPrice}</span> Rs{" "}
              </p>
            </div>
          ) : (
            <div>
              No item in cart
              <Link href="/" passHref>
                <button className="bg-red-400 text-white px-2 py-1 rounded-md text-sm float-right ml-2">
                  Back To Home
                </button>
              </Link>
            </div>
          )}
        </div>
        {items &&
          items.map((item, index) => {
            return (
              <div className="w-full pt-5 flex flex-col" key={index}>
                <div className="bg-[#c8d8e4] rounded-md max-w-md lg:max-w-lg">
                  <div className="flex space-x-5 py-10 mx-5">
                    <Image
                      src={`/images/${item.image1}`}
                      width={"150px"}
                      height={"150px"}
                      alt={item.title}
                    />
                    <div className="w-[50%]">
                      <h2 className="font-medium py-2 truncate">
                        {item.title}
                      </h2>
                      <p>
                        <span className="font-medium text-sm text-gray-600">
                          M.R.P.:
                        </span>{" "}
                        ₹{item.price}
                      </p>
                      <p>
                        <span className="font-medium text-sm text-gray-600">
                          Brand :
                        </span>{" "}
                        {item.brand}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {items ? <Form /> : ""}
    </div>
  );
};

export default Detail;
