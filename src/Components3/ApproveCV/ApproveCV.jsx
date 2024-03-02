import React, { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { localhost } from "../..";

const ApproveCV = () => {
  const history = useHistory();

  const [student, setStudent] = useState([]);

  const [tik, settik] = useState(false);

  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch(`${localhost}/companyForm/${user.email}`)
      .then((response) => response.json())
      .then((data) => setStudent(data));
  }, []);

  const handledelete = (event, id) => {
    event.preventDefault();

    const value = student.filter((v) => v._id == id);

    fetch(`${localhost}/confirm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value[0]),
    })
      .then((response) => response.json())
      .then((data) => {});

    settik(true);

    fetch(`${localhost}/deleteCFcv/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your Registration has been deleted");
        history.replace("/company/nayeem");
      });
  };

  const [alldata1, setalldata1] = useState("");

  return (
    <div className="">
      <br /> <br />
      <h3 style={{ fontWeight: "bold" }}>
        <span style={{ color: "#57368a" }}>APPROVE Cv</span> if jobseekers
        deserve it...
      </h3>
      <small>If u want to search please give email id</small>
      <input
        type="text"
        class="form-control"
        placeholder="email id searching.."
        onChange={(event) => {
          setalldata1(event.target.value);
        }}
      />
      {student
        .filter((v) => {
          if (alldata1 == "") {
            return v;
          } else if (v.email.toLowerCase().includes(alldata1.toLowerCase())) {
            return v;
          }
        })
        .map((value) => (
          <div>
            <br /> <hr />
            <div className="row">
              <div className="col-2">
                <h5
                  className="text-center"
                  style={{ color: "#786c56", fontWeight: "bold" }}
                >
                  {value.firstName}
                </h5>
              </div>
              <div className="col-2">
                <h6 style={{ color: "#6f8994", fontWeight: "bold" }}>
                  {value.MobileNumber}
                </h6>
              </div>
              <div className="col-2">
                <h6 style={{ color: "#0c6f99", fontWeight: "bold" }}>
                  {value.email}
                </h6>
              </div>
              <div className="col-2">
                {" "}
                <span style={{ color: "#496a78" }}>{value.github}</span>{" "}
              </div>

              <div className="col-2">
                <button
                  disabled={tik}
                  className="fas fa-lg"
                  onClick={(e) => handledelete(e, value._id)}
                  return
                  false
                >
                  <FontAwesomeIcon
                    style={{ color: "green" }}
                    icon={faThumbsUp}
                  />{" "}
                  Confirm
                </button>
              </div>

              {tik && (
                <div className="col-2">
                  <FontAwesomeIcon style={{ color: "green" }} icon={faCheck} />
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ApproveCV;
