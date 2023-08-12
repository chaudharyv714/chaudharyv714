import './App.css';
import { useState } from 'react';
function Navbar() {

  var check = window.innerWidth>576;
  const [nav,changenav]=useState(check?0:1);

  return (
      <div className="nav">
        <button  onClick={() => changenav(!nav)} className="menu">
          <i className="fas fa-bars"></i>
          {/* <span>Vipin</span> */}
        </button>
          <div className="listcontainer" style={{ display: nav ? 'none' : 'block' }}>
              <ul>
               <li><a href="/resume">Vipin</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#skillcontainer">Skills</a></li>
               <li><a href="#interestcontainer">Interests</a></li>
               <li><a href="#projectcon">Projects</a></li>
               <li><a href="#contact">Contact</a></li>  
              </ul>
          </div>
      </div>
    );
  }
 
  export default Navbar;