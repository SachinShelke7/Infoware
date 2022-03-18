import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ item, cart, setCart, setGetNewItem }) => {
  const handleDetail = () => {
    if (!item) {
      window.localStorage.clear("product");
    } else {
      localStorage.setItem("product", JSON.stringify(item));
    }
  };

  return (
    <div>
      {item && (
        <div className="main_card">
          <div className="w-full overflow-hidden">
            <Image
              src={`/images/${item.image1}`}
              width={"320px"}
              height={"320px"}
              alt={item.title}
              className="hover:scale-105 transform transition-all duration-[500ms] object-cover w-full h-full cursor-pointer"
            />
            <div>
              <h5 className="product_name">{item.title}</h5>
              <h5 className="product_name">
                <span className="font-normal">Price </span>Rs {item.price}
              </h5>
              <p className="truncate product_description">{item.description}</p>
            </div>
          </div>

          <div className="flex items-center w-full space-x-3">
            <Link href="/details" passHref>
              <button className="btn" onClick={() => handleDetail(item)}>
                Details
              </button>
            </Link>
            <button className="btn" onClick={() => setGetNewItem(item)}>
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
