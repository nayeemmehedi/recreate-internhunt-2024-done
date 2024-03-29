import React from "react";

import svg from "../Addme/svg.jpg";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

import SettingsInputAntennaIcon from "@mui/icons-material/SettingsInputAntenna";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import WrapTextIcon from "@mui/icons-material/WrapText";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import SpeakerPhoneIcon from "@mui/icons-material/SpeakerPhone";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import { Link } from "react-router-dom";
import "./Addme.css"
const Addme = ({ newvalue }) => {
  const {
    _id,
    skill,

    companyname,
    your_role,
    company_description,
    city,
    job_tital,
    money,
    office_time,
    vacancies,
    datetime,
    you_have,
  } = newvalue;
  console.log(you_have);
  return (
    <div>
      {/* <section className="container">
       
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <div className="row bg-dark  d-flex align-items-center text-secondary ms-5 me-5 ps-5 pe-5">
                <div className="col-lg-7 p-5">
                  <h6 classname="mt-5">
                    “It is not that we have so little time but that we lose so
                    much. ... The life we receive is not short but we make it
                    so; we are not ill provided but use what we have
                    wastefully.”
                  </h6>
                  <p>― Lucius Annaeus Seneca, On the Shortness of Life</p>
                </div>
                <div className="col-lg-5">
                  <img
                    src={backman}
                    style={{ height: "300px", width: "300px" }}
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row bg-dark  d-flex align-items-center text-secondary  ms-5 me-5 ps-5 pe-5">
                <div className="col-lg-7 p-5">
                  <h6>
                    “It is the privilege of the rich To waste the time of the
                    poor To water with tears in secret A tree that grows in
                    secret That bears fruit in secret That ripened falls to the
                    ground in secret And manures the parent tree Oh the wicked
                    tree of hatred and the secret The sap rising and the tears
                    falling.”
                  </h6>
                  <p>― Stevie Smith, Selected Poems</p>
                </div>
                <div className="col-lg-5">
                  <img
                    src={blackmoon}
                    style={{ height: "300px", width: "300px" }}
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row bg-dark d-flex align-items-center text-secondary  ms-5 me-5 ps-5 pe-5">
                <div className="col-lg-7 p-5">
                  <h6>
                    “Don’t be too comfortable with employment; discover yourself
                    and see what you can achieve for yourself”
                  </h6>
                  <p>― Sunday Adelaja</p>
                </div>
                <div className="col-lg-5">
                  <img
                    src={handshake}
                    style={{ height: "300px", width: "300px" }}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section> */}

      <br />
      <div className="text-center pt-5 pb-5">
        {" "}
        <h1>
          <span style={{ color: "chocolate" }}>INTERN </span> Details page
        </h1>
      </div>

      <div className="row">
        <div className="col-2"></div>

        <div
          style={{ boxShadow: "0px 10px 10px ", backgroundColor: "#e6e3e8" }}
          className="col-6 p-5 "
        >
          <h4 className="text-center">
            {job_tital} at {companyname}
          </h4>
          <br /> <br />
          <h4> Fresher Job</h4>
          <h4>
            {" "}
            {/* <AccountBalanceIcon style={{ color: "#67c1c7" }} /> */}
            {job_tital}
          </h4>
          <h5 className="ps-3">
            {" "}
            <FormatAlignLeftIcon /> {companyname}
          </h5>{" "}
          <br />
          <h6>
            <PowerSettingsNewIcon style={{ color: "#67c1c7" }} /> Number of
            openings
          </h6>
          <p className="ps-3">{vacancies}</p>
          <h4>
            {" "}
            <SettingsInputAntennaIcon style={{ color: "#67c1c7" }} /> About
            Infinity Business Solutions
          </h4>
          <p className="ps-2">Description:</p>
          <p className="ps-5">{company_description}</p>
          <h3>
            <WrapTextIcon style={{ color: "#67c1c7" }} /> About the job
          </h3>
          <h6 className="ps-4">key responsibilities</h6>
          <p className="ps-5">{your_role}</p>
          <h3>
            <SpeakerPhoneIcon style={{ color: "#67c1c7" }} /> Skill(s) required
          </h3>
          <p className="ps-4">{skill} </p>
          <h4>
            <SportsHockeyIcon style={{ color: "#67c1c7" }} /> Who can apply
          </h4>
          <p className="ps-5">
            <div>
              {you_have
                ? you_have.map((value) => (
                    <>
                      <p> {value.basic}</p>
                      <p>{value.must}</p>
                      <p>{value.familiarity}</p>
                    </>
                  ))
                : null}
            </div>
          </p>
          <h3 className="ps-2">
            <LocalBarIcon style={{ color: "#67c1c7" }} /> Educational
            Qualifications
          </h3>
          <p className="ps-5">
            Bachelor of Science (BSc) in Computer Science & Engineering{" "}
          </p>
          <p className="ps-5"> or</p>
          <p className="ps-5"> Last year students computer science </p>
          <h4 className="ps-2">
            <DonutSmallIcon style={{ color: "#67c1c7" }} /> Job Type
          </h4>
          <p className="ps-2"> InternSHIP</p>
          <h3 className="ps-2">
            <DonutSmallIcon style={{ color: "#67c1c7" }} /> Office Time
          </h3>
          <p className="ps-3"> {office_time}</p>
          <h3 className="ps-2">
            <DonutSmallIcon style={{ color: "#67c1c7" }} /> Salary
          </h3>
          <h6 className="ps-2"> Probation: </h6>
          <p className="ps-2"> Duration: 3 months </p>
          <p className="ps-2"> Salary during probation: {money}</p>
          <h3 className="ps-2">
            <PlaceIcon style={{ color: "#67c1c7" }} /> city
          </h3>
          <p className="ps-3"> {city}</p>
          <h3 className="ps-2">
            <DateRangeIcon style={{ color: "#67c1c7" }} /> Start date
          </h3>
          <p className="ps-3"> {datetime}</p>
          <div className="text-center nayeem">
            <Link to={`/FormCV/${_id}`}>
              {" "}
              <button className="button">Go to from page</button>
            </Link>
          </div>
        </div>
        <div className="col-3 ms-5 pt-5">
          <div className="mt-5">
            <div className="border   shadow p-4 mb-5 bg-white rounded">
              <h4>
                <BarChartRoundedIcon style={{ color: "#346f73" }} /> Summary
                This Job
              </h4>
              <hr />
              <h3>Start date</h3>
              <p>{datetime}</p>

              <h6>
                <LocalBarIcon style={{ color: "#346f73" }} /> Skill
              </h6>
              <p className="ps-4">{skill} </p>

              <h6>
                {" "}
                <DonutSmallIcon style={{ color: "#346f73" }} />
                Vaccencies
              </h6>
              <p className="ps-4">{vacancies}</p>
              <h6>
                <PlaceIcon style={{ color: "#346f73" }} /> Place
              </h6>
              <p className="ps-3">{city}</p>
              <h4>
                <FormatAlignLeftIcon style={{ color: "#346f73" }} />
                Job Type
              </h4>
              <p>InternSHIP</p>
            </div>
          </div>
        </div>

        <img src={svg} alt="" />
      </div>
    </div>
  );
};

export default Addme;
