import React from "react";
import HomePage from "../Front/pages/HomePage";
import Header from "../Front/layouts/Header";
import Footer from "../Front/layouts/Footer";
import { ShopContextProvider } from "../Front/context/ShopContext";
import Link from "next/link";
import Collection from "../Front/pages/Collection";
import SingleProduct from "../Front/pages/SingleProduct";
export default function Home() {
  return (
    <div className="mx-5">
      <ShopContextProvider>
        <Header />
        <HomePage />
        <Footer />
      </ShopContextProvider>
    </div>
  );
}
