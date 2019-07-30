import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {


render() {
return(
    <nav>
    <NavLink to="/">Home</NavLink>
    </nav>
)
}
}
export default Header;