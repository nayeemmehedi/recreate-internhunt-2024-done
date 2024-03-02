import React, { useState, useEffect } from "react";
import { localhost } from "../..";

const Showcv = () => {
  const [student1, setStudent1] = useState([]);

  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch(`${localhost}/companyForm/${user.email}`)
      .then((response) => response.json())
      .then((data) => setStudent1(data));
  }, []);

  return (
    <div className="row">
      <h2 className="text-center"> Show CV page</h2>

      {student1.map((card) => (
        <div className="col-lg-3 pt-lg-5 ps-lg-5 ms-lg-5 pb-lg-5  mt-lg-5 border col-md-6 pt-md-5 bg-dark text-white col-sm-12 ">
          <h4>Job Seeker Details:</h4>
          <h4>name </h4>
          <h5 className="ps-lg-4">{card.firstName}</h5>
          <h5>My github Link:</h5>
          <p className="ps-lg-4">{card.email}</p>
          <h5>My Mobile Number</h5>
          <p className="ps-lg-4">{card.MobileNumber}</p>

          <h5>Github link </h5>
          <p className="ps-lg-4">{card.github}</p>
          <p className="ps-lg-4">{card.link2}</p>
          <p className="ps-lg-4">{card.link3}</p>

          <h5>Title</h5>
          <p>{card.Title}</p>
        </div>
      ))}
    </div>
  );
};

export default Showcv;
