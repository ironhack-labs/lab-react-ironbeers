import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light p-4 mb-2 mx-auto bg-info text-white text-center d-flex justify-content-center">
  <Link to='/'><img className='home align-self-center' src="./images/beer-icon.png" alt="beer-mug"/></Link>
</nav>
        )
    }
}
