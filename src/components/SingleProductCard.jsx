import React, { useContext, useEffect } from "react";
import ShopContext from "../context/ShopContext";
import Link from "next/link";

export default function SingleProductCard({ value, index, order = false }) {
  const { setSingleProduct, setAllProducts } = useContext(ShopContext);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="card" key={index}>
      <Link href="./single-product">
        <img
          src={value.pictures[0].value}
          className="card-img-top"
          alt="..."
          style={{ cursor: "pointer" }}
          onClick={(e) => setSingleProduct(value)}
        />
      </Link>
      <div className="card-body">
        <Link
          href="./single-product"
          className="card-title"
          style={{ cursor: "pointer" }}
          onClick={(e) => setSingleProduct(value)}
        >
          C{value.code} : {value.name}
        </Link>

        {value.discount !== "" ? (
          <div className="d-flex justify-content-evenly">
            <div className="card-text text-decoration-line-through">
              ${value.price}.00
            </div>
            <div className="card-text">
              ${value.price - (value.price * value.discount) / 100}.00
            </div>
          </div>
        ) : (
          <div className="card-text">${value.price}.00</div>
        )}
      </div>
      {order ? (
        ""
      ) : value.order ? (
        <div
          className="btn shopbtn"
          style={{ marginTop: "0px", width: "100%" }}
          onClick={(e) => {
            //change value order to true
            setAllProducts((prev) => ({
              ...prev,
              products: prev.products.map((v) => {
                if (v.code === value.code) {
                  v.order = false;
                }
                return v;
              }),
            }));
          }}
        >
          Remove from Cart
        </div>
      ) : (
        <div
          className="btn shopbtn"
          style={{ marginTop: "0px", width: "100%" }}
          onClick={(e) => {
            //change value order to true
            setAllProducts((prev) => ({
              ...prev,
              products: prev.products.map((v) => {
                if (v.code === value.code) {
                  v.order = true;
                }
                return v;
              }),
            }));
          }}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Add to Cart
        </div>
      )}
    </div>
  );
}
