import React from 'react'
import {Link } from "react-router-dom";

const Navbar= () =>{
  return(
  <nav className="blue darken-1" >
    <div className="nav-wrapper ">
      <Link to="/" className="  brand-logo left">
        <i className="center-align large material-icons">home</i>
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/beers" className="otherFields">
            <button  className="btn waves-effect waves-light center-align " > Beers</button>
          </Link>
        </li>
        <li>
          <Link to="/randombeers" className="otherFields">
            <button  className="btn waves-effect waves-light center-align " > RandomBeer</button>
          </Link>
        </li>
        <li>
          <Link to="/newbeer" className="otherFields">
            <button  className="btn waves-effect waves-light center-align " > New Beer</button>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar