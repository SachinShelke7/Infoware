import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="main_card">
      <div className="w-full overflow-hidden">
        <Image
          src="/images/band.jpg"
          width={"320px"}
          height={"320px"}
          alt="band"
          className="hover:scale-105 transform transition-all duration-[500ms] object-cover w-full h-full cursor-pointer"
        />
      </div>
      <div>
        <h5 className="product_name">Product Name</h5>
        <p className="truncate product_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          incidunt necessitatibus aspernatur. Iusto alias placeat laboriosam
          nisi id, vero sed modi! Labore tenetur iste quam quibusdam corrupti
          explicabo eum deserunt?
        </p>
        <div className="flex items-center w-full space-x-3">
          <Link href="/details" passHref>
            <button className="btn">Details</button>
          </Link>
          <button className="btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
