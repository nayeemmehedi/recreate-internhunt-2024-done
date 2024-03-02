import React from 'react';
import {Link,useHistory} from 'react-router-dom'

const LoggedOut = () => {

    const history =useHistory()



    const logout = () => {
    localStorage.clear();
    history.push('/')
    window.location.reload();

  }
    return (

      <div className="row">
        <div className="col-6">

        <div className="text-center mt-5 pt-5">
        <p className="fst-italic">Company Logged Out Page</p>
        <button className="btn btn-primary" onClick={logout}>LOgged Out</button>
            
        </div>
        
        </div>
        <div className="col-6"></div>
      </div>



        
    );
};

export default LoggedOut;