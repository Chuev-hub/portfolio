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
    <div className="d-flex  flex-column mdiv">
      <div className='title1'>Chuev Ilya</div>
      <div className='title2'>Full-stack developer</div>
      <div className='title3'>.NET + React</div>
    </div>
    </div>
     
    
    </div>
  );
}

export default Home;