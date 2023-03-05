import React from "react";
import yeo from "./yeo.jpg";
function Server(){
    return(
        <>
         <br />
         <br />

   <center>

   <div className="card" style={{width:"450px"}}>
        <img src={yeo}/>
        <div className="card-body" id="card1">
          <h4 className="card-title" style={{color:"white"}}> Tim/Garret's Lounge </h4>
          <p className="card-text" style={{color:"white"}}> my new Server, click below to join the server!
             
              <br/>
            
          </p>
          <a href="https://discord.com/invite/SF6WgfZJBb" class="btn btn-danger">Join my Discord Server!</a>
          
        </div>
    </div>
    </center>
        </>
    );
}

export default Server;