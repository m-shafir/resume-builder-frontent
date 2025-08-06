import React from "react";
import Divider from "@mui/material/Divider";
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from "./Edit";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function PreviewLive({ resumeData, editId, isFinished }) {
  console.log(resumeData);
  const downloadPDF = async () => {
    const input = document.getElementById("result"); // to get the id

    const canvas = await html2canvas(input, { scale: 2 }); // convert the selected html to canvas (screenshot)
    const imgData = canvas.toDataURL("image/png"); // convert canvas into image url

    // create pdf
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "png", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <>
      <div className="d-flex justify-content-end gap-4 pe-5">
        {isFinished && (
          <div className="d-flex flex-row gap-4">
            <button className="btn btn-primary fs-4" onClick={downloadPDF}>
              <FaFileDownload />
            </button>

            <Edit editId={editId} />
          </div>
        )}

        <Link to={"/history"}>
          <button className="btn btn-primary fs-4">
            <FaHistory />
          </button>
        </Link>
        <Link to={"/"}>
          <button className="btn btn-dark fs-6">Back</button>
        </Link>
      </div>

      <div
        id="result"
        className={resumeData.person && "mx-5 my-3 shadow px-5 pb-5"}
      >
        <div className="text-center">
          <h2 className="pt-3">{resumeData?.person}</h2>

          <h3 className="pt-2 text-primary">{resumeData?.jobTitle}</h3>
        </div>
        <div className="text-center mt-3">
          <h6>
            {`${resumeData.phoneNumber} ${resumeData.phoneNumber && "| "}`}{" "}
            {`${resumeData.email} ${resumeData.email && "| "}`}
            {resumeData.location}
          </h6>
        </div>
        <div className="mt-2 py-2 text-center">
          <a
            className="me-3 ms-3"
            href={resumeData?.github}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            {resumeData.github && `Github`}
          </a>{" "}
          <a
            className="me-3 ms-3"
            href={resumeData?.linkedin || "#"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            {resumeData.linkedin && ` LinkedIn`}
          </a>{" "}
          <a
            className="me-3 ms-3"
            href={resumeData?.portfolio || "#"}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            {resumeData.portfolio && `Portfolio `}
          </a>
        </div>
        {resumeData.summary && (
          <div className="mt-3">
            <Divider>Summary</Divider>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              {resumeData.summary && resumeData.summary}
            </p>
          </div>
        )}

        <div className="mt-4 text-center">
          {resumeData.courseName && <Divider>Education</Divider>}

          <h6 className="mt-3">{resumeData.courseName}</h6>
          <h6 className="mt-3">
            {resumeData.college && `${resumeData.college}`}
            {resumeData.university && ` |  ${resumeData.university} `}
            {resumeData.year && `  |  ${resumeData.year}`}
          </h6>
        </div>

        <div className="mt-4 text-center">
          {resumeData.jobRole && <Divider>Professional Experience</Divider>}
          <h6 className="mt-2">{resumeData.jobRole && resumeData.jobRole}</h6>

          <h6>
            {resumeData.company && resumeData.company}
            {resumeData.comapanyLocation && ` | ${resumeData.comapanyLocation}`}
            {resumeData.duration && ` | ${resumeData.duration}`}
          </h6>
        </div>
        <div className="mt-3 text-center">
          {resumeData.skills.length > 0 && <Divider>Skills</Divider>}
          {/* <h6 className="mt-2">MERN FULL STACK</h6>
          <h6>Luminar Technolab | Luminar Technolab | 6 months</h6> */}
          {resumeData.skills.length > 0 && (
            <div className="mt-4">
              {resumeData.skills?.length > 0
                ? resumeData.skills.map((item, i) => (
                    <span className="btn btn-primary mb-3 me-3" key={i}>
                      {item}
                    </span>
                  ))
                : ""}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
