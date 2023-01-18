import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";
import SingleProductCard from "./SingleProductCard";
export default function Collection() {
  const { type, allProducts } = useContext(ShopContext);
  return (
    <div className="collection text-center">
      {type === 0 ? (
        <div className="fs-1 mb-4">SHOP ALL</div>
      ) : type === 1 ? (
        <div className="fs-1 mb-4">CACTUSES</div>
      ) : type === 2 ? (
        <div className="fs-1 mb-4">PLANTS</div>
      ) : type === 3 ? (
        <div className="fs-1 mb-4">SUCCULENTS</div>
      ) : (
        ""
      )}
      <div
        // className="d-flex flex-wrap"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 400px)",
          gridGap: "1rem",
          justifyContent: "space-between",
        }}
      >
        {type === 0
          ? allProducts.products.map((value, index) => (
              <SingleProductCard value={value} index={index} />
            ))
          : allProducts.products.map((value, index) =>
              value.relatedCode === type ? (
                <SingleProductCard value={value} index={index} />
              ) : (
                ""
              )
            )}
      </div>
    </div>
  );
}
