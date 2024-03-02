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

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
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
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-lg-auto mb-lg-2 mb-lg-0">
              <li class="nav-item me-5">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li class="nav-item me-5">
                <Link class="nav-link active" aria-current="page" to="./home">
                  Intern
                </Link>
              </li>

              <li class="nav-item me-5">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="./carduser"
                >
                  Card
                </Link>
              </li>

              <li class="nav-item me-5">
                <Link class="nav-link active" aria-current="page" to="./review">
                  review
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link class="nav-link active" aria-current="page" to="./hire">
                  Hire you
                </Link>
              </li>

              <li class="nav-item ">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="./company/nayeem"
                >
                  <button class="btn btn-primary">Company</button>
                </a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link active" aria-current="page" href="./admin">
                  <button class="btn btn-info">Admin</button>
                </a>
              </li>

              {localStorage.getItem("user") ? (
                <div class="dropdown">
                  <a
                    class="btn btn-secondary dropdown-toggle"
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
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href onClick={logout}>
                        Logged Out
                      </a>
                    </li>
                  </ul>
                </div>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
