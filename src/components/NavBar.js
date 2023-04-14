import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to={'/'}>
        <nav className="navbar bg-primary text-light">
          <div className="container-fluid justify-content-center">
            <i className="fa fa-home" aria-hidden="true" style={{fontSize: '2em'}}></i>
          </div>
        </nav>
      </Link>
    </>
  )
}

export default NavBar