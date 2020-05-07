import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class NavBar extends Component {
    render() {
        return (
            <div className="navBar">     
                <Link to="/"><img src="../../../../../public/images/home.png" alt="beers" /></Link>
            </div>
        )
    }
}

export default NavBar