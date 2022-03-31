import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <i className="fa fa-home header__icon" aria-hidden="true"></i>
      </Link>   
    </div>
  )
}

export default Header;