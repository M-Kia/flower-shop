import React, { useState, useEffect, useContext } from "react";
import background from "../assets/images/pexels-huy-phan-3076899.jpg";
import planticon from "../assets/images/potted-plant.png";
import ShopContext from "../context/ShopContext";
export default function Header() {
  const [checkText, setCheckText] = useState(true);

  useEffect(() => {
    const Text = setTimeout(() => {
      setCheckText((checkText) => !checkText);
    }, 5000);

    return () => clearInterval(Text);
  }, [checkText]);
  const { collection, data, allProducts, setData, setCollection } =
    useContext(ShopContext);
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
          <div
            className="d-flex align-items-center justify-content-end"
            style={{ cursor: "pointer" }}
          >
            <i
              className="bi bi-person-circle me-2"
              style={{ fontSize: "1.5rem" }}
            ></i>
            <div>Log in</div>
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
          <a className="navbar-brand" href="#">
            Secret Root
          </a>
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
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  store
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      plants
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      cactus
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      succulent
                    </a>
                  </li>
                </ul>
              </li>
              <a className="nav-link" href="#">
                about
              </a>
              <a className="nav-link" href="#">
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
          src={!collection ? background.src : data.header}
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
          <div
            className="btn shopbtn"
            onClick={(e) => {
              setData(allProducts), setCollection(true);
            }}
          >
            Shop Now
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Offcanvas right
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">...</div>
      </div>
    </div>
  );
}
