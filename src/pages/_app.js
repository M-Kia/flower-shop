import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/Home.scss";
import "../assets/fonts/MyFont.css";
import { useEffect } from "react";
import Layout from "../layouts/Layout";
import { ShopContextProvider } from "../context/ShopContext";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <ShopContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopContextProvider>
  );
}
