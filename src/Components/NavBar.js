import React from 'react';
import { Link } from 'react-router-dom';
function NavBar(){
return(
    <nav className="navbar navbar-default navbar-dark"style={{backgroundColor: "#61dafb00"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " to="/contact">Contact</Link>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>
);
}
export default NavBar;