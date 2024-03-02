import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { Link } from "react-router-dom";
import Addme from "./Addme/Addme";
import backman from "./img/backman.jpg";
import blackmoon from "./img/blackmoon.jpg";

import handshake from "./img/handshake.jpg";
import { localhost } from "../../../../../..";

function FullPage() {
  const { id } = useParams();
  console.log("id: " + localhost);

  
 
  const [newvalue1, setvalue] = useState({});

  useEffect(() => {
    fetch(`${localhost}/event/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        setvalue(data);
      });
  }, []);

console.log("done")
  return (
    <div>
      <div>
        <Addme newvalue={newvalue1}></Addme>
      </div>
    </div>
  );
}

export default FullPage;
