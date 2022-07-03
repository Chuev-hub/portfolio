

import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  
    return (
        <div className="card border-light text-center mt-5 mb-5" style={{background:"rgba(0, 0, 0, 0.2)",width: '400px'}}>
  <div className="card-header">
  {props.technology}
  </div>
  <div className="card-body ">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.options}</p>
    <Link to={props.link} className="btn btn-light">View</Link>
  </div>
  <div className="card-footer text-light">
  {props.date}
  </div>
</div>
    );}
    export default Card;

  