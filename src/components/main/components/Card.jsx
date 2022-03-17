import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Card = ({ item }) => {
  const [buy, setBuy] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const link = "/images/";

  useEffect(() => {
    if (!selectedProduct) {
      window.localStorage.clear("product");
    } else {
      localStorage.setItem("product", JSON.stringify(selectedProduct));
      localStorage.setItem("buy", JSON.stringify(selectedProduct));
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (!buy) {
      window.localStorage.clear("buy");
    } else {
      localStorage.setItem("buy", JSON.stringify(buy));
    }
  }, [buy]);

  return (
    <div>
      {item && (
        <div className="main_card">
          <div className="w-full overflow-hidden">
            <Image
              src={`${link}${item.image1}`}
              width={"320px"}
              height={"320px"}
              alt={item.title}
              className="hover:scale-105 transform transition-all duration-[500ms] object-cover w-full h-full cursor-pointer"
            />
            <div>
              <h5 className="product_name">{item.title}</h5>
              <p className="truncate product_description">{item.description}</p>
            </div>
          </div>

          <div className="flex items-center w-full space-x-3">
            <Link href="/details" passHref>
              <button className="btn" onClick={() => setSelectedProduct(item)}>
                Details
              </button>
            </Link>
            <Link href="/buy" passHref>
              <button className="btn" onClick={() => setBuy(item)}>
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
