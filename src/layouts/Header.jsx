import React, { useState, useEffect, useContext, useRef } from "react";
import background from "../assets/images/pexels-huy-phan-3076899.jpg";
import ShopContext from "../context/ShopContext";
import SingleProductCard from "../components/SingleProductCard";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Login from "../components/Login";

export default function Header() {
  const {
    collection,
    allProducts,
    setCollection,
    type,
    setType,
    scrollToAbout,
    scrollToFAQ,
  } = useContext(ShopContext);

  const [checkText, setCheckText] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  let count = 0;
  allProducts.products.map((value) => (value.order ? count++ : ""));

  const router = useRouter();

  useEffect(() => {
    const Text = setTimeout(() => {
      setCheckText((checkText) => !checkText);
    }, 5000);

    return () => clearInterval(Text);
  }, [checkText]);

  return (
    <div className="Header">
      <div className="text-center mt-3 fs-2" style={{ color: "#a05841" }}>
        Welcome to Secret Root
      </div>
      <div
        className="d-flex justify-content-between mt-3 px-4 py-2"
        style={{ backgroundColor: "#ffffff", color: "#a05841" }}
      >
        <div className="d-flex align-items-center" style={{ width: "30%" }}>
          <i className="bi bi-search me-2"></i>
          <input
            type="text"
            placeholder="Search..."
            className="text-start w-100"
            style={{ border: "none" }}
          />
        </div>

        <div className="d-flex">
          <div>
            <Link href={"/profile"} style={{ color: "inherit" }}>
              <i
                className="bi bi-person-circle me-2"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </Link>
            {/* <Login
              className="d-flex align-items-center justify-content-end"
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                color: "inherit",
              }}
            /> */}
          </div>

          <div className="ms-5" style={{ cursor: "pointer" }}>
            <i
              className="bi bi-bag"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Secret Root
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  href=""
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  store
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/collection"
                      onClick={(e) => {
                        setCollection(true);
                        setType(1);
                      }}
                    >
                      cactus
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/collection"
                      onClick={(e) => {
                        setCollection(true);
                        setType(2);
                      }}
                    >
                      plants
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/collection"
                      onClick={(e) => {
                        setCollection(true);
                        setType(3);
                      }}
                    >
                      succulent
                    </Link>
                  </li>
                </ul>
              </li>
              <a
                className="nav-link"
                onClick={() => scrollToAbout()}
                style={{ cursor: "pointer" }}
              >
                about
              </a>
              <a
                className="nav-link"
                onClick={() => scrollToFAQ()}
                style={{ cursor: "pointer" }}
              >
                FAQ
              </a>
              <a className="nav-link disabled">entertainment</a>
            </div>
          </div>
          <div
            style={{ fontSize: "larger", color: "#a05841", fontWeight: "600" }}
          >
            {checkText
              ? "We Deliver to Your Doorstep"
              : "Call Us Now! 123-456-7890"}
          </div>
        </div>
      </nav>

      <div
        className="card text-bg-dark headerimage"
        style={{ border: "none", position: "relative" }}
      >
        <img
          src={
            router.pathname === "/"
              ? background.src
              : router.pathname === "/collection" && type === 0
              ? allProducts.headerAll
              : router.pathname === "/collection" && type === 1
              ? allProducts.headerCactus
              : router.pathname === "/collection" && type === 2
              ? allProducts.headerPlant
              : allProducts.headerSucculent
          }
          className="card-img"
          alt="..."
          style={{
            height: "650px",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "black",
            opacity: "0.3",
          }}
        ></div>
        <div
          className="card-img-overlay"
          style={{
            position: "relative",
            padding: "270px 0px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h5
            className="card-title text-center fs-1"
            style={{ color: "#ffffff", letterSpacing: "5px" }}
          >
            Secret Root
          </h5>
          <h4 style={{ letterSpacing: "8px" }}>BRING NATURE INDOORS</h4>
          {collection ? (
            ""
          ) : (
            <Link
              href="/collection"
              className="btn shopbtn"
              onClick={(e) => {
                setCollection(true);
              }}
            >
              Shop Now
            </Link>
          )}
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end singleProduct"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ width: "15%", textAlign: "center" }}
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasRightLabel">
            Cart
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {count === 0 ? (
            <h4 className="mt-4">Cart is empty</h4>
          ) : (
            allProducts.products.map((value, index) =>
              value.order ? (
                <SingleProductCard value={value} index={index} />
              ) : (
                ""
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}
