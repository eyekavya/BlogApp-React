import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../services/auth";
import { userServices } from "../../services/userServices";

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

  const onClickSubmit = async () => {
    // await postData();
    let data = {};

    if (formType === "login") {
      data = await authApi.loginUser({
        email: formValues.email,
        password: formValues.pass,
      });
      // localStorage.setItem("user", JSON.stringify(data));
    } else {
      data = await authApi.signupUser({
        email: formValues.email,
        password: formValues.pass,
      });

      var newProviderData = {
        displayName: `${formValues.fname}  ${formValues.lname}`,
        // photoURL: "https://example.com/john_doe_photo.jpg",
      };
      await authApi.updateUser(newProviderData);

      await userServices.addUser(data?.user?.uid, {
        name: `${formValues.fname}  ${formValues.lname}`,
        email: formValues.email,
        follower: 0,
        following: 0,
        profilepic: "",
      });
    }

    const getUSerData = await userServices.getUser(data?.user?.uid);
    localStorage.setItem("user", JSON.stringify(getUSerData));
    localStorage.setItem("uid", data?.user?.uid);

    navigate("/profile");
  };

  // async function postData() {
  //   const url = `${process.env.REACT_APP_API_URL}/api/auth/${
  //     formType === "login" ? "login" : "signup"
  //   }`;
  //   const data = { email: formValues.email, password: formValues.pass };

  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   console.log(response.json);
  // }

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
              name="lname"
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

        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={onClickSubmit}
        >
          {formType === "login" ? "Log In" : "Sign Up"}
        </button>

        <div>
          {formType === "login" ? (
            <p>
              Not a user?{" "}
              <span
                onClick={notUser}
                style={{ color: "#3194f7", cursor: "pointer" }}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              Already a user?{" "}
              <span
                onClick={alreadyUser}
                style={{ color: "#3194f7", cursor: "pointer" }}
              >
                Log In
              </span>{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Auth;
