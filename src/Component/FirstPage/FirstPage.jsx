import React from "react";
import { Link } from "react-router-dom";
import SecendView from "../../ComponentsNav/secendView/SecendView";
import EarthRound from "../../ComponentsNav/EarthRound/EarthRound";

import ThirdView from "../../ComponentsNav/ThirdView/ThirdView";
import FirstViewC2 from "../../Components2Nav/FirstviewC2/FirstViewC2";
import Footer from "../../Components2Nav/Footer/Footer";
import SecendViewC2 from "../../Components2Nav/SecendViewC2/SecendViewC2";
import ThirdC2 from "../../Components2Nav/thirdC2/ThirdC2";
import Forthc2 from "../../Components2Nav/ForthC2/Forthc2";
import FiveC2 from "../../Components2Nav/FiveC2/FiveC2";
import Sixc2 from "../../Components2Nav/Sixc2/Sixc2";

const FirstPage = () => {
  return (
    <div>
      <>
        <EarthRound />
        <SecendView />
        <ThirdView />
        <FirstViewC2></FirstViewC2>
        <ThirdC2></ThirdC2>
        <SecendViewC2></SecendViewC2>
        <Forthc2></Forthc2>
        {/* <FiveC2></FiveC2> */}
        <Sixc2></Sixc2>
        <Footer></Footer>
      </>
    </div>
  );
};

export default FirstPage;
