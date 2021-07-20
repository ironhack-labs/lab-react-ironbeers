import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import house from '../assets/house.png';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <Link to="/"><img src={house} alt="Home" height="20px" /></Link>
        );
    }
}
 
export default Navbar;