import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";
import SingleProductCard from "./SingleProductCard";
export default function Collection() {
  const { data, setData, setSingleProduct } = useContext(ShopContext);
  // console.log(data);
  return (
    <div className="collection text-center">
      {data.name === "allProducts" ? (
        <div className="fs-1 mb-4">SHOP ALL</div>
      ) : data.name === "cactuses" ? (
        <div className="fs-1 mb-4">CACTUSES</div>
      ) : data.name === "plants" ? (
        <div className="fs-1 mb-4">PLANTS</div>
      ) : data.name === "succulents" ? (
        <div className="fs-1 mb-4">SUCCULENTS</div>
      ) : (
        ""
      )}
      <div className="d-flex flex-wrap">
        {data.products.map((value, index) => {
          return <SingleProductCard value={value} index={index} />;
        })}
      </div>
    </div>
  );
}
