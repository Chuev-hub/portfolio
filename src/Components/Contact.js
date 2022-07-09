import React from "react";
function Contact() {
  
    return (<div  style={{
        position: "absolute",
        width: "100%",
        top: "20%",
        textAlign: "center",
      }}>
        
        <div
      className="contact" 
      >
         <div className="image">
             <img style={{width:"250px",border: "7px solid white", borderRadius:"50%"}} src={require("../img/IMG_1316.JPEG")}></img>
            </div>
        <div   style={{ zIndex:"2", alignSelf:"center"}}>
          <div className="d-flex align-items-center">
        <div style={{ fontSize: "30px" ,maxWidth:"300px",textAlign:"start"}}>CHUEV ILYA</div>
        <div style={{ fontSize: "18px" ,color:"rgb(201, 201, 200)",marginLeft:"15px",marginTop:"10px"}}>18 y.o.</div>
        </div><div style={{ fontSize: "18px" ,color:"rgb(201, 201, 200)", maxWidth:"300px",textAlign:"start"}}>Kyiv → Krakow</div>
        <div style={{ fontSize: "18px",minWidth:"auto",maxWidth:"350px",textAlign:"start"}}>
        <ul>
  <li> A graduate of IT Academy</li>
  <li>KPI IASA second year student</li>
  <li>English - A2/B1</li>
 
</ul>
<div>
    Contacts:
</div>
<ul>
<li><div>Phone:{" "} <a style={{color:"white"}}href="tel: +380955578928">+380-95-557-89-28</a></div></li>
<li><div>Mail:{" "}<a style={{color:"white"}}href="mailto: chuev120@gmail.com">chuev120@gmail.com</a></div></li>
<li><div>Telegram:{" "}<a style={{color:"white"}}href="https://telegram.me/palaniza"> @palaniza</a></div></li>
<li><div>Git-hub:{" "}<a style={{color:"white"}}href="https://github.com/Chuev-hub"> github.com/Chuev-hub</a></div></li>
  

 
</ul>
<a className="btn btn-light"  download="CV Chuev .NET.pdf" href={require("../CV CHUEV .NET.pdf")}>Download CV</a>

</div>
            </div>
           
       
      </div></div>
    );}
    export default Contact;