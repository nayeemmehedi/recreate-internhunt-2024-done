import React, { useState, useEffect } from "react";
import { localhost } from "../../main.jsx";

const ListApprove = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  const [success, setsuccess] = useState([]);

  useEffect(() => {
    fetch(`${localhost}/successCV/${user.email}`)
      .then((response) => response.json())
      .then((data) => setsuccess(data));
  }, []);

  console.log(success);

  return (
    <div>
      <br />
      <h3 style={{ fontWeight: "bold" }}>
        <span style={{ color: "#57368a" }}>Success CV</span> if user Don't
        deserve it...
      </h3>
      <br /> <hr />
      {success.map((value) => (
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListApprove;
