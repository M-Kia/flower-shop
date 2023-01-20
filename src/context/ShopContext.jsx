import React, { useRef, useState } from "react";
import c1 from "../assets/images/c1.webp";
import c2 from "../assets/images/c2.webp";
import c3 from "../assets/images/c3.webp";
import c4 from "../assets/images/c4.webp";
import c5 from "../assets/images/c5.webp";
import c6 from "../assets/images/c6.webp";
import p1 from "../assets/images/p1.webp";
import p2 from "../assets/images/p2.webp";
import p3 from "../assets/images/p3.webp";
import p4 from "../assets/images/p4.webp";
import p5 from "../assets/images/p5.webp";
import p6 from "../assets/images/p6.webp";
import s1 from "../assets/images/s1.webp";
import s2 from "../assets/images/s2.webp";
import s3 from "../assets/images/s3.webp";
import s4 from "../assets/images/s4.webp";
import s5 from "../assets/images/s5.webp";
import s6 from "../assets/images/s6.webp";
import cactusCover from "../assets/images/cactusCover.jpg";
import plantCover from "../assets/images/plantCover.jpg";
import succulentCover from "../assets/images/succulentCover.jpg";
import allCover from "../assets/images/allCover.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

const ShopContext = React.createContext({
  cactuses: {
    header: "",
    products: [
      {
        name: "product name",
        relatedCode: "",
        code: "",
        pictures: [{ value: "" }],
        price: "",
        stock: "",
        order: false,
        favorite: false,
        productInfo: "",
      },
    ],
  },
  plants: {
    header: "",
    products: [
      {
        name: "product name",
        relatedCode: "",
        code: "",
        pictures: [{ value: "" }],
        price: "",
        stock: "",
        order: false,
        favorite: false,
        productInfo: "",
      },
    ],
  },
  succulents: {
    header: "",
    products: [
      {
        name: "product name",
        relatedCode: "",
        code: "",
        pictures: [{ value: "" }],
        price: "",
        stock: "",
        order: false,
        favorite: false,
        productInfo: "",
      },
    ],
  },
  data: {
    header: "",
    products: [
      {
        name: "product name",
        relatedCode: "",
        code: "",
        pictures: [{ value: "" }],
        price: "",
        stock: "",
        order: false,
        favorite: false,
        productInfo: "",
      },
    ],
  },
  allProducts: "",
  collection: "",
  singleProduct: {
    name: "product name",
    relatedCode: "",
    code: "",
    pictures: [{ value: "" }],
    price: "",
    stock: "",
    order: false,
    favorite: false,
    productInfo: "",
  },
  type: "",
  aboutRef: null,
  faqRef: null,
  scrollToAbout: () => {},
  scrollToFAQ: () => {},
  setData: (state) => {},
  setAllProducts: (state) => {},
  setCactuses: (state) => {},
  setPlants: (state) => {},
  setSucculents: (state) => {},
  setCollection: (state) => {},
  setSingleProduct: (state) => {},
  setType: (state) => {},
});

export default ShopContext;

export const ShopContextProvider = ({ children, data: kData }) => {
  const router = useRouter();
  const aboutRef = useRef(null);
  const faqRef = useRef(null);

  const [collection, setCollection] = useState(false);
  //type:0 => all , 1 => cactus , 2 => plants , 3 => succulents
  const [type, setType] = useState(0);
  const [singleProduct, setSingleProduct] = useState({
    name: "product name",
    relatedCode: 1,
    code: 1,
    pictures: [{ value: c1.src }, { value: c1.src }, { value: c1.src }],
    price: 30,
    discount: 10,
    stock: 20,
    order: false,
    favorite: false,
    productInfo:
      "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
  });
  const [allProducts, setAllProducts] = useState({
    headerAll: allCover.src,
    headerCactus: cactusCover.src,
    headerPlant: plantCover.src,
    headerSucculent: succulentCover.src,
    products: [
      {
        name: "product name",
        relatedCode: 1,
        code: 1,
        pictures: [{ value: c1.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 1,
        code: 2,
        pictures: [{ value: c2.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 1,
        code: 3,
        pictures: [{ value: c3.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 1,
        code: 4,
        pictures: [{ value: c4.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 1,
        code: 5,
        pictures: [{ value: c5.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 1,
        code: 6,
        pictures: [{ value: c6.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 2,
        code: 7,
        pictures: [{ value: p1.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 2,
        code: 8,
        pictures: [{ value: p2.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 2,
        code: 9,
        pictures: [{ value: p3.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 2,
        code: 10,
        pictures: [{ value: p4.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 2,
        code: 11,
        pictures: [{ value: p5.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 2,
        code: 12,
        pictures: [{ value: p6.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },

      {
        name: "product name",
        relatedCode: 3,
        code: 13,
        pictures: [{ value: s1.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 3,
        code: 14,
        pictures: [{ value: s2.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 3,
        code: 15,
        pictures: [{ value: s3.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 3,
        code: 16,
        pictures: [{ value: s4.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 3,
        code: 17,
        pictures: [{ value: s5.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
      {
        name: "product name",
        relatedCode: 3,
        code: 18,
        pictures: [{ value: s6.src }],
        price: 30,
        discount: 10,
        stock: 20,
        order: false,
        favorite: false,
        productInfo:
          "Mollit id reprehenderit incididunt nulla commodo non exercitation est anim ad dolore et adipisicing. Excepteur adipisicing ex ad anim esse aute culpa do. Esse enim tempor in laborum exercitation laborum sint occaecat cillum sint veniam voluptate laboris nulla. Officia ullamco ipsum in aliqua do fugiat ipsum.",
      },
    ],
  });
  const [data, setData] = useState({
    name: "",
    header: "",
    products: [
      {
        name: "product name",
        relatedCode: "",
        code: "",
        pictures: [{ value: "" }],
        price: "",
        stock: "",
        order: false,
        favorite: false,
        productInfo: "",
      },
    ],
  });

  const scrollToAbout = () => {
    if (["/single-product", "/collection"].includes(router.pathname)) {
      router.push("/", undefined, { shallow: true });
      setTimeout(() => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFAQ = () => {
    if (["/single-product", "/collection"].includes(router.pathname)) {
      router.push("/", undefined, { shallow: true });
      setTimeout(() => {
        faqRef.current.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const changeType = (state) => {
    console.log({ state });
    setType(state);
  };

  return (
    <ShopContext.Provider
      value={{
        collection,
        allProducts,
        singleProduct,
        type,
        setCollection,
        setAllProducts,
        setSingleProduct,
        setType: changeType,
        aboutRef,
        faqRef,
        scrollToAbout,
        scrollToFAQ,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
