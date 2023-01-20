import React, { useContext, useEffect, useRef } from "react";
import succulent from "../assets/images/succulent.webp";
import plant from "../assets/images/plant.webp";
import cactus from "../assets/images/cactus.webp";
import plantInOffice from "../assets/images/pexels-cup-of-couple-6177607.jpg";
import plantPot from "../assets/images/pexels-ylanite-koppens-796620.jpg";
import garden from "../assets/images/pexels-deeana-arts-2565222.jpg";
import contactBackground from "../assets/images/pexels-lisa-fotios-1266302.jpg";
import Link from "next/link";
import ShopContext from "../context/ShopContext";
export default function MainPageBody() {
  const { data, collection, setCollection, setType, aboutRef, faqRef } =
    useContext(ShopContext);

  useEffect(() => {
    console.log("HERE");
    console.log(data);
    console.log(collection);
  }, [data]);

  return (
    <div className="mainPageBody d-flex flex-column">
      <div className="d-flex justify-content-between">
        <div className="card text-bg-dark">
          <img src={cactus.src} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title">Cactuses</h5>
            <p className="card-text">__</p>
            <Link
              href="/collection"
              className="btn shopbtn"
              onClick={(e) => {
                setCollection(true);
                setType(1);
              }}
            >
              Shop Collection
            </Link>
          </div>
        </div>
        <div className="card text-bg-dark">
          <img src={plant.src} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title">Plants</h5>
            <p className="card-text">__</p>
            <Link
              href="/collection"
              className="btn shopbtn"
              onClick={(e) => {
                setCollection(true);
                setType(2);
              }}
            >
              Shop Collection
            </Link>
          </div>
        </div>
        <div className="card text-bg-dark">
          <img src={succulent.src} className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h5 className="card-title">Succulents</h5>
            <p className="card-text">__</p>
            <Link
              href="/collection"
              className="btn shopbtn"
              onClick={(e) => {
                setCollection(true);
                setType(3);
              }}
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column about" ref={aboutRef}>
        <div className="row">
          <div
            className="col-6 align-self-center"
            style={{ padding: "0px 200px" }}
          >
            <h5 style={{ letterSpacing: "5px" }}>ABOUT US</h5>
            <p className="card-text">__</p>
            <h7>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
              <br />
              <br /> This is a great space to write long text about your company
              and your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide.
            </h7>
          </div>
          <img className="col-3" src={plantInOffice.src} />
          <img className="col-3" src={plantPot.src} />
        </div>
        <div className="row">
          <img className="col-6" src={garden.src} style={{ height: "650px" }} />
          <div
            className="col-6"
            style={{ backgroundColor: "#123132", padding: "186px 200px" }}
          >
            <div
              style={{
                color: "white",
                fontSize: "70px",
              }}
            >
              BUY ONLINE NOW & GET 10% OFF !
            </div>
            <Link
              href="/collection"
              className="btn shopbtn"
              onClick={(e) => {
                setCollection(true);
              }}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="card contact" ref={faqRef}>
        <img
          src={contactBackground.src}
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
        {/* <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "black",
            opacity: "0.3",
          }}
        ></div> */}
        <div
          className="card-img-overlay row"
          style={{
            position: "relative",
            padding: "150px 0px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{ backgroundColor: "#ffffffbd", paddingTop: "40px" }}
            className="col-5"
          >
            <h5 className="text-center fs-4" style={{ letterSpacing: "5px" }}>
              FOR SPECIAL REQUESTS & ORDERS
            </h5>
            <p className="card-text">__</p>

            <div className="row" style={{ textAlign: "initial" }}>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    Firstname *
                  </label>
                  <input type="text" className="form-control" id="firstname" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Lastname *
                  </label>
                  <input type="text" className="form-control" id="lastname" />
                </div>
              </div>
            </div>

            <div className="mb-3" style={{ textAlign: "initial" }}>
              <label htmlFor="email" className="form-label">
                Email address *
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                // placeholder="name@example.com"
              />
            </div>

            <div className="mb-3" style={{ textAlign: "initial" }}>
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input type="phone" className="form-control" id="phone" />
            </div>

            <div className="mb-3" style={{ textAlign: "initial" }}>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="8"
              ></textarea>
            </div>

            <div
              className="btn shopbtn"
              style={{ margin: "0px 0px 40px 0px", width: "100%" }}
            >
              send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
