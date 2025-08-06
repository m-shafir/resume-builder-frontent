import React from "react";
import { Link } from "react-router-dom";

function ResumeGenerator() {
  return (
    <>
      <Main />
    </>
  );
}

function Main() {
  return (
    <main className="bg-warning p-5">
      <h1 className="text-center py-3">
        create a job-winning Resume in minutes
      </h1>
      <div className="w-100 d-flex justify-content-center">
        <Link to={"/Form"}>
          <button className="btn btn-light">Lest's Start</button>
        </Link>
      </div>
    </main>
  );
}

export default ResumeGenerator;
