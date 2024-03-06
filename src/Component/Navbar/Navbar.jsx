import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
// import fakedata from '../Fakedata/Fakedata.json'
// import fakegmail from "../Fakedata/emailfake.json"

const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("user"));



  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    // history.push("/");
    window.location.reload();
  };

  // const addallevent =()=>{

  //       fetch("http://localhost:4500/addCompany",{
  //           method: "POST",
  //           headers: {'Content-Type':'application/json'},
  //           body: JSON.stringify(fakegmail)
  //       })

  //   }
  // const [company, setcompany] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4500/company")
  //     .then((res) => res.json())
  //     .then((data) => setcompany(data));
  // }, []);

  // let isDEVELOPER = company.some((value) => value.email === user.email);

  return (
    <div>
      {/* <button onClick={addallevent}>add all gmail</button> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div>
              <p
                style={{
                  fontSize: "30px",
                  textAlign: "center",
                  paddingLeft: "30px",
                }}
              >
                {" "}
                <span style={{ color: "blue" }}>
                  <FontAwesomeIcon icon={faFeatherAlt} />
                  INTERN{" "}
                </span>{" "}
                HUNT
              </p>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-lg-auto mb-lg-2 mb-lg-0">
              <li className="nav-item me-5">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item me-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./intern-job"
                >
                  Intern
                </Link>
              </li>

              <li className="nav-item me-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./card-applied-company"
                >
                  Card
                </Link>
              </li>

              <li className="nav-item me-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./review"
                >
                  review
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./hire"
                >
                  Hire you
                </Link>
              </li>

              <li className="nav-item ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="./company/hunt"
                >
                  <button className="btn btn-primary">Company</button>
                </a>
              </li>
              { user?.email == "nayeemmehedi@gmail.com" ? (
                <li className="nav-item me-5">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="./admin"
                  >
                    <button className="btn btn-info">Admin</button>
                  </a>
                </li>
              ) : (
                ""
              )}

              {localStorage.getItem("user") ? (
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href
                  >
                    {console.log(user)}
                    {(user && user.name) || user.displayName || user.email}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href onClick={logout}>
                        Logged Out
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <li className="nav-item ">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="./login"
                    >
                      <button className="btn btn-primary">Intern Login</button>
                    </a>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
