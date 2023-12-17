import React from "react";
import { authApi } from "../../services/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const onLogout = async () => {
    await authApi.logout();
    navigate("/login");
  };

  const onNewBlog = () => {
    navigate("/blog");
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* <p>{user.follower}</p>
        <p>{user.following}</p> */}
        <p>No blogs</p>
        <div>
          <button className="mb-3 btn btn-dark">Follow</button>
        </div>
        <div>
          <button className="mb-3 btn btn-dark" onClick={onNewBlog}>
            New Blog
          </button>
        </div>
        <div>
          <button className="btn btn-dark" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
