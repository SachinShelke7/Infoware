import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Corosel = ({ item }) => {
  return (
    <div className="hidden sm:block">
      <Carousel
        emulateTouch={true}
        infiniteLoop={true}
        autoFocus={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        showIndicators={false}
      >
        <Image
          src={`/images/${item.image1}`}
          width={"1536px"}
          height={"350px"}
          alt="band"
          className="hover:scale-105 transform transition-all duration-[500ms] object-cover w-full h-full cursor-pointer"
        />
        <Image
          src={`/images/${item.image2}`}
          width={"1536px"}
          height={"350px"}
          alt="band"
          className="hover:scale-105 transform transition-all duration-[500ms] object-cover w-full h-full cursor-pointer"
        />
      </Carousel>
    </div>
  );
};

export default Corosel;
