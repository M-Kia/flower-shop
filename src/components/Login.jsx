import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function Login(props) {
  const [modalShow, setModalShow] = useState(0);

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
        size="lg"
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
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-2">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
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
              <button class="w-100 shopbtn mt-0" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={modalShow === 2}
        onHide={() => setModalShow(0)}
        size="lg"
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
                  />
                  <label for="floatingInput">First Name</label>
                </div>

                <div class="form-floating mb-2 col-6">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="last name"
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
                />
                <label for="floatingInput">Phone</label>
              </div>

              <div class="form-floating mb-2">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-2">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
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
