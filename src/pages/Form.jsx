import React from "react";

import StepperComponent from "./StepperComponent";
import PreviewLive from "../Components/PreviewLive";
import { useState } from "react";

function Form() {
  const [resumeData, setResumeData] = useState({
    person: "",
    jobTitle: "",
    location: "",
    email: "",
    phoneNumber: "",
    github: "",
    linkedin: "",
    portfolio: "",
    courseName: "",
    college: "",
    university: "",
    year: "",
    jobRole: "",
    company: "",
    companyLocation: "",
    duration: "",
    skills: [],
    summary: "",
  });

  const [isFinished, setIsFinished] = useState(false);
  const [editId, setEditId] = useState("");

  return (
    <div className="container-fluid mt-5 py-2">
      {isFinished === false && (
        <div className="row">
          <div className="col">
            <StepperComponent
              resumeData={resumeData}
              setResumeData={setResumeData}
              setIsFinished={setIsFinished}
              setEditId={setEditId}
            />
          </div>
          <div className="col">
            <PreviewLive resumeData={resumeData}  />
          </div>
        </div>
      )}
      {isFinished === true && (
        <div className="container-fluid">
          <div className="row">
            <div className="col"></div>
            <div className="col-6">
              <PreviewLive resumeData={resumeData} editId={editId} isFinished={isFinished}/>
            </div>
            <div className="col"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
