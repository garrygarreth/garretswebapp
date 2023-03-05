import React from "react";
import Videoof from "./Videoof.mp4";
import caravan from "./caravan.mp3";
import Aboutme from "./Aboutme";

function Home() {
    return(
      <>
      <div>
      <iframe width="560" height="315" className="music" src="https://www.youtube.com/embed/VRwD9JL2sO0?rel=0&autoplay=1&controls=0&loop=1&mute=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="hero">
        <video autoPlay loop muted playsInline className="back-video"> 
         <source src={Videoof} type="video/mp4"/>
        </video>
      
      
     
      <div className="firstdiv">
       
       <div className="content">
       <br /> <br /><br /><br /><br /><br /><br /><br />
        <h1 className="glow"> Tim/Garry's Webpage</h1>
        <p></p> <br /><br /><br />
        <a className="content"> Know about me</a>
        
       </div>
       </div>
       </div>
       <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
      

      
     
     
    
        </div>
      </>
    );

}
export default Home;



















