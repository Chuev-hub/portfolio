import React from "react";
import { ReactPhotoCollage } from "react-photo-collage";

function Project(props) {
  var d = require("../data.json").mas.find(
    (x) => x.id == props.match.params.id
  );

  const setting = {
    width: "450px",
    height: d.url.length > 2 ? ["250px", "120px"] : ["250px"],
    layout: d.url.length > 2 ? [1, 3] : [2],
    photos: d.url.map((x) => {
      return { source: require("../Screenshots/" + x) };
    }),
    showNumOfRemainingPhotos: true,
  };
  console.log(setting);
  return (
    <div
      className="d-flex justify-content-center align-items-start elementP"
      style={{ marginTop: "50px" }}
    >
      <ReactPhotoCollage {...setting} style="border:red" />
      <div
        className="d-flex justify-content-center flex-column"
        style={{ width: "400px",zIndex:"2" ,marginLeft: "30px" }}
      >
        <div style={{ fontSize: "30px" }}>{d.title}</div>
        <div style={{ fontSize: "15px" }}>{d.date}</div>
        <br />
        <div style={{ fontSize: "20px" }}>{"Stack: " + d.technology}</div>
        <div>{d.longMessage}</div>
        <div
          className="d-flex align-items-center"
          style={{ marginTop: "20px" }}
        >
          <a href={d.source} target="_blank">
            <img width="50px" src={require("../img/icons8-github-120.png")} />
          </a>
          {d.publishLink.length > 0 && (
            <a
              target="_blank"
              style={{ marginLeft: "10px", marginTop: "2px" }}
              href={d.publishLink}
            >
              <img
                width="40px"
                src={require("../img/pngfind.com-hover-icon-png-4333068.png")}
              />
            </a>
          )}{" "}
        </div>
      </div>
    </div>
    //     <div className="d-flex justify-content-center" style={{marginTop:"50px"}}>

    //     <div style={{width:"500px"}}>

    // <div id="carouselExampleIndicators" className={d.darkTheme ? "carousel carousel-dark slide":"carousel slide"}  data-bs-ride="true" style={{borderRadius: "10px",boxShadow:"0 0 100px rgba(0,0,0,.8), inset 0 0 50px rgba(0,0,0,1)", position: "relative",}}>
    //   <div className="carousel-indicators">
    //   {d.url.map(x =>
    //             (
    //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={d.url.findIndex(c=>c==x)}  className={x == d.url[0] ? "active":""} aria-current={x == d.url[0] ? "true":"false"} aria-label={"Slide "+(d.url.findIndex(c=>c==x)+1)}></button>
    //              )
    //       )}

    //   </div>
    //   <div className="carousel-inner ">

    //     {d.url.map(x =>
    //             (  <div className={x == d.url[0] ? "carousel-item active":"carousel-item "}>
    //         <img src={require("../Screenshots/"+x)}  className="d-block   w-100"   />
    //       </div> )
    //       )}

    //   </div>
    //   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
    //         </div></div>
  );
}
export default Project;
