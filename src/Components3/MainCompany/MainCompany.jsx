import React, { useState, useEffect, useRef } from "react";

import lottie from "lottie-web";
import Lottie from "react-lottie";
import { localhost } from "../..";

const MainCompany = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  const [company, setcompany] = useState([]);
  useEffect(() => {
    fetch(`${localhost}/company`)
      .then((res) => res.json())
      .then((data) => setcompany(data));
  }, []);

  let isDEVELOPER = company.some((value) => value.email === user.email);

  let iscompany = company.filter((value) => value.email === user.email);

  const container = useRef(null);

  //   useEffect(() => {

  //     lottie.loadAnimation({
  //       container: container.current, // Required

  //       renderer: "svg", // Required
  //       loop: true, // Optional
  //       autoplay: true, // Optional
  //       animationData: require("./69266-work.json"), // Name for future reference. Optional.
  //     });

  //   }, [lottie.loadAnimation]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("./69266-work.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    isDEVELOPER && (
      <div className="bg-dark text-white" style={{ fontFamily: "Besley" }}>
        <div className="row">
          <div className="col-4">
            <div className="mt-5 pt-5 ps-5">
              <h2>Guidlines here </h2>
              <hr />
              <p>6 part here </p>
              <ul>
                <li>Job Post</li>
                <li>Delete Cv</li>

                <li>Show Cv</li>
                <li>Approve Cv</li>

                <li>Approve Success</li>
                <li>Logged Out</li>
              </ul>

              <div>
                <hr />
                <h3>Job Post</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis est dolor et suscipit quisquam culpa numquam enim,
                  assumenda doloremque obcaecati!
                </p>
                <br /> <hr />
                <h3>Delete CV</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus perferendis autem voluptates modi nobis delectus
                  nesciunt maiores! Deleniti, reprehenderit laboriosam.
                </p>
                <h3>Show CV</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis est dolor et suscipit quisquam culpa numquam enim,
                  assumenda doloremque obcaecati!
                </p>
                <br /> <hr />
                <h3>Approve Cv</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis est dolor et suscipit quisquam culpa numquam enim,
                  assumenda doloremque obcaecati!
                </p>
                <br /> <hr />
                <h3>Approve Success</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis est dolor et suscipit quisquam culpa numquam enim,
                  assumenda doloremque obcaecati!
                </p>
                <br /> <hr />
                <h3>Logged Out</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Debitis est dolor et suscipit quisquam culpa numquam enim,
                  assumenda doloremque obcaecati!
                </p>
                <br /> <hr />
              </div>
            </div>
          </div>

          <div className="col-8">
            <div className="App">
              <h1>
                Welcome{" "}
                <span
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  {" "}
                  {iscompany[0].name}
                </span>
              </h1>
              {/* <div
                style={{ height: "500px" }}
                className="container"
                ref={container}
              ></div> */}
              <div className="position-fixed">
                <Lottie options={defaultOptions} height={600} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MainCompany;
