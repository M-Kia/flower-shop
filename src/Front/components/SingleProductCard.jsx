import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";
import Link from "next/link";

export default function SingleProductCard({ value, index }) {
  const { setSingleProduct, setAllProducts } = useContext(ShopContext);

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
      {value.order ? (
        <div
          className="btn shopbtn"
          style={{ marginTop: "0px", width: "100%" }}
          onClick={(e) => {
            //change value order to true
            setAllProducts((prev) => ({
              ...prev,
              products: prev.products.map((v) => {
                if (v.code === value.code) {
                  v.order = !v.order;
                }
                return v;
              }),
            }));
          }}
          // data-bs-toggle="offcanvas"
          // data-bs-target="#offcanvasRight"
          // aria-controls="offcanvasRight"
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
                  v.order = !v.order;
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
