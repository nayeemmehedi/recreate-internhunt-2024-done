import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./boom.css";

const SecendViewC2 = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // Required

      renderer: "svg", // Required
      loop: true, // Optional
      autoplay: true, // Optional
      animationData: require("./social.json"), // Name for future reference. Optional.
    });
  }, []);
  return (
    <div>
      <div className="row" style={{fontFamily: "Besley" }}>
        <div className="col-lg-6 col-md-12 col-sm-12  secendview">
         
          <div className="row">

            <div className="col-lg-4 col-md-0 col-sm-0"></div>

            <div className="col-lg-8 col-md-12 col-sm-12">
             <h1 className="againsecend">Project Mission & vision</h1> <br />
              <p className="againsecend">
                Our web-site aims to explore maximum benefits of the Internet. We believe our service will help the job seekers manage their career more efficiently. This site will also help employers solve many of the problems associated with traditional recruiting methods and allow them to save time and money.The vision of the company is to try bringing Internet technology in the mainstream business and economic life of the society.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-12 col-sm-12 pe-lg-5">
          <br /> <br />
          <div
            style={{ height: "500px" }}
            className="container secendviewimg"
            ref={container}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SecendViewC2;
