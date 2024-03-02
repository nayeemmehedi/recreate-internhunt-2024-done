import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router";

import "./style11.css";
import { localhost } from "../../../main.jsx";

const CompanyAdd = () => {
  const history = useHistory();

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    fetch(`${localhost}/companyEmail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your registration successful");

        history.replace("/admin");
      });
  };
  return (
    <div className="Nayeem123 bg-dark" style={{ fontFamily: "Besley" }}>
      <h1>Comapany Verification Email Added....</h1>

      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />

        <label>Company Name</label>
        <input
          type="text"
          {...register("name", { required: true, maxLength: 25 })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default CompanyAdd;
