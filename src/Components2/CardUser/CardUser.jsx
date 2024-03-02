import React, { useState, useEffect } from "react";
import { localhost } from "../..";

const CardUser = () => {
  const [card, setcard] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch(`${localhost}/form/${user.email}`)
      .then((response) => response.json())
      .then((data) => setcard(data));
  }, []);
  


// const {
//     _id,
//     id,
//     companyname,
//     city,
//     job_tital,
//     money,
//     office_time,
//     vacancies,
//     datetime,
//   } = card;



  return (
    <div style={{backgroundColor:'#454263'}} style={{height:'800px'}}>
    
    

      <div className="row">
       

       
      {card.map((card) => (

       <div className="col-lg-3 pt-lg-5 ps-lg-5 ms-lg-5 pb-lg-5  mt-lg-5 border col-md-6 pt-md-5 bg-dark text-white col-sm-12 ">

          <h4>Company name :</h4>
         <h5 className="ps-lg-4">{card.companyname}</h5>
         <h5>My github Link:</h5>
         <p className="ps-lg-4">{card.github}</p>
         <h5>My Mobile Number:</h5>
         <p className="ps-lg-4">{card.MobileNumber}</p>

        <h5>Github link: </h5>
         <p className="ps-lg-4">{card.link2}</p>
         <p className="ps-lg-4">{card.link3}</p>
         
         </div>
          
       
          
       
      ))}
       
       
       </div>
    </div>
  );
};

export default CardUser;
