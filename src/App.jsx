import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar.jsx";

// import Home from "./Component/Home/Home1/Home.js";

// import NotFound from "./Component/NotFound/NotFound.js";
// import Navbar from "./Component/Navbar/Navbar.js";
// import FullPage from "./Component/Home/Home1/Newhome/BoomHome/FullPage/FullPage";
// import FormCV from "./Components2/FormCV/FormCV";
// import FirstPage from "./Component/FirstPage/FirstPage";
// import Login from "./Component/Login/Login";
// import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
// import SignUp from "./Component/SignUp/SignUp";
// import CardUser from "./Components2/CardUser/CardUser";

// import Admin from "./Components2/AdminPage/Admin";

// import Company from "./Components3/Company/Company";
// import NewPrivateRouter from "./Components4/NewPrivateRouter/NewPrivateRouter";
// import CompanyLogin from "./Components4/CompanyLogin/CompanyLogin";
// import CompanySignUp from "./Components4/CompanySignUp/CompanySignUp";
// import Review from "./Components7last/Review/ReviewNayeem";
// import ApproveCV from "./Components3/ApproveCV/ApproveCV";
// import HireU from "./Components7last/HireU/HireU";

function App() {
  return (
    <Router>
      <Route>
        <Navbar />
      </Route>
    </Router>
  );
}

export default App;
