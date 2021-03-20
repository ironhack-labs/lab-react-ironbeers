import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img style={{height: "40px"}} 
                src="http://users.cs.cardiff.ac.uk/KurtevaA/Final%20Year%20Project/FYP/home.png" alt=""/>
            </Link>
        </header>
    )
}

export default Header