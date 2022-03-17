import { useState } from "react";
import Head from "next/head";
import { Main } from "../components";
import data from "./data.json";

export default function Home() {
  const [items, setItems] = useState(data);
  const categories = ["all", ...new Set(data.map((item) => item.category))];
  const filterMenu = (selectedCategory) => {
    if (selectedCategory === "all") {
      setItems(data);
    } else {
      const updatedItems = data.filter((item) => {
        return item.category === selectedCategory;
      });
      setItems(updatedItems);
    }
  };
  console.log(items);
  return (
    <div>
      <Head>
        <title>Infoware_India_Assignment</title>
        <meta
          name="description"
          content="The best E-commerce platform for your needs, Every essential products in one platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main categories={categories} filterMenu={filterMenu} items={items} />
    </div>
  );
}
