

import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  
    return (
        <div class="card border-light text-center mt-5 mb-5" style={{background:"rgba(0, 0, 0, 0.2)",width: '70vw'}}>
  <div class="card-header">
  {props.technology}
  </div>
  <div class="card-body ">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.options}</p>
    <Link to={props.link} class="btn btn-light">View</Link>
  </div>
  <div class="card-footer text-light">
  {props.date}
  </div>
</div>
    );}
    export default Card;

  