import React from "react";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { getAResumeAPI, UpdateResumeAPI } from "../service/allApi";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-toastify";

export default function Edit({ editId }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
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
    id: "",
  });
  const [editInputSkill, setEditInputSkill] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    getResume();
  };

  const getResume = async () => {
    try {
      const result = await getAResumeAPI(editId);
      console.log(result);
      setData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  // edit function

  const handleChange = (key) => (e) => {
    setData({
      ...data,
      [key]: e.target.value,
    });
  };
  // ! remove buttons
  function handleRemove(el) {
    console.log(el);
    setData({
      ...data,
      skills: [...data.skills.filter((curr) => {
        return curr !== el;
      })],
    });
  }

  //! Add Skills
  function addData(currData) {
    console.log(currData);
    if (!currData) {
      toast.warning("Skill Enter Cheyy Pottaa");
      return;
    }

    !data.skills.includes(currData) &&
      setData({
        ...data,
        skills: [...data.skills, currData.trim()],
      });

    setEditInputSkill("");
  }

  // !   submit edited data
  const handleUpdate = async () => {
    try {
      const result = await UpdateResumeAPI(editId, data);
      console.log(result);
      toast.success("update successed");
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(editId);
  console.log(data);
  return (
    <>
      {/* <button className="btn fs-4"></button> */}

      <button className="btn btn-primary" onClick={handleShow}>
        <FaEdit />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Resume Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                value={data.person}
                onChange={handleChange("person")}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                id="standard-multiline-flexible"
                label="Job Title"
                multiline
                maxRows={4}
                variant="standard"
                fullWidth
                value={data.jobTitle}
                onChange={handleChange("jobTitle")}
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
                value={data.location}
                onChange={handleChange("location")}
              />
            </Grid>
          </Grid>

          {/*
           */}

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
                value={data.email}
                onChange={handleChange("email")}
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
                value={data.phoneNumber}
                onChange={handleChange("phoneNumber")}
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
                value={data.github}
                onChange={handleChange("github")}
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
                value={data.linkedin}
                onChange={handleChange("linkedin")}
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
                value={data.portfolio}
                onChange={handleChange("portfolio")}
              />
            </Grid>
          </Grid>
          {/*  */}

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
                value={data.courseName}
                onChange={handleChange("courseName")}
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
                value={data.college}
                onChange={handleChange("college")}
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
                value={data.university}
                onChange={handleChange("university")}
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
                value={data.year}
                onChange={handleChange("year")}
              />
            </Grid>
          </Grid>
          {/*  */}

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
                value={data.jobRole}
                onChange={handleChange("jobRole")}
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
                value={data.company}
                onChange={handleChange("company")}
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
                value={data.companyLocation}
                onChange={handleChange("companyLocation")}
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
                value={data.duration}
                onChange={handleChange("duration")}
              />
            </Grid>
          </Grid>
          {/*  */}

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
                value={editInputSkill}
                onChange={(e) =>
                  setEditInputSkill(e.target.value.toUpperCase())
                }
              />
            </Grid>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => addData(editInputSkill)}
              >
                Add +
              </button>
            </div>

            <div className="mt-3 ">
              {data.skills.length > 0 && <h5>Selected Skills :</h5>}

              <div>
                {data.skills.map((item, i) => (
                  <span className="btn btn-primary mb-3 me-3" key={i}>
                    {item}
                    <button
                      className="btn btn-primary"
                      onClick={() => handleRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <div>
              {data.skills.length > 0 && <h3 className="h3">Added Skills</h3>}
            </div>
          </Grid>

          {/*  */}

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
                value={data.summary}
                onChange={handleChange("summary")}
              />
            </Grid>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-success" onClick={handleUpdate}>
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
