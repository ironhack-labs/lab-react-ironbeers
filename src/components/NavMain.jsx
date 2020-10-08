import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavMain extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to='/'><span role="img" aria-label="img" >🏠</span></NavLink>
            </nav>
        )
    }
}

// <NavMain />
export default NavMain;