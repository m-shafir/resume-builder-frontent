import React from "react";

function PageNotFound() {
  return (
    <>
      <div
        className="container text-center mt-5 py-5"
        style={{ height: "80vh" }}
      >
        <div className="row">
          <div>
            <h1 className="display-1">404</h1>
            <p className="lead">
              Oops! The page you’re looking for doesn’t exist.
            </p>
            <button className="btn btn-primary my-5">Go to Homepage</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
