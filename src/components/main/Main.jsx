import React from "react";
import Card from "./components/Card";
import Corousel from "./components/Corousel";
import MenuBar from "./components/MenuBar";
import data from "../../pages/data.json";

const Main = () => {
  return (
    <main className="main_content">
      <MenuBar />
      <div>
        <Corousel />

        <div className="flex w-full justify-center items-center flex-wrap gap-10">
          {data &&
            data.map((item, index) => {
              return <Card item={item} key={index} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default Main;
