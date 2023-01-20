import React, { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";
import SingleProductCard from "./SingleProductCard";

export default function Profile() {
  const { allProducts } = useContext(ShopContext);
  const data = {
    firstname: "hedieh",
    lastname: "moshtaghi",
    phone: "09115181676",
    email: "moshtaghi.he@gmail.com",
    password: "123456",
    orders: [
      {
        productCode: "5",
      },
    ],
    favorites: [
      {
        productCode: "17",
      },
    ],
  };

  const [edit, setEdit] = useState(false);
  return (
    <div className="row col-6 justify-content-center my-5">
      <div
        className="col-12 row py-4 px-2"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="d-flex justify-content-between mb-3">
          <div>
            <i
              class="bi bi-save"
              style={{
                color: "#a05841",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            ></i>
          </div>
          <div>
            <i
              class="bi bi-pencil-square"
              style={{
                color: "#a05841",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={(e) => setEdit(!edit)}
            ></i>
          </div>
        </div>
        <label for="firstname" className="col-sm-2 mb-2 col-form-label">
          Firstname
        </label>
        <div className="col-sm-4 mb-2">
          <input
            type="text"
            className={`form-control${edit ? "" : "-plaintext"}`}
            id="firstname"
            readonly={!edit}
            value={data.firstname}
          />
        </div>

        <label for="lastname" className="col-sm-2 mb-2 col-form-label">
          Lastname
        </label>
        <div className="col-sm-4 mb-2">
          <input
            type="text"
            className={`form-control${edit ? "" : "-plaintext"}`}
            id="lastname"
            readonly={!edit}
            value={data.lastname}
          />
        </div>

        <label for="phone" className="col-sm-2 mb-2 col-form-label">
          Phone Number
        </label>
        <div className="col-sm-4 mb-2">
          <input
            type="text"
            className={`form-control${edit ? "" : "-plaintext"}`}
            id="phone"
            readonly={!edit}
            value={data.phone}
          />
        </div>

        <label for="staticEmail" className="col-sm-2 mb-2 col-form-label">
          Email
        </label>
        <div className="col-sm-4 mb-2">
          <input
            type="email"
            className={`form-control${edit ? "" : "-plaintext"}`}
            id="staticEmail"
            readonly={!edit}
            value={data.email}
          />
        </div>

        <label for="password" className="col-sm-2 mb-2 col-form-label">
          Password
        </label>
        <div className="col-sm-4 mb-2">
          <input
            type="password"
            className={`form-control${edit ? "" : "-plaintext"}`}
            id="password"
            readonly={!edit}
            value={data.password}
          />
        </div>
      </div>

      <div className="col-12">
        {allProducts.products.map((value) => {
          data.orders.map((v) =>
            value.id == v.productCode ? (
              <div>
                <SingleProductCard value={value} index={index} />
              </div>
            ) : (
              ""
            )
          );
        })}
      </div>
    </div>
  );
}
