import React, { useContext } from "react";
import ShopContext from "../context/ShopContext";

export default function Collection() {
  const { data, setData } = useContext(ShopContext);
  console.log(data);
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
          return (
            <div className="card" key={index}>
              <img
                src={value.pictures[0].value}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  C {value.code}: {value.name}
                </h5>
                {value.discount !== "" ? (
                  <div className="d-flex justify-content-between">
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
              >
                Add to Cart
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
