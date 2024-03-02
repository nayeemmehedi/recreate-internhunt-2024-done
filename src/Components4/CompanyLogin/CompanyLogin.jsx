import React, { useState } from "react";
// import "./test.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../Component/Login/firebase.config";
import "../../Component/Login/test.css";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const CompanyLogin = () => {
  let google_provider = new firebase.auth.GoogleAuthProvider();

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/company/nayeem" } };

  // manual sigin up and password start

  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleBlur = (event) => {
    if (event.target.name == "email") {
      let newuser = { ...user };

      newuser[event.target.name] = event.target.value;
      setUser(newuser);
    }
    if (event.target.name === "password") {
      let newuser1 = { ...user };
      newuser1[event.target.name] = event.target.value;
      setUser(newuser1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)

      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        let newuser = { ...user };

        newuser.errror = "";
        setUser(newuser);

        const { email } = user;

        // const signInuser2 = { email };
        // setLoggedInUser(signInuser2)
        localStorage.setItem("user", JSON.stringify(user));

        history.replace(from);

        // ...
      })

      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        let newuser = { ...user };

        newuser.error = errorMessage;

        setUser(newuser);
      });
  };

  return (
    // forgive me please

    <div style={{height: '800px'}} className="text-white bg-dark">

    <div className="row">
      <div className="col-4"></div>
      <div className="col-4"><div className="container">
        <form onSubmit={handleSubmit}>
          <h1> Company Login Page....</h1>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              onBlur={handleBlur}
              name="email"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              onBlur={handleBlur}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <span>password must be geater then 6</span>
          </div>

          <input type="submit" value="submit" className="btn btn-primary" />

          {user.error ? (
            <h3 style={{ color: "red" }}>{user.error}</h3>
          ) : (
            <p></p>
          )}
        </form>
        <Link to="/companysignup"> Create a new accout</Link>
      </div></div>
      <div className="col-4"></div>
    </div>
      
    </div>
  );
};

export default CompanyLogin;
