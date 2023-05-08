import React from "react";
import { Link } from 'react-router-dom';
import casita from '../assets/casita.png'

function Header() {
    return (
        <header>
            <Link to="/"><img src={casita}/></Link>
        </header>
    );
}

export default Header;