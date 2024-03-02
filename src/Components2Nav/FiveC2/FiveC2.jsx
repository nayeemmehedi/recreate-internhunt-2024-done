import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { localhost } from "../..";

const items = [
  {
    id: 1,
    firstName: "Nayeem",
    profession: "teacher",
    textmessage:
      " lorem20 name found me that is awesome man ok this is really bad talk for use lorem20 name found me that is awesome man ok this is really bad talk for use lorem20 name found me ",
  },
  {
    id: 2,
    firstName: "Borsha",
    profession: "student",
    textmessage:
      "lorem20 name found me that is awesome man ok this is really bad talk for use",
  },
  {
    id: 3,
    firstName: "Sazid",
    profession: "Nub student",
    textmessage:
      "lorem20 name found me that is awesome man ok this is really bad talk for use",
  },
  {
    id: 4,
    firstName: "Mahiha",
    profession: "market manager",
    textmessage:
      "lorem20 name found me that is awesome man ok this is really bad talk for use",
  },
  {
    id: 5,
    firstName: "Coiti",
    profession: "",
    textmessage:
      "lorem20 name found me that is awesome man ok this is really bad talk for use",
  },
];

//  #63056328
//#6f22b83a

const FiveC2 = () => {
  const [review, setreview] = useState([]);

  useEffect(() => {
    fetch(`${localhost}/reviewItem`)
      .then((response) => response.json())
      .then((data) => setreview(data));
  }, []);

  return (
    <div>
      <i  style={{ fontSize: "30px",fontFamily: "Besley" }} className="ps-5 text-bold italic">
        Valuable Comments in Our Valuable person -{" "}
      </i>
      {
        <Carousel>
          {items?.map((item) => (
            <div  
              className=" mt-5 pt-5"
              style={{
                height: "200px",
                width: "600px",
                backgroundColor: "#63056328",
                borderRadius: "10px 10px",
              }}
              key={item.id}
            >
              <div className="ps-4 pe-5">
                <i> {item.textmessage}</i>

                <div className="text-end">
                  <h5>{item.firstName}</h5>
                  <i>{item.profession}</i>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      }
    </div>
  );
};

export default FiveC2;
