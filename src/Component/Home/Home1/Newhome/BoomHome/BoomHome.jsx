import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FullPage from "./FullPage/FullPage";

const BoomHome = ({ valuename }) => {
  const {
    _id,
    id,
    companyname,
    city,
    job_tital,
    money,
    office_time,
    vacancies,
    datetime,
  } = valuename;

  return (
    <div style={{ fontFamily: "Raleway" }} className="mt-4">
      <div
        className="shadow p-3 mb-5 bg-dark text-white rounded"
        style={{
          minHeight: "600px",
          weight: "auto",
        }}
      >
        <div className="pl-5 pr-5 pb-5 ">
          <div className="text-center">
            <h3 style={{ color: "#871414" }}>{companyname}</h3>
            <p>{city}</p>
          </div>

          <br />

          <div>
            <p>
              {" "}
              <span style={{ fontSize: "25px" }}>Job title</span> :{" "}
              <span style={{ fontSize: "22px" }}>{job_tital}</span>{" "}
            </p>
          </div>

          <div>
            <p>
              {" "}
              <span style={{ fontSize: "25px" }}>Vacancy</span> :{" "}
              <span style={{ fontSize: "20px", color: "#f0560e" }}>
                {vacancies}
              </span>{" "}
            </p>
          </div>

          <div>
            <p>
              {" "}
              <span style={{ fontSize: "25px" }}>Salary</span> :{" "}
              <span style={{ fontSize: "20px" }}>
                <span style={{ color: "tomato" }}>{money}</span> BDT Monthly
              </span>{" "}
            </p>
          </div>
          <div>
            <p>
              {" "}
              <span style={{ fontSize: "25px" }}>Office Time</span> :
              <span style={{ fontSize: "20px", color: "green" }}>
                {office_time}
              </span>{" "}
            </p>
          </div>

          <div>
            <p>
              {" "}
              <span style={{ fontSize: "25px" }}>Location</span> :{" "}
              <span style={{ fontSize: "20px" }}>{city}</span>
            </p>
          </div>

          <div>
            <p>
              {" "}
              <span style={{ fontSize: "25px" }}>Job title</span> : INTERNSHIP
            </p>
          </div>
          <div>
            <p>
              {" "}
              <span style={{ fontSize: "25px" }}>Start Date</span> :
              <span style={{ color: "red", fontSize: "20px" }}>{datetime}</span>
            </p>
          </div>

          <div className="text-center">
            <Link to={`/fullpage/${_id}`}>
              <button style={{ backgroundColor: "#de683a" }} className="btn btn-lg">
                Click Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoomHome;
