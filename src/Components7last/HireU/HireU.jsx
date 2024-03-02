import React, { useState, useEffect, useRef } from "react";

import { useParams, useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import lottie from "lottie-web";
import Lottie from "react-lottie";
import { localhost } from "../../main.jsx";
import greetings from "./32000-congratulation-greetings.json"

const HireU = () => {
  const [student, setStudent] = useState([]);

  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch(`${localhost}/successStudent/${user.email}`)
      .then((response) => response.json())
      .then((data) => setStudent(data));
  }, []);

  console.log(student);

  const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: greetings,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#e9f0bb",
        height: "700px",
        fontFamily: "Besley",
      }}
    >
      {student.length > 0 ? (
        <Lottie options={defaultOptions} height={250} />
      ) : null}

      <div className="row">
        <h3 className="p-5">
          <span style={{ fontSize: "40px", color: "#222247" }}>
            Total company
          </span>
          wants u : {student.length}
        </h3>

        {student.length > 0 ? (
          student.map((v) => (
            <div className="col-5 m-5">
              <div className="card">
                <small className="card-header">
                  You are passed primary selection...
                </small>
                <div className="card-body">
                  <h4 className="card-title">
                    Company name :{" "}
                    <span style={{ color: "blue" }}>{v.companyname}</span>
                  </h4>
                  <h6>
                    company email :{" "}
                    <span style={{ color: "blue" }}>{v.companymail}</span>
                  </h6>
                  <p className="card-text">
                    <p></p>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h5 className="text-center p-5">
              Improve your skill and apply more .Hopefully u will{" "}
              <span style={{ color: "red", fontSize: "30px" }}>
                get an Intern
              </span>
              ...
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default HireU;
