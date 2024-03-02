import React from "react";
import "./SecendView.css";
import { Link } from "react-router-dom";

const SecendView = () => {
  return (
    <div style={{ fontFamily: "Besley" }}>
      <div
        class=" m-lg-5 p-lg-5 m-md-0 m-sm-0 bg-dark"
        style={{ fontFamily: "Besley" }}
      >
        <h1 className="text-white m-lg-0 mb-md-5 m-sm-5">
          Popular Intern Job Circular 
        </h1>

        <div class="row">
          <div class="col-lg-4 col-md-6  col-sm-12 ">
            <div class="card  m-lg-5 m-md-0 m-sm-0 p-lg-0 p-md-0 p-sm-3  text-white manualStyle">
              <h3 class="card-header">Software Engineering</h3>
              <div class="card-body" style={{ borderTop: "1px solid red" }}>
                <h5 class="card-title">
                  A software Intern engineer should be well-versed in
                </h5>
                <ul>
                  <li>Programming and coding</li>
                  <li> Design and architecture</li>

                  <li> Algorithms and data structures</li>

                  <li>Information analysis Debugging software</li>

                  <li> Testing software</li>
                </ul>

                <Link to="/home">
                  {" "}
                  <button className="btn btn-primary">Go Intern Page </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-sm-12 ">
            <div class="card m-lg-5 m-md-0 m-sm-0  text-white manualStyle">
              <h3 class="card-header">Web Development</h3>

              <div class="card-body" style={{ borderTop: "1px solid red" }}>
                <h5 class="card-title">Our Approach To Mern</h5>
                <p class="card-text">
                  <small>TECHNOLOGIES</small>
                  <ul>
                    <li>MongoDB • Express</li>
                    <li>React • Node.js</li>

                    <li> Advanced JavaScript</li>

                    <li>Socket.IO</li>
                  </ul>
                  <small>TOPICS COVERED : </small>
                  Creating Custom JS Libraries • Building Real-time Apps • NoSQL
                  Database Design
                </p>
                <Link to="/home">
                  {" "}
                  <button className="btn btn-primary">Go Intern Page </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-sm-12">
            <div class="card m-lg-5 m-md-0 m-sm-0 text-white manualStyle">
              <h3 class="card-header">Networking </h3>
              <div class="card-body" style={{ borderTop: "1px solid red" }}>
                <h5 class="card-title"></h5>
                <p class="card-text">
                  <ul>
                    <li> Designing and implementing new network solutions</li>
                    <li>
                      {" "}
                      Installing, configuring and supporting network equipment
                      including routers, proxy servers, switches, WAN
                      accelerators, DNS and DHCP
                    </li>
                    <li>
                      Procuring network equipment and managing subcontractors
                    </li>
                    <li>Investigating faults in the network</li>
                  </ul>
                </p>
                <Link to="/home">
                  {" "}
                  <button className="btn btn-primary">Go Intern Page </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-sm-12 ">
            <div class="card m-lg-5 m-md-0 m-sm-0  text-white manualStyle">
              <h3 class="card-header">Developing C# </h3>

              <div class="card-body" style={{ borderTop: "1px solid red" }}>
                <h5 class="card-title">Our Approach To .Net</h5>
                <p class="card-text">
                  <ul>
                    <li>
                      Creating in-house applications using the .NET framework
                    </li>
                    <li>
                      Debugging and maintaining written code.Reporting and
                      resolving issues related
                    </li>
                    <li>
                      Reporting and resolving issues related to .NET projects
                    </li>
                    <li>
                      Familiarity with Agile (Scrum) process and project
                      management tools like JIRA and OpenProject
                    </li>
                  </ul>
                </p>
                <Link to="/home">
                  {" "}
                  <button className="btn btn-primary">Go Intern Page </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-sm-12">
            <div class="card m-lg-5 m-md-0 m-sm-0  text-white manualStyle">
              <h3 class="card-header">Web Development</h3>
              <div class="card-body" style={{ borderTop: "1px solid red" }}>
                <h5 class="card-title">Our Approach To Mean</h5>
                <p class="card-text">
                  <ul>
                    <li>
                      {" "}
                      MEAN stack expertise - ability to work with Angular.js,
                      Node.js, Express.js and MongoDB.
                    </li>
                    <li>Familiar with package manager-npm</li>

                    <li>
                      Familiarity with Git and design framework like MotionUI is
                      desirable.
                    </li>
                    <li>
                      Time-management, critical thinking
                    </li>
                  </ul>
                </p>
                <Link to="/home">
                  {" "}
                  <button className="btn btn-primary">Go Intern Page </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-sm-12">
            <div class="card m-lg-5 m-md-0 m-sm-0 text-white manualStyle">
              <h3 class="card-header">Graphics Designer</h3>
              <div class="card-body" style={{ borderTop: "1px solid red" }}>
                <h5 class="card-title">
                  A Graphics Designer Intern should be well-versed in
                </h5>
                <p class="card-text">
                  <ul>
                    <li>
                      developing concepts, graphics and layouts for product
                      illustrations, company logos and websites
                    </li>

                    <li>
                      good knowledge of design software, such as Quark Xpress,
                      InDesign or Illustrator, plus photo-editing software such
                      as PhotoShop.
                    </li>
                  </ul>
                </p>
                <Link to="/home">
                  {" "}
                  <button className="btn btn-primary">Go Intern Page </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecendView;
