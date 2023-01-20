import axios from "axios";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function Login(props) {
  const [modalShow, setModalShow] = useState(0);

  const [phoneIn, setPhoneIn] = useState("");
  const [passwordIn, setPasswordIn] = useState("");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneUp, setPhoneUp] = useState("");
  const [passwordUp, setpasswordUp] = useState("");

  const loginApi = async () => {
    let result = await axios
      .post("/api/user/login", {
        mobile: phoneIn,
        password: passwordIn,
      })
      .then((res) => res.data);

    if (result.status) {
      console.log(result);
    }
  };

  return (
    <>
      <button {...props} onClick={() => setModalShow(1)}>
        <i
          className="bi bi-person-circle me-2"
          style={{ fontSize: "1.5rem" }}
        ></i>
        <div>Log in</div>
      </button>
      <Modal
        show={modalShow === 1}
        onHide={() => setModalShow(0)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="login text-center">
            <form>
              <i
                class="bi bi-person-circle mb-4"
                width="72"
                height="57"
                style={{ fontSize: "4rem" }}
              ></i>
              <h1 class="h3 mb-3 fw-normal">Sign in</h1>

              <div class="form-floating mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="phone"
                  onChange={(e) => setPhoneIn(e.target.value)}
                />
                <label for="floatingInput">Phone</label>
              </div>

              <div class="form-floating mb-2">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => setPasswordIn(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="checkbox mb-3">
                <label>
                  don't have an account?
                  <span
                    className="ms-1"
                    style={{ cursor: "pointer", color: "#a05841" }}
                    onClick={() => setModalShow(2)}
                  >
                    sign up
                  </span>
                </label>
              </div>
              <button
                class="w-100 shopbtn mt-0"
                type="submit"
                onClick={(e) => loginApi()}
              >
                Sign in
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={modalShow === 2}
        onHide={() => setModalShow(0)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="login text-center">
            <form>
              <i
                class="bi bi-person-circle mb-4"
                width="72"
                height="57"
                style={{ fontSize: "4rem" }}
              ></i>
              <h1 class="h3 mb-3 fw-normal">Sign up</h1>

              <div className="d-flex">
                <div class="form-floating mb-2 col-6">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="first name"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <label for="floatingInput">First Name</label>
                </div>

                <div class="form-floating mb-2 col-6">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="last name"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <label for="floatingInput">Last Name</label>
                </div>
              </div>

              <div class="form-floating mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="phone"
                  onChange={(e) => setPhoneUp(e.target.value)}
                />
                <label for="floatingInput">Phone</label>
              </div>

              <div class="form-floating mb-2">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-2">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => setpasswordUp(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="checkbox mb-3">
                <label>
                  have an account?
                  <span
                    className="ms-1"
                    style={{ color: "#a05841" }}
                    onClick={() => setModalShow(1)}
                  >
                    sign in
                  </span>
                </label>
              </div>
              <button class="w-100 shopbtn mt-0" type="submit">
                Sign up
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
