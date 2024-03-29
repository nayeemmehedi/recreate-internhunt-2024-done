import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web';
import notfound from "./NotFound.json"


function NotFound() {

  const container = useRef(null)

  useEffect(() => {

    lottie.loadAnimation({
      container:container.current, // Required
     
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      animationData: notfound, // Name for future reference. Optional.
    })
    
  
  }, []);




  return (
    <div className="App">
      
      <br /> <br />

      <div style={{height:"650px"}} className="container" ref={container}></div>

   
     
    </div>
  );
}

export default NotFound;