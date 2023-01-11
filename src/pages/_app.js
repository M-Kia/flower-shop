import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Front/assets/css/Home.scss";
import "../Front/assets/fonts/MyFont.css";
import { useEffect } from "react";
import Layout from "../Front/layouts/Layout";
import { ShopContextProvider } from "../Front/context/ShopContext";

export default function App({ Component, pageProps, data }) {
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
