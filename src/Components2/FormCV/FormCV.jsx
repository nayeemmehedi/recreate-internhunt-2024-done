import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import Fakedata from "../../Component/Fakedata/Fakedata.json";

import { useForm } from "react-hook-form";

import "./FormCV.css";
import { localhost } from "../..";

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

    fetch(`${localhost}/addForm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your registration successful");

        history.replace("/");
      });
  };

  const { id } = useParams();

  const [newForm, setForm] = useState({});

  useEffect(() => {
    // Fakedata.filter((value) => value.id == id).map((value) => {

    //   setForm(value);

    // });

    fetch(`${localhost}/event/${id}`)
      .then((response) => response.json())
      .then((data) => setForm(data));
  }, []);

  const [company, setcompany] = useState([]);
  useEffect(() => {
    fetch(`${localhost}/company`)
      .then((res) => res.json())
      .then((data) => setcompany(data));
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  let isDEVELOPER = company.some((value) => value.email === user.email);

  //button off r mission start

  //   const [formdata, setformdata] = useState([]);

  //   useEffect(() => {
  //        fetch(`http://localhost:4500/companyForm1/${newForm.email}`)
  //          .then(response => response.json())
  //         .then(data => setformdata(data))

  //   }, [newForm.email]);

  //    const [form2m, setform2m] = useState([]);

  //   const [form3m, setform3m] = useState("");

  //   // useEffect(() => {
  //   //   setform2m(formdata)

  //   // },[])

  // useEffect(() => {
  //    formdata.map(value => {
  //        setform3m(value.email)

  //     })

  // })

  // const [companygmail, setcompanygmail] =useState(true)

  // useEffect(() => {

  // if(form3m==user.email){
  //   setcompanygmail(true)
  // }
  // else {
  //   setcompanygmail(false)
  // }

  // },[form3m])

  // console.log("formgmail"+  form3m)
  // console.log("usergmail"+  user.email)
  // console.log("companymail" +companygmail)

  //  const [formdata1, setformdata1] = useState(true);

  //    useEffect(() => {

  //     //  console.log(formdata)

  //     if(formdata.length > 0){

  //       return setformdata1(true)

  //     }else{
  //       return setformdata1(false)
  //     }

  //    },[formdata])

  //    console.log("formdata1" +formdata1)

  //ses

  const [card, setcard] = useState([]);

  useEffect(() => {
    fetch(`${localhost}/form/${user.email}`)
      .then((response) => response.json())
      .then((data) => setcard(data));
  }, []);

  let isAvailable = card.some((value) => value.companymail == newForm.email);

  console.log(isAvailable);

  return (
    <div>
      {!isDEVELOPER ? (
        <div className="formcv">
          <h1 className="p-4" style={{ color: "#ec5990", fontSize: "45px" }}>
            Information Request Form For Job-Seeker{" "}
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName" style={{ color: "#3fe0f2" }}>
              Full Name
            </label>
            <input
              placeholder="Bill"
              {...register("firstName", {
                required: "this is a required",
                minLength: {
                  value: 10,
                  message: "Max length is 10",
                },
              })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <label htmlFor="github" style={{ color: "#3fe0f2" }}>
              Your GitHub Project Link{" "}
            </label>
            <input
              placeholder="github project link"
              {...register("github", {
                required: "this is a required",
              })}
            />
            {errors.github && <p>{errors.github.message}</p>}

            <label htmlFor="link2" style={{ color: "#3fe0f2" }}>
              Your GitHub Project Link{" "}
            </label>
            <input
              placeholder="github project link"
              {...register("link2", {
                required: "this is a required",
              })}
            />
            {errors.github && <p>{errors.github.message}</p>}

            <label htmlFor="link3" style={{ color: "#3fe0f2" }}>
              ONE GitHub Project Change Readme file Write it your Description
              give us link{" "}
            </label>
            <input
              placeholder="github project link"
              {...register("link3", {
                required: "this is a required",
              })}
            />
            {errors.github && <p>{errors.github.message}</p>}

            <label htmlFor="email" style={{ color: "#3fe0f2" }}>
              Email
            </label>
            <input
              type="text"
              value={user.email}
              {...register("email", {
                required: "this is required",
                // pattern: {
                //   value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                //   message: "Invalid email address"
                // }
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <label style={{ color: "#3fe0f2" }}>Mobile number</label>
            <input
              placeholder="+880191"
              type="tel"
              {...register("MobileNumber", {
                pattern: {
                  value: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
                  message: "Invalid mobile  number",
                },
              })}
            />
            {errors.MobileNumber && <p>{errors.MobileNumber.message}</p>}

            <label htmlFor="companyname" style={{ color: "#3fe0f2" }}>
              Company Name (Not Change Able)
            </label>
            <input
              type="text"
              value={newForm.companyname}
              {...register("companyname", {
                required: true,
              })}
            />

            <label htmlFor="companymail" style={{ color: "#3fe0f2" }}>
              Company Gmail (Not Change Able)
            </label>
            <input
              type="email"
              value={newForm.email}
              {...register("companymail", {
                required: true,
              })}
            />

            <label>Title</label>
            <select {...register("Title")}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>

              <option value="Another">Another</option>
            </select>

            {/* {formdata1 && companygmail ?null  : <input type="submit" />} */}

            {!isAvailable && <input type="submit" />}

            <div style={{ height: "200px" }}></div>
          </form>
        </div>
      ) : (
        <div>
          <h1>
            you r our hoarable company admin why u here pretend like job seeker
          </h1>
        </div>
      )}
    </div>
  );
};

export default FormCV;
