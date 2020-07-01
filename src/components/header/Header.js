import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

function Header(props){
    return(
      <header className="header">
        <NavLink activeClassName="selected" exact to="/"> - Home - </NavLink>
      </header>  
    )
}
export default Header;