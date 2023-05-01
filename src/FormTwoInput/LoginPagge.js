import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase-config/Firebase";

// import

const LoginPagge = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let submFunc = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .then((res) => console.log(res));
  };

  let emailFunc = (value) => {
    setEmail(value);
  };
  let passwordFunc = (value) => {
    setPassword(value);
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center">LOGINPAGE</h1>
        <form
          className="row g-3 needs-validation m-auto col-4"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            // submFunc()
          }}
        >
          <div className="col-12">
            <label htmlFor="validationCustom01" className="form-label">
              E-Mail
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              value={email}
              required
              onChange={(e) => {
                emailFunc(e.target.value);
              }}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-12">
            <label htmlFor="validationCustom02" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="validationCustom02"
              value={password}
              required
              onChange={(e) => {
                passwordFunc(e.target.value);
              }}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-12">
            <button
              className="btn btn-primary"
              type="button"
              onClick={submFunc}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPagge;
