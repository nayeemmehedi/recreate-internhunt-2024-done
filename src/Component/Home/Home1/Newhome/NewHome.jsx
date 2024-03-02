import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import BoomHome from "./BoomHome/BoomHome";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const NewHome = () => {
  const [loading,setLoading] = useState(false)
  const classes = useStyles();
  const [alldata, setalldata] = useState([]);
  useEffect(() => {
    setLoading(true)
    fetch("https://internhunt-24.onrender.com/event")
      .then((res) => res.json())
      .then((data) => {
        console.log("sata",data)
        setalldata(data)
        setLoading(false)
      });
  }, []);
  const [alldata1, setalldata1] = useState("");

  const shuffle = (a) => {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  };

  shuffle(alldata);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
     { !loading && <div> <small>Type Job Name</small> <br /></div> }
      <input
        type="text"
        className="form-control"
        placeholder="searching.."
        onChange={(event) => {
          setalldata1(event.target.value);
        }}
      />
      {/* 
        {
            alldata.map(value=>
               

                 <BoomHome valuename={value}></BoomHome>
                


        )
        } */}
      {alldata
        .filter((v) => {
          if (alldata1 == "") {
            return v;
          } else if (
            v.job_tital.toLowerCase().includes(alldata1.toLowerCase())
          ) {
            return v;
          }
        })
        .map((value) => (
          <BoomHome valuename={value}></BoomHome>
        ))}
    </div>
  );
};

export default NewHome;
