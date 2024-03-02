import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar.jsx";

import Home from "./Component/Home/Home1/Home.jsx";

import NotFound from "./Component/NotFound/NotFound.jsx";
import FullPage from "./Component/Home/Home1/Newhome/BoomHome/FullPage/FullPage.jsx";
import FormCV from "./Components2/FormCV/FormCV.jsx";
import FirstPage from "./Component/FirstPage/FirstPage.jsx";
import Login from "./Component/Login/Login.jsx";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute.jsx";
import SignUp from "./Component/SignUp/SignUp.jsx";
import CardUser from "./Components2/CardUser/CardUser.jsx";

import Admin from "./Components2/AdminPage/Admin.jsx";

import Company from "./Components3/Company/Company.jsx";
import NewPrivateRouter from "./Components4/NewPrivateRouter/NewPrivateRouter.jsx";
import CompanyLogin from "./Components4/CompanyLogin/CompanyLogin.jsx";
import CompanySignUp from "./Components4/CompanySignUp/CompanySignUp.jsx";
import Review from "./Components7last/Review/ReviewNayeem.jsx";
import ApproveCV from "./Components3/ApproveCV/ApproveCV.jsx";
import HireU from "./Components7last/HireU/HireU.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route path="/intern-job">
            <Home />
          </Route>
          <Route path="/fullpage/:id">
            <FullPage></FullPage>
          </Route>

          <PrivateRoute path="/FormCV/:id">
            <FormCV></FormCV>
          </PrivateRoute>

          <PrivateRoute path="/FormCV">
            {/* Redirect from /old-path to /new-path */}
            <Redirect to="/" />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>
          <NewPrivateRouter path="/company/nayeem">
            <Company />
          </NewPrivateRouter>
          <NewPrivateRouter path="/approve">
            <ApproveCV />
          </NewPrivateRouter>
          <Route path="/company">
            <Company />
          </Route>
          <PrivateRoute path="/carduser">
            <CardUser />
          </PrivateRoute>
          <PrivateRoute path="/hire">
            <HireU />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/companysignup">
            <CompanySignUp />
          </Route>
          <Route path="/companylogin">
            <CompanyLogin />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
