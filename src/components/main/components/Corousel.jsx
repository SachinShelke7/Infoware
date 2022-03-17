import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Corosel = () => {
  return (
    <div className="pt-[6.5rem] hidden sm:block">
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
          src="/images/banner.jpg"
          width={"1536px"}
          height={"350px"}
          alt="band"
          className="hover:scale-105 transform transition-all duration-[500ms] object-cover w-full h-full cursor-pointer"
        />
        <Image
          src="/images/banner2.jpg"
          width={"1536px"}
          height={"350px"}
          alt="band"
          className="hover:scale-105 transform transition-all duration-[500ms] object-cover w-full h-full cursor-pointer"
        />
        <Image
          src="/images/banner3.jpg"
          width={"1536px"}
          height={"350px"}
          alt="band"
          className="hover:scale-105 transform transition-all duration-[500ms] object-cover w-full h-full cursor-pointer"
        />
        <Image
          src="/images/banner4.jpg"
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
