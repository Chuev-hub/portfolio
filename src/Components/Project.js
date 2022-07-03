import React from "react";
function Project(props) {
    var d =  require('../data.json').mas.find(x=>x.id==props.match.params.id)
    return (
    
    <div className="d-flex justify-content-center" style={{marginTop:"50px"}}>
    
    <div style={{width:"500px"}}>

<div id="carouselExampleIndicators" className={d.darkTheme ? "carousel carousel-dark slide":"carousel slide"}  data-bs-ride="true" style={{borderRadius: "10px",boxShadow:"0 0 100px rgba(0,0,0,.8), inset 0 0 50px rgba(0,0,0,1)", position: "relative",}}>
  <div className="carousel-indicators">
  {d.url.map(x => 
            ( 
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={d.url.findIndex(c=>c==x)}  className={x == d.url[0] ? "active":""} aria-current={x == d.url[0] ? "true":"false"} aria-label={"Slide "+(d.url.findIndex(c=>c==x)+1)}></button>
             )
      )}

   
  </div>
  <div className="carousel-inner ">
   
    {d.url.map(x => 
            (  <div className={x == d.url[0] ? "carousel-item active":"carousel-item "}>
        <img src={require("../Screenshots/"+x)}  className="d-block   w-100"   />
      </div> )
      )}

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div></div>
    );}
    export default Project;



