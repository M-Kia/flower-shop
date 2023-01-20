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
        productCode: 5,
        date: 1611379920000,
      },
      {
        productCode: 6,
        date: 1611379920000,
      },
      {
        productCode: 12,
        date: 1611379920000,
      },
      {
        productCode: 17,
        date: 1611379920000,
      },
    ],
    favorites: [
      {
        productCode: 17,
      },
    ],
  };

  const [edit, setEdit] = useState(false);

  return (
    <div className="row col-12 justify-content-center my-5">
      <div
        className="col-6 py-4 px-2"
        style={{ backgroundColor: "#ffffff", color: "#a05841" }}
      >
        <div className="col-12 row px-4">
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
        <hr />
        <div className="col-12 mt-2 px-4 singleProduct">
          <div className="fs-3">Orders:</div>
          <br />
          <div className="row">
            {allProducts.products.map((value, index) => {
              let val;
              if (
                data.orders.findIndex((v) => {
                  if (v.productCode === value.code) {
                    val = v;
                    return true;
                  }
                  return false;
                }) !== -1
              ) {
                const date = new Date(val.date);
                const formattedDate = date.toLocaleString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                });
                const formattedTime = date.toLocaleString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hourCycle: "h24",
                });
                return (
                  <div className="col-4 text-center mb-5">
                    <div>
                      Date Of Order : {formattedDate + " " + formattedTime}{" "}
                    </div>
                    <SingleProductCard
                      value={value}
                      index={index}
                      order={true}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
