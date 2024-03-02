import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "../../FormCV/FormCV.css";
import { localhost } from "../../../main.jsx";

const FormCV = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const history = useHistory();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    fetch(`${localhost}/addJob`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your registration succeful");

        history.replace("/admin");
      });
  };

  const [newForm, setForm] = useState({});

  <label htmlFor="office_time" style={{ color: "#3fe0f2" }}>
    office_time{" "}
  </label>;

  return (
    <div className="formcv">
      <h1 className="p-4" style={{ color: "#a64902", fontSize: "45px" }}>
        Information Job
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="companyname" style={{ color: "#95e38f" }}>
          Company Name
        </label>
        <input
          placeholder="companyname"
          {...register("companyname", {
            required: "this is a required",
            minLength: {
              value: 4,
              message: "Min length is 4",
            },
          })}
        />

        <label htmlFor="job_tital" style={{ color: "#95e38f" }}>
          job tital{" "}
        </label>
        <input
          placeholder="job tital"
          {...register("job_tital", {
            required: "this is a required",
            minLength: {
              value: 5,
              message: "Min length is 5",
            },
          })}
        />
        {errors.job_tital && <p>{errors.job_tital.message}</p>}

        <label htmlFor="company_description" style={{ color: "#95e38f" }}>
          Company Description
        </label>
        <input
          placeholder="company description"
          {...register("company_description", {
            required: "this is a required",
            minLength: {
              value: 40,
              message: "Min length is 40",
            },
          })}
        />
        {errors.company_description && (
          <p>{errors.company_description.message}</p>
        )}

        <label htmlFor="your_role" style={{ color: "#95e38f" }}>
          Role Seekers{" "}
        </label>
        <input
          placeholder="your_role"
          {...register("your_role", {
            required: "this is a required",
            minLength: {
              value: 40,
              message: "Min length is 40",
            },
          })}
        />
        {errors.your_role && <p>{errors.your_role.message}</p>}

        <label htmlFor="skill" style={{ color: "#95e38f" }}>
          skill{" "}
        </label>
        <input
          placeholder="skill"
          {...register("skill", {
            required: "this is a required",
            minLength: {
              value: 5,
              message: "Min length is 5",
            },
          })}
        />
        {errors.skill && <p>{errors.skill.message}</p>}

        <label htmlFor="office_time" style={{ color: "#95e38f" }}>
          Office Time{" "}
        </label>
        <input
          placeholder="office_time"
          {...register("office_time", {
            required: "this is a required",
            minLength: {
              value: 5,
              message: "Min length is 5",
            },
          })}
        />
        {errors.office_time && <p>{errors.office_time.message}</p>}

        <label htmlFor="email" style={{ color: "#95e38f" }}>
          Email
        </label>
        <input
          type="text"
          {...register("email", {
            required: "this is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="vacancies" style={{ color: "#95e38f" }}>
          vacancies
        </label>
        <input
          placeholder="vacancies"
          {...register("vacancies", {
            required: "this is a required",
            maxLength: {
              value: 10,
              message: "Max length is 10",
            },
          })}
        />
        {errors.vacancies && <p>{errors.vacancies.message}</p>}

        <label htmlFor="city" style={{ color: "#95e38f" }}>
          city
        </label>
        <input
          placeholder="city"
          {...register("city", {
            required: "this is a required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
          })}
        />
        {errors.city && <p>{errors.city.message}</p>}

        <label htmlFor="datetime" style={{ color: "#95e38f" }}>
          Dead Line
        </label>
        <input
          placeholder="datetime"
          type="date"
          {...register("datetime", {
            required: "this is a required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
          })}
        />
        {errors.datetime && <p>{errors.datetime.message}</p>}

        <label htmlFor="money" style={{ color: "#95e38f" }}>
          money
        </label>
        <input
          placeholder="money"
          {...register("money", {
            required: "this is a required",
            minLength: {
              value: 2,
              message: "Min length is 2",
            },
          })}
        />
        {errors.money && <p>{errors.money.message}</p>}

        <input style={{ backgroundColor: "#a64902" }} type="submit" />
      </form>
    </div>
  );
};

export default FormCV;
