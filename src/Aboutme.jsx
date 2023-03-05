import React from "react";
import pfp from "./pfp.jpg"
function Aboutme(){
  return(
    <>
     <br /><br />
       <div className="container-fluid text-center" id="cont1">
        <br />
       <img src={pfp} class="rounded-circle" height="400" width="450"/>
       <br/> <br />
       
        <h1 id="aboutme" style={{fontFamily:"fantasy",color:"yellow"}}> hi, I'm Tim <br />
        <br />
        <p style={{fontFamily:"fantasy",fontSize:"35px"}}> I'm 14 years old <br /> 
        I like to program bots <br /> 
        
        I also like Yeojin,Yena,Yuqi <br />
        <th/> 
        My favorite music artists are Loona, Red Velvet, Twice, fromis_9, IZ*ONE <br />
        I  play Tennis and video games</p></h1>
       </div>
    </>
  );

}
export default Aboutme;