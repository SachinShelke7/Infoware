import { useState, useEffect } from "react";
import Head from "next/head";
import { Footer, Main, Navbar } from "../components";
import data from "./data.json";

export default function Home() {
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState([]);
  const [getNewItem, setGetNewItem] = useState();
  const [cartLenght, setCartLenght] = useState([]);

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

  useEffect(() => {
    if (getNewItem) {
      const initialCart = JSON.parse(localStorage.getItem("cart") || "[]");
      const cartArray = [...initialCart, getNewItem];
      if (cart) {
        localStorage.setItem("cart", JSON.stringify(cartArray));
        setCartLenght([...initialCart, getNewItem]);
      }
    }
  }, [getNewItem]);

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
      <Navbar cartLenght={cartLenght} />
      <Main
        categories={categories}
        filterMenu={filterMenu}
        items={items}
        cart={cart}
        setCart={setCart}
        setGetNewItem={setGetNewItem}
      />
      <Footer />
    </div>
  );
}
