import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router";

import "./Review.css";
import { localhost } from "../..";

const ReviewNayeem = () => {
  const [review, setreview] = useState(true);

  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur", // "onChange"
  });

  const onSubmit = (data) => {
    fetch(`${localhost}/review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setreview(false);
        alert("Your review successful");

        history.replace("/home");
      });
  };

  return (
    <div className="Nayeem">
      <h1>Review Us</h1>
      <div className="NayeemReview">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="firstName">Name</label>
            <input
              placeholder="bill Bean"
              {...register("firstName", {
                pattern:
                  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
            />
            {errors.firstName && (
              <p>
                {" "}
                minimum length is 5, maximum length is 20 and must be string{" "}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="profession">Your Profession</label>
            <input
              placeholder="teacher"
              {...register("profession", {
                pattern:
                  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
            />
            {errors.profession && (
              <p> minimum 5 , maximum 20 word and must be string </p>
            )}
          </div>

          <div>
            <label htmlFor="textmessage">Message</label>
            <textarea
              {...register("textmessage", {
                pattern:
                  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
                required: true,
                minLength: 15,
                maxLength: 70,
              })}
            />
            {errors.textmessage && (
              <p> minimum 15 and maximum 70 word and must be string</p>
            )}
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ReviewNayeem;
