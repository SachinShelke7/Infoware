import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";

const Detail = () => {
  const [item, setItem] = useState("");
  useEffect(() => {
    var get = JSON.parse(localStorage.getItem("buy"));
    setItem(get);
  }, []);
  return (
    <div>
      {item ? (
        <div className="w-full flex flex-col lg:flex-row 2xl:flex-col items-center justify-center lg:space-x-5 2xl:space-x-0">
          <div className="bg-[#c8d8e4] rounded-md max-w-md lg:max-w-lg">
            <div className="flex space-x-5 py-10 mx-5">
              <Image
                src={`/images/${item.image1}`}
                width={"150px"}
                height={"150px"}
                alt={item.title}
              />
              <div className="w-[50%]">
                <h2 className="font-medium py-2 truncate">{item.title}</h2>
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

                <Link href="/" passHref>
                  <button className="btn mt-2">Back to home</button>
                </Link>
              </div>
            </div>
          </div>
          <Form />
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
