import React from 'react';
import sample from './earth.mp4'
import './newVideo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

const EarthRound = () => {
    return (
        <div>

            <div style={{fontFamily: 'Besley'}}>

                <div className="heroContainer">

                    <div className="heroBg">

                        <video className="vdo" autoPlay muted loop >
                            <source src={sample} type="video/mp4" />
                        </video>


                    </div>

                    <div className="heroContent">

                        <h1 style={{ color: "white", textAlign: "center" }}> <span style={{ color: "#0f66f2" }}>Internship</span>  Bangladesh ..</h1> <br />
                        <h4 style={{ color: "white", textAlign: "center"  }}>Our mission is to provide students, recent graduates and young professionals of all backgrounds with opportunities for national and international work experience</h4> <br />
                    <Link to="/home">    <button className="btn btn-lg" style={{ backgroundColor: 'rgb(73, 180, 194)', }}>Intern Page <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button></Link>


                    </div>

                </div>


            </div>


        </div>
    );
};

export default EarthRound;