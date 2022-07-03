import React from "react";
function Project(props) {
  
    return (<div>

        <div>{props.match.params.id}</div> 
        <div>{props.match.params.technology}</div> 
        </div>
    );}
    export default Project;