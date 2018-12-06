import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <nav className="navbar">
        {/* <Header/> */}
         <ul>
         <li>

         {/* <img className="imgHome" src={}/> */}
         <Link className="link" to="/allBeers">
            <h1>All beers</h1>
          </Link>
          <p> Lorem Ipsum is not simply random text. It has roots <br/>
          in a piece of classical Latin literature from 45 BC, making <br/>
          it over 2000 years old. Richard McClintock, a Latin.</p> 
          </li>

         <li>
         {/* <img className="imgHome" src={}/> */}
         <Link className="link" to="/randomBeer">
            <h1>Random beers</h1>
          </Link>
            <p> Lorem Ipsum is not simply random text. It has roots <br/>
          in a piece of classical Latin literature from 45 BC, making <br/>
          it over 2000 years old. Richard McClintock, a Latin.</p> 
          </li>

         <li>
         {/* <img className="imgHome" src={}/> */}
         <Link  className="link" to="/newBeer"> 
            <h1>New beers</h1>
          </Link>
            <p> Lorem Ipsum is not simply random text. It has roots <br/>
          in a piece of classical Latin literature from 45 BC, making <br/>
          it over 2000 years old. Richard McClintock, a Latin.</p> 
          </li>
        </ul>

      </nav>
    );
  
}

export default Navbar
