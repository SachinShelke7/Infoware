import React from "react";
import Card from "./components/Card";
import Corousel from "./components/Corousel";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";

const Main = ({ categories, filterMenu, items }) => {
  return (
    <main className="main_content">
      <MenuBar categories={categories} filterMenu={filterMenu} />
      <div>
        <Corousel />

        <div className="flex w-full justify-center items-center flex-wrap gap-10">
          {items &&
            items.map((item, index) => {
              return <Card item={item} key={index} />;
            })}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
