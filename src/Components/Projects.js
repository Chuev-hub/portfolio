import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
function Projects() {
  var mas = require('../data.json').mas;
  
    return (
        <div>
             <div className="d-flex justify-content-center">
          <div className="" style={{textAlign:"center",margin:"20px",fontSize:"25px",fontWeight:"bold"}}>My projects</div></div>
          <div className="d-flex justify-content-center">
           
                <div className='cards' > 
                {mas.map(x => (
         <Card technology= {x.technology}
         title= {x.title}
         options= {x.shortMessage}
         date= {x.date}
         link={"/project/"+ (x.id)}
         />
      ))}
                 
                  </div>
            </div> 
        </div>
    );}
    export default Projects;