import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { localhost } from "../../main.jsx";

const DeleteCv = () => {
  const history = useHistory();

  const [student1, setStudent1] = useState([]);

  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch(`${localhost}/companyForm/${user.email}`)
      .then((response) => response.json())
      .then((data) => setStudent1(data));
  }, []);

  const handledelete = (id) => {
    fetch(`${localhost}/deleteFormCompany/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your Registration has been deleted");
        history.replace("/company");
      });
  };

  console.log(student1);

  return (
    <div>
      <br />
      <h3 style={{ fontWeight: "bold" }}>
        <span style={{ color: "#57368a" }}>Delete Cv</span> if user Don't
        deserve it...
      </h3>
      <br /> <hr />
      {student1.map((value) => (
        <div>
          <div className="row">
            <div className="col-3">
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
              <button onClick={() => handledelete(value._id)}>
                <FontAwesomeIcon style={{ color: "red" }} icon={faTrashAlt} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeleteCv;
