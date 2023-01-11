import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="d-flex justify-content-evenly">
        <div>
          <div className="title">OUR STORE</div>
          <div>
            Address: 500 Terry Francois
            <br /> Street San Francisco, CA 94158 <br />
            Phone: 123-456-7890
            <br /> Email: info@mysite.com
          </div>
        </div>
        <div>
          <div className="title">OPENING HOURS</div>
          <div>
            Mon - Fri: 7am - 10pm <br />
            ​​Saturday: 8am - 10pm
            <br /> ​Sunday: 8am - 11pm
          </div>
        </div>
        <div>
          <div className="title">HELP</div>
          <div>
            <a href="#">Shipping & Returns</a>
          </div>
          <div>
            <a href="#">Privacy Policy</a>
          </div>
          <div>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>
      <div className="subscribe">
        <div className="title">Subscribe</div>
        <div className="mb-3">
          <div className="d-flex align-items-end justify-content-center">
            <div>
              <label htmlFor="email" className="form-label">
                Enter your email here *
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="btn shopbtn">Subscribe Now</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center accounts mt-5">
        <a href="#">
          <i className="bi bi-instagram">SecretRoot</i>
        </a>
        <a href="#">
          <i className="bi bi-telegram">SecretRoot</i>
        </a>
        <a href="#">
          <i className="bi bi-pinterest">SecretRoot</i>
        </a>
      </div>
    </div>
  );
}
