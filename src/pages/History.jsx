import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { deleteResumeAPI, getResumeAPI } from "../service/allApi";
import { MdDeleteForever } from "react-icons/md";

function History() {
  const [historyData, setHistoryData] = useState([]);
  const getResume = async () => {
    try {
      const result = await getResumeAPI();
      // console.log(result.data);
      setHistoryData(result.data);
    } catch (er) {
      console.log(er);
    }
  };

  const handleDeleteResume = async (id) => {
    try {
      const result = await deleteResumeAPI(id);
      getResume()
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    getResume();
  }, []);

  console.log(historyData);

  return (
    <>
      <div className="py-3 container">
        <h1 className="text-center py-4">Resume Downloaded History</h1>
        <div className="d-flex justify-content-end me-3">
          <button className="btn btn-primary">Back</button>
        </div>
      </div>
      <div className="container py-3">
        <div className="row flex-wrap">
          {historyData.length > 0
            ? historyData.map((item) => (
                <div className="col-md-4 mb-4" key={item.id}>
                  <Card style={{ width: "100%" }}>
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <Card.Title>{item.person}</Card.Title>
                        <span
                          className="btn btn-danger "
                          onClick={() => handleDeleteResume(item.id)}
                        >
                          <MdDeleteForever />
                        </span>
                      </div>

                      {/* <Card.Title>{item.person}</Card.Title> */}
                      <Card.Subtitle className="mb-2 text-muted">
                        {item.jobTitle}
                      </Card.Subtitle>
                      <Card.Title>{item.courseName}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {item.college} {" |" + item.university}
                        {" |" + item.year}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </div>
              ))
            : ""}
          {/* <div className="col-md-3 mb-2">
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Full Name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Full Stack Developer
                </Card.Subtitle>
                <Card.Title>Course</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  COLLEGE | UNIVERSITY | 2025
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default History;
