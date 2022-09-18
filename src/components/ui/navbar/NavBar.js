import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <div className='navbar d-flex justify-content-start align-items-center '>
      <div className='col-12 text-center'>
        <Link to={'/'}><i className="fa fa-home fa-3x text-light heading" ></i></Link>
      </div>
    </div>
  )
}

export default NavBar