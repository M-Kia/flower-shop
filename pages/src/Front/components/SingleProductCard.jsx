import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";

export default function SingleProductCard({ value, index }) {
  const { setSingleProduct } = useContext(ShopContext);

  return (
    <div className="card" key={index}>
      <img
        src={value.pictures[0].value}
        className="card-img-top"
        alt="..."
        style={{ cursor: "pointer" }}
        onClick={(e) => setSingleProduct(value)}
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ cursor: "pointer" }}
          onClick={(e) => setSingleProduct(value)}
        >
          C{value.code} : {value.name}
        </h5>
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
      <a
        href="#"
        className="btn shopbtn"
        style={{ marginTop: "0px", width: "100%" }}
        onClick={(e) => {
          //change value order to true
        }}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Add to Cart
      </a>
    </div>
  );
}
