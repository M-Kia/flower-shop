import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/Home.scss";
import "../assets/fonts/MyFont.css";
import { useEffect } from "react";
import Layout from "../layouts/Layout";
import { ShopContextProvider } from "../context/ShopContext";

export default function App({ Component, pageProps, data }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <ShopContextProvider data={data}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopContextProvider>
  );
}

export function getServerSideProps() {
  console.log("HERE");

  return {
    props: {
      data: ["Hello", "World", "!"],
    },
  };
}
