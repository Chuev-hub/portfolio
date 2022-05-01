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
          <div><p className="name glow" >CHUEV ILYA</p>
          </div>
          <div className="greening">
          <span class="title">Full-stack</span>  
          <span class="title">developer</span>
          
          <span class="title3">.NET + React</span>
          </div> 
          <div className="wrapper">
          <h1 class="greening2">
          <Typed 
                    strings={['<span class="title2">scroll down to see my portfolio</span>']}
                    typeSpeed={60}
                />
               </h1>
                <div>
                </div>
          </div>
          <div className='d-flex flex-column' style={{marginTop:'10vw'}}> 
                 <span className='codeProj'>&lt;projects&gt;</span>
                 <span className='codeProj2'>&lt;div&gt;&lt;/div&gt;</span>
                 <span className='codeProj2'>&lt;div&gt;&lt;/div&gt;</span>
                 <span className='codeProj2'>&lt;div&gt;&lt;/div&gt;</span>
                 <span className='codeProj2'>&lt;div&gt;&lt;/div&gt;</span>
                 <span className='codeProj2'>&lt;div&gt;&lt;/div&gt;</span>
                 <span className='codeProj2'>&lt;div&gt;&lt;/div&gt;</span>
                 <span className='codeProj'>&lt;/projects&gt;</span>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Home;