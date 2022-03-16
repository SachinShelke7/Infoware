import React from "react";
import Card from "./components/Card";
import Image from "next/image";
import Corousel from "./components/Corousel";
import MenuBar from "./components/MenuBar";

const Main = () => {
  return (
    <main className="main_content">
      <MenuBar />
      <div>
        <Corousel />

        <div className="flex w-full justify-center items-center flex-wrap gap-10">
          <Card />
        </div>
      </div>
    </main>
  );
};

export default Main;
