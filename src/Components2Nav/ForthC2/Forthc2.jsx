import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";




const Forthc2 = () => {
    return (
        <div className='p-5'  style={{fontFamily: "Besley" }}>
            <h1 className="text-center pb-5">Working Steps</h1>
            <div className="row" >

                <div className="col-4">
                 <Link
                  class="nav-link active"
                  aria-current="page"
                  to="./review"
                >
                    <div class='d-flex justify-content-center'>
                        <div style={{ height: '70px', width: '70px',borderRadius:'10px ',boxShadow:'0 0 5px 4px #c7c6c5' }}>

                       <FontAwesomeIcon className='pt-2' icon={faCoffee} size="3x"  color="#632940" ></FontAwesomeIcon>


                        </div>
                    </div>
                    <br />
                    <div className='text-center'>

                    
                 <h5 style={{color:'red'}}>Review <span style={{color:'black'}}>Us</span></h5>
               
                        
                        <small style={{color:'black'}}>Your review is so valuable for us .Please review us..</small>

                    </div>
                     </Link>

                </div>
                <div className="col-4">
                <Link class="nav-link"  to="./home">

                    <div class='d-flex justify-content-center'>
                        <div style={{ height: '70px', width: '70px',borderRadius:'10px ',boxShadow:'0 0 5px 4px #c7c6c5' }}>

                        <FontAwesomeIcon className='pt-2' icon={faBug} size="3x"  color="#5259ab"></FontAwesomeIcon>


                        </div>
                    </div>
                    <br />
                    <div className='text-center'>

                    
                  <h5>Apply<span style={{color:'black'}}> For Intern</span> </h5>
                
                       
                        <small style={{color:'black'}}> An internship gives a student the opportunity for career exploration and development</small>

                    </div>
                    </Link>


                </div>
                <div className="col-4">
                 <Link class="nav-link"  to="./hire">
                    <div class='d-flex justify-content-center'>
                        <div style={{ height: '70px', width: '70px',borderRadius:'10px ',boxShadow:'0 0 5px 4px #c7c6c5'}}>

                       
                        <FontAwesomeIcon className='pt-2' icon={faAmbulance} size="3x"  color="#73452a"></FontAwesomeIcon>
                       


                        </div>
                        
                    </div>
                    <br /> 
                    <div className='text-center'>
                        <h5>Hire <span style={{color:'red'}}> You</span></h5>
                        <small style={{color:'black'}}> The company  selected candidate after the candidate is successful </small>

                    </div>
                     </Link>
                </div>
            </div>

        </div>

    );
};

export default Forthc2;