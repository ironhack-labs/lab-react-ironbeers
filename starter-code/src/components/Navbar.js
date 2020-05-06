import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const Navbar = () =>{
    return (
        <div className="navbar">
            <Link to="/"><Icon/></Link>
        </div>
    )

}
export default Navbar 