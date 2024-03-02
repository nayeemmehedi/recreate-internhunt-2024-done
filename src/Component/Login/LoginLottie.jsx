import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';


const LoginLottie = () => {
     const container = useRef(null)

  useEffect(() => {

    lottie.loadAnimation({
      container:container.current, // Required
     
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      animationData: require('./register.json'), // Name for future reference. Optional.
    })
    }, []);
    
    return (
       <div>
      
      <br /> <br />

      <div style={{height:"550px"}} className="container" ref={container}></div>

   
     
    </div>
    );
};

export default LoginLottie;