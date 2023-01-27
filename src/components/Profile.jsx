import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";
import SingleProductCard from "./SingleProductCard";
import AuthenticationContext from "../context/AuthenticationContext";

export default function Profile() {
  const { userInfo } = useContext(AuthenticationContext);

  const { allProducts } = useContext(ShopContext);
  const [edit, setEdit] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setpassword] = useState("");

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
        productCode: 16,
      },
      {
        productCode: 14,
      },
      {
        productCode: 11,
      },
      {
        productCode: 3,
      },
    ],
  };

  const onSaveHandler = () => {
    //handle save button click
    console.log("here");
  };
  const RemoveHandler = () => {
    //handle remove favorite button click
  };

  useEffect(() => {
    setFirstname(userInfo.firstname);
    setLastname(userInfo.lastname);
    setPhone(userInfo.mobile);
    setEmail(userInfo.email);
  });

  return (
    <div className="row col-12 justify-content-center my-5">
      <div
        className="col-6 py-4 px-2"
        style={{ backgroundColor: "#ffffff", color: "#a05841" }}
      >
        <div className="col-12 row px-4">
          <div className="d-flex justify-content-between mb-3">
            <div>
              {edit ? (
                <i
                  className="bi bi-save"
                  style={{
                    color: "#a05841",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                  onClick={(e) => onSaveHandler()}
                ></i>
              ) : (
                ""
              )}
            </div>
            <div>
              {edit ? (
                <i
                  class="bi bi-backspace"
                  style={{
                    color: "#a05841",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                  onClick={(e) => setEdit(false)}
                ></i>
              ) : (
                <i
                  className="bi bi-pencil-square"
                  style={{
                    color: "#a05841",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                  onClick={(e) => setEdit(!edit)}
                ></i>
              )}
            </div>
          </div>
          <label htmlFor="firstname" className="col-sm-2 mb-2 col-form-label">
            Firstname
          </label>
          <div className="col-sm-4 mb-2">
            <input
              type="text"
              className={`form-control${edit ? "" : "-plaintext"}`}
              id="firstname"
              readOnly={!edit}
              defaultValue={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <label htmlFor="lastname" className="col-sm-2 mb-2 col-form-label">
            Lastname
          </label>
          <div className="col-sm-4 mb-2">
            <input
              type="text"
              className={`form-control${edit ? "" : "-plaintext"}`}
              id="lastname"
              readOnly={!edit}
              defaultValue={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <label htmlFor="phone" className="col-sm-2 mb-2 col-form-label">
            Phone Number
          </label>
          <div className="col-sm-4 mb-2">
            <input
              type="text"
              className={`form-control${edit ? "" : "-plaintext"}`}
              id="phone"
              readOnly={!edit}
              defaultValue={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <label htmlFor="staticEmail" className="col-sm-2 mb-2 col-form-label">
            Email
          </label>
          <div className="col-sm-4 mb-2">
            <input
              type="email"
              className={`form-control${edit ? "" : "-plaintext"}`}
              id="staticEmail"
              readOnly={!edit}
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* <label htmlFor="password" className="col-sm-2 mb-2 col-form-label">
            Password
          </label>
          <div className="col-sm-4 mb-2">
            <input
              type="password"
              className={`form-control${edit ? "" : "-plaintext"}`}
              id="password"
              readOnly={!edit}
              defaultValue={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div> */}
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
                  <div className="col-3 text-center mb-5" key={index}>
                    <div className="fs-5 text-start">
                      Date Of Order: {formattedDate + " " + formattedTime}{" "}
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
        <hr />
        <div className="col-12 mt-2 px-4 singleProduct">
          <div className="fs-3">Favorites:</div>
          <br />
          <div className="row">
            {allProducts.products.map((value, index) => {
              let val;
              if (
                data.favorites.findIndex((v) => {
                  if (v.productCode === value.code) {
                    val = v;
                    return true;
                  }
                  return false;
                }) !== -1
              ) {
                return (
                  <div className="col-3 text-center mb-5" key={index}>
                    <div className="text-end" onClick={(e) => RemoveHandler()}>
                      <i
                        class="bi bi-trash3"
                        style={{
                          color: "#a05841",
                          fontSize: "1.5rem",
                          cursor: "pointer",
                        }}
                      ></i>
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
        <hr />
        <div className="text-center fs-5">Have Good Day ❤</div>
      </div>
    </div>
  );
}
