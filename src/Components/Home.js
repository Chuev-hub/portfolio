import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import { useMediaQuery } from 'react-responsive'
import Typed from 'react-typed';
function Home() {
  
  return (
    <div >
     
     
     <div className="d-flex justify-content-center">
        <div className="d-flex  flex-column">
          <div><p className="name" >CHUEV ILYA</p>
          </div><div className="wrapper">
          <Typed 
                    strings={['<span class="title">Full-stack developer</span><br/><span class="title3">.NET + React</span><br/><span class="title2">scroll down for my portfolio ˅</span>']}
                    typeSpeed={60}
                />
                <div>
                </div>
          </div></div>
      </div>
    </div>
  );
}

export default Home;