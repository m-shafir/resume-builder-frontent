import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Main />
      <Tools />
      <Testimony />
    </>
  );
}

function Main() {
  return (
    <main
      className="container-fluid p-4 d-flex align-items-center position-relative "
      style={{
        height: "60vh",
        backgroundImage:
          "url(https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="position-absolute z-1 bg-secondary "
        style={{
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          opacity: ".4",
        }}
      ></div>
      <div
        className="position-absolute z-2 shadow-lg py-5 px-4 rounded-3 text-center"
        style={{
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          backgroundColor: "#e8e0e03b",
        }}
      >
        <h2 className="fw-semibold text-capitalize">Designed to get hired</h2>
        <p className="my-4 fw-medium text-capitalize fs-5 lead">
          Your skills,your story,your next job - all in one
        </p>
        <Link to={"/Resumegenerator"}>
          <button
            style={{ backgroundColor: "#4F1C51" }}
            className="btn text-light rounded-1 text-uppercase px-3"
          >
            make your resume
          </button>
        </Link>
      </div>
    </main>
  );
}

function Tools() {
  return (
    <section className="container py-5">
      <h2 className="display-6 fw-semibold text text-center mb-5">Tools</h2>
      <div className="row">
        <div className="col">
          <ul>
            <Item
              head="resume"
              data="Create unlimited professional cover letters"
            />
            <Item
              head="cover letters"
              data="easily write professional cover letters"
            />
            <Item
              head="jobs"
              data="automatically recieve new and relevant job postings"
            />
            <Item
              head="applications"
              data="effortlessly manage and track your application in an organize manner"
            />
          </ul>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center">
            <img
              src="https://images.pexels.com/photos/7651559/pexels-photo-7651559.jpeg"
              alt="portfolio-image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ head, data }) {
  return (
    <>
      <li className="list-inline-item">
        <div>
          <h5 className="text-capitalize fw-bold">{head}</h5>
          <p className="text-capitalize">{data}</p>
        </div>
      </li>
    </>
  );
}

function Testimony() {
  return (
    <section className="container py-5 mt-5">
      <h2 className="display-6 fw-semibold text text-center mb-5">Testimony</h2>
      <div className="row">
        <div className="col">
          <h3>Preferred by Professionals Worldwide</h3>
          <p className="mt-3 lead">
            Recognized across industries for delivering reliable, innovative
            digital solutions, our company is preferred by professionals
            worldwide. From intuitive user experiences to scalable web
            applications, we focus on quality, performance, and precision.
          </p>
        </div>
        <div className="col">
          <div className="d-flex my-2 justify-content-center align-items-center gap-4">
            <div style={{ height: "150px" }}>
              <img
                src="https://images.pexels.com/photos/12903034/pexels-photo-12903034.jpeg"
                alt="customer-image"
                className=" h-100"
              />
            </div>
            <div style={{ height: "150px" }}>
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="customer-image"
                className=" h-100"
              />
            </div>
            <div style={{ height: "150px" }}>
              <img
                src="https://images.pexels.com/photos/8101976/pexels-photo-8101976.jpeg"
                alt="customer-image"
                className=" h-100"
              />
            </div>
            <div style={{ height: "150px" }}>
              <img
                src="https://images.pexels.com/photos/6980996/pexels-photo-6980996.jpeg"
                alt="customer-image"
                className=" h-100"
              />
            </div>
          </div>
          <div className="d-flex my-2 justify-content-center align-items-center gap-4">
            <div style={{ height: "150px" }}>
              <img
                src="https://images.pexels.com/photos/12903034/pexels-photo-12903034.jpeg"
                alt="customer-image"
                className=" h-100"
              />
            </div>
            <div style={{ height: "150px" }}>
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="customer-image"
                className=" h-100"
              />
            </div>
            <div style={{ height: "150px" }}>
              <img
                src="https://images.pexels.com/photos/8101976/pexels-photo-8101976.jpeg"
                alt="customer-image"
                className=" h-100"
              />
            </div>
            <div style={{ height: "150px" }}>
              <img
                src="https://images.pexels.com/photos/6980996/pexels-photo-6980996.jpeg"
                alt="customer-image"
                className=" h-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
