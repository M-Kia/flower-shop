import React from "react";
import background from "../assets/images/pexels-huy-phan-3076899.jpg";
export default function Header() {
  return (
    <div className="Header">
      <div className="text-center mt-3 fs-2" style={{ color: "#a05841" }}>
        Welcome to Secret Root
      </div>
      <div
        className="d-flex justify-content-between mt-3 px-4 py-2"
        style={{ backgroundColor: "#ffffff", color: "#a05841" }}
      >
        <div className="d-flex align-items-center">
          <i className="bi bi-search me-2"></i>
          <input
            type="text"
            placeholder="Search..."
            className="text-start"
            style={{ border: "none" }}
          />
        </div>

        <div className="d-flex">
          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i
              className="bi bi-person-circle me-2"
              style={{ fontSize: "1.5rem" }}
            ></i>
            <div>Log in</div>
          </div>
          <div className="ms-5" style={{ cursor: "pointer" }}>
            <i className="bi bi-bag" style={{ fontSize: "1.5rem" }}></i>
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
                  فروشگاه
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      گیاهان آپارتمانی
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      کاکتوس
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      ساکولنت
                    </a>
                  </li>
                </ul>
              </li>
              <a className="nav-link" href="#">
                درباره ما
              </a>
              <a className="nav-link" href="#">
                پرسش و پاسخ
              </a>
              <a className="nav-link disabled">سرگرمی</a>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="card text-bg-dark"
        style={{ boxShadow: "4px 4px 20px 0px #0000007d", border: "none" }}
      >
        <img
          src={background.src}
          className="card-img"
          alt="..."
          style={{ height: "650px", objectFit: "cover" }}
        />
        <div className="card-img-overlay">
          <h5
            className="card-title text-center fs-1"
            style={{ margin: "200px 0px", color: "#000000" }}
          >
            EVERYTHING THAT GROWS IN OUR GARDEN
          </h5>
        </div>
      </div>
    </div>
  );
}
