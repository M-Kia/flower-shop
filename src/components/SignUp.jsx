import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";

export default function SignUp(props) {
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
                  <span style={{ cursor: "pointer", color: "#a05841" }}>
                    sign in
                  </span>
                </label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      {/* <Login
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          props.onHide();
        }}
      /> */}
    </div>
  );
}
