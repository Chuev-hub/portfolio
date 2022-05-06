import React from "react";
function Project(props) {
  
    return (
        <div>{props.match.params.id}</div>
    );}
    export default Project;