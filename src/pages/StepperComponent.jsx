import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { data } from "react-router-dom";
import { duration } from "@mui/material/styles";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { addResumeAPI } from "../service/allApi";
import { toast } from "react-toastify";

const steps = [
  "Basic Information",
  "Contact Details",
  "Education details",
  "Work Experience",
  "Skills & Certifications",
  "Review & Submit",
];

function StepperComponent({
  resumeData,
  setResumeData,
  setIsFinished,
  setEditId,
}) {
  console.log(resumeData);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [inputSkill, setInputSkill] = useState("");

  const suggestion = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "MERN",
    "ANGULAR",
    "MEAN",
  ];

  const {
    person,
    jobTitle,
    location,
    email,
    phoneNumber,
    github,
    linkedin,
    portfolio,
    courseName,
    college,
    university,
    year,
    jobRole,
    company,
    companyLocation,
    duration,
    skills,
    summary,
  } = resumeData;

  console.log(inputSkill);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setResumeData({
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
  };

  function addData(data) {
    console.log(data);
    if (!data) return;

    !resumeData.skills.includes(data) &&
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, data.trim()],
      });

    setInputSkill("");
  }

  function handleRemove(el) {
    console.log(el, "hi");
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((curr) => {
        return curr !== el;
      }),
    });
  }

  const handleSubmitResume = async () => {
    if (
       !person 
      // !jobTitle ||
      // !location ||
      // !email ||
      // !phoneNumber ||
      // !github ||
      // !linkedin ||
      // !portfolio ||
      // !courseName ||
      // !college ||
      // !university ||
      // !year ||
      // !jobRole ||
      // !company ||
      // !companyLocation ||
      // !duration ||
      // !skills.length ||
      // !summary
    ) {
      toast.error("Please fill all the required fields.");
    } else {
      try {
        const result = await addResumeAPI(resumeData);
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          toast.success("Resume Added Successfully");
          setEditId(result.data.id);
          setIsFinished(true);
          // setResumeData({
          //   person: "",
          //   jobTitle: "",
          //   location: "",
          //   email: "",
          //   phoneNumber: "",
          //   github: "",
          //   linkedin: "",
          //   portfolio: "",
          //   courseName: "",
          //   college: "",
          //   university: "",
          //   year: "",
          //   jobRole: "",
          //   company: "",
          //   companyLocation: "",
          //   duration: "",
          //   skills: [],
          //   summary: "",
          // });
        } else {
          toast.error("Error in adding Resume");
        }
      } catch (error) {
        console.log(`Server Error, ${error}`);
        toast.error("Server Error, Please Try Again");
      }
    }
  };

  const RenderStepperContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h2>Personal Details</h2>

            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Full Name"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.person}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      person: e.target.value.toUpperCase(),
                    })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Job Title"
                  variant="standard"
                  fullWidth
                  value={resumeData.jobTitle}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      jobTitle: e.target.value.toUpperCase(),
                    })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Location"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.location}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, location: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            <h2>Contact Details</h2>

            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Email"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.email}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, email: e.target.value })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Phone Number"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.phoneNumber}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Github Profile Link"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.github}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, github: e.target.value })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Linkedin Profile Link"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.linkedin}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, linkedin: e.target.value })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Portfolio Link"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.portfolio}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, portfolio: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </>
        );

      case 2:
        return (
          <>
            <h2>Educational Details</h2>

            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Course Name"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.courseName}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, courseName: e.target.value })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="College Name"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.college}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, college: e.target.value })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="University"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.university}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, university: e.target.value })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Year of Passout"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.year}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, year: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </>
        );
      case 3:
        return (
          <>
            <h2>Professional Details</h2>

            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Job or Intership"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.jobRole}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, jobRole: e.target.value })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Company Name"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.company}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, company: e.target.value })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Location"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.companyLocation}
                  onChange={(e) =>
                    setResumeData({
                      ...resumeData,
                      companyLocation: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Duration"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={resumeData.duration}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, duration: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </>
        );
      case 4:
        return (
          <>
            <h2>Skills and Certification</h2>

            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Add Skills"
                  multiline
                  maxRows={4}
                  variant="standard"
                  fullWidth
                  value={inputSkill}
                  onChange={(e) => setInputSkill(e.target.value.toUpperCase())}
                />
              </Grid>

              <Button variant="outlined" onClick={() => addData(inputSkill)}>
                Add +
              </Button>

              <div className="mt-3">
                <h5>Suggestions :</h5>
                <div className="">
                  {suggestion?.map((skill) => (
                    <button
                      className="btn btn-primary mt-3 me-2"
                      variant="outlined"
                      onClick={() => addData(skill)}
                      key={skill}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="h3">Added Skills</h3>
                {resumeData.skills?.length > 0
                  ? resumeData.skills.map((item, i) => (
                      <span className="btn btn-primary mb-3 me-3" key={i}>
                        {item}
                        <button
                          className="btn btn-primary"
                          onClick={() => handleRemove(item)}
                        >
                          <TiDeleteOutline />
                        </button>
                      </span>
                    ))
                  : ""}
              </div>
            </Grid>
          </>
        );

      case 5:
        return (
          <>
            <h2>Professional Details</h2>

            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Write a short summary of your self"
                  multiline
                  variant="standard"
                  fullWidth
                  rows={6}
                  value={resumeData.summary}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, summary: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Box sx={{ width: "100%", minHeight: "60vh" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* <Button onClick={handleReset}>Reset</Button> */}
              <div className="flex justify-content-center align-items-center gap-2">
                <button className="btn btn-danger" onClick={handleReset}>
                  Reset
                </button>
                <button className="btn btn-danger" onClick={handleSubmitResume}>
                  Submit Resume
                </button>
              </div>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {RenderStepperContent(activeStep)}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
}

export default StepperComponent;
