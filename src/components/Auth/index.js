import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth({ formType }) {
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    repass: "",
  });

  const navigate = useNavigate();

  const notUser = () => {
    navigate("/signup");
  };
  const alreadyUser = () => {
    navigate("/login");
  };

  const onChangeInput = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div
        className="container"
        style={{
          width: "40%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {formType !== "login" && (
          <div className="form-floating mb-3">
            <input
              type="text"
              name="fname"
              className="form-control"
              placeholder="First Name"
              onChange={onChangeInput}
            />
            <label>First Name</label>
          </div>
        )}
        {formType !== "login" && (
          <div className="form-floating mb-3">
            <input
              type="text"
              name="lnakjhvkgme"
              className="form-control"
              placeholder="Last Name"
              onChange={onChangeInput}
            />
            <label>Last Name</label>
          </div>
        )}

        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={onChangeInput}
          />
          <label>Email address</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            name="pass"
            className="form-control"
            placeholder="Password"
            onChange={onChangeInput}
          />
          <label>Password</label>
        </div>

        {formType !== "login" && (
          <div className="form-floating">
            <input
              type="password"
              name="repass"
              className="form-control"
              placeholder="Confirm Password"
              onChange={onChangeInput}
            />
            <label>Confirm Password</label>
          </div>
        )}

        <button type="button" className="btn btn-primary m-3">
          {formType === "login" ? "Log In" : "Sign Up"}
        </button>

        <div>
          {formType === "login" ? (
            <p>
              Not a user? <span onClick={notUser}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already a user? <span onClick={alreadyUser}>Log In</span>{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Auth;
