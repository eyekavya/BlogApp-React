import React from "react";

function Blog() {
  return (
    <>
      <div>
        <div
          className="input-group input-group-lg my-5"
          style={{ width: "70%", margin: "0 auto" }}
        >
          <input
            type="text"
            className="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Enter a heading for your blog"
          />
        </div>
        <div
          className="form-group my-5"
          style={{ width: "70%", margin: "0 auto" }}
        >
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter your blog content"
          ></textarea>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button type="button" className="btn btn-primary">
          Publish Blog
        </button>
      </div>
    </>
  );
}

export default Blog;
