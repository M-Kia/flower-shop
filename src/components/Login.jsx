import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import SignUp from "../components/SignUp";

export default function Login(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Modal
        {...props}
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
                    style={{ cursor: "pointer", color: "#a05841" }}
                    onClick={() => setModalShow(true)}
                  >
                    sign up
                  </span>
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <SignUp
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          props.onHide();
        }}
      />
    </div>
  );
}
