import React from "react";

function Auth() {
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
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="First Name"
          />
          <label>First Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Last Name"
          />
          <label>Last Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>
        <button type="button" className="btn btn-primary mt-3">
          Sign up
        </button>
      </div>
    </>
  );
}

export default Auth;
