import React from "react";
import HomePage from "./src/Front/pages/HomePage";
import Header from "./src/Front/layouts/Header";
import Footer from "./src/Front/layouts/Footer";
import { ShopContextProvider } from "./src/Front/context/ShopContext";
import Link from "next/link";
import Collection from "./src/Front/pages/Collection";
import SingleProduct from "./src/Front/pages/SingleProduct";
export default function Home() {
  return (
    <div className="mx-5">
      <ShopContextProvider>
        <Header />

        {/* <HomePage /> */}
        {/* <Collection /> */}
        <SingleProduct />
        <Footer />
      </ShopContextProvider>
    </div>
  );
}
