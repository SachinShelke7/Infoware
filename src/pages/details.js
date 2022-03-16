import React from "react";
import Image from "next/image";
import Head from "next/head";

const details = () => {
  return (
    <div className="pt-16 px-10">
      <Head>
        <title>Product Detail Page</title>
        <meta
          name="description"
          content="The best E-commerce platform for your needs, Every essential products in one platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-xl font-medium py-2">Mi Band 5</h2>
      <div className="flex space-x-5">
        <div className="w-[30%]">
          <div className="w-full overflow-hidden">
            <Image
              src="/images/band.jpg"
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
              <span className="font-medium">M.R.P.:</span> ₹2,999.00
            </p>
            <p>
              <span className="font-medium">Deal Price:</span> ₹1,999.00
            </p>
            <p>
              <span className="font-medium">Brand :</span> MI
            </p>
            <p>
              <span className="font-medium">Colour :</span> Black
            </p>
            <p>
              <span className="font-medium">Special Feature :</span> Alarm Clock
            </p>
            <p>
              <span className="font-medium">Screen Size :</span> 1.1 Inches
            </p>
          </div>

          <div>
            <h5 className="font-medium">About this item</h5>
            <p>
              1.1” Full touch AMOLED color display Battery runs up to 14 days on
              a single charge. Battery capacity : 125 mAh Magnetic charging –
              Hassle free charging PAI (Personal Activity Intelligence) – Single
              matrix to track your all fitness related activities. Tracks 11
              professional sports mode (including Yoga and Rope skipping). Run
              on the go with Automatic activity detection (Running and Walking).
              5ATM Water Resistant- recognizes swimming mode. Stress monitoring
              with Guided breathing exercise to lower the stress level. Women
              health monitoring- menstrual cycle tracking and notification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default details;
