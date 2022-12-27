import React from "react";
import HomePage from "./src/Front/pages/HomePage";
import Header from "./src/Front/layouts/Header";
import Footer from "./src/Front/layouts/Footer";
export default function Home() {
  return (
    <div className="mx-5">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
