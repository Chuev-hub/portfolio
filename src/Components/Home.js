import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import { useMediaQuery } from 'react-responsive'
import Typed from 'react-typed';
import NavBar from './NavBar';
function Home() {
  
  return (
    <div >
    
    <div className="d-flex justify-content-center">
    <div className="d-flex  flex-column" style={{marginTop:"15%"}}>
      <div className='title1'>Chuev Ilya</div>
      <div className='title2'>Full-stack developer</div>
      <div className='title3'>.NET + React</div>
    </div>
    </div>
     
     {/* <div className="d-flex justify-content-center">
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
          
          
          <div className='d-flex flex-column proj' > 
          <span className='codeProj'>&lt;projects&gt;</span>
                      <div className ='codeProj2'>
                      <span className=''>&lt;div class = &quot;ASP.NET+REACT&quot;&gt;</span>
                      <Link className='link'>FilmsSite 10.2021</Link>
                      <span className=''>&lt;/div&gt;</span>
                      </div>
                      <div className ='codeProj2'>
                      <span className=''>&lt;div class = &quot;WPF&quot;&gt;</span>
                      <Link className='link'>Steam 04.2021</Link>
                      <span className=''>&lt;/div&gt;</span>
                      </div>
                      <div className ='codeProj2'>
                      <span className=''>&lt;div class = &quot;WPF&quot;&gt;</span>
                      <Link className='link'>Solar 03.2021</Link>
                      <span className=''>&lt;/div&gt;</span>
                      </div>
                      <div className ='codeProj2'>
                      <span className=''>&lt;div class = &quot;WPF&quot;&gt;</span>
                      <Link className='link'>Cars3D 11.2020</Link>
                      <span className=''>&lt;/div&gt;</span>
                      </div>
                      <div className ='codeProj2'>
                      <span className=''>&lt;div class = &quot;WinForms&quot;&gt;</span>
                      <Link className='link'>Phonebook 10.2020</Link>
                      <span className=''>&lt;/div&gt;</span>
                      </div>
                      <div className ='codeProj2'>
                      <span className=''>&lt;div class = &quot;C#&quot;&gt;</span>
                      <Link className='link'>FileManager 9,2020</Link>
                      <span className=''>&lt;/div&gt;</span>
                      </div>
                      <div className ='codeProj2'>
                      <span className=''>&lt;div class = &quot;C++Console&quot;&gt;</span>
                      <Link className='link'>Tester 03,2020</Link>
                      <span className=''>&lt;/div&gt;</span>
                      </div>
                 <span className='codeProj bottomd'>&lt;/projects&gt;</span>
          </div>
          </div>
      </div> */}
    </div>
  );
}

export default Home;