import React from "react";
import styles from "./HeaderNav.css"
import { Link } from "react-router-dom";
import HouseImage from "../../assets/house-icon.png"


function HeaderNav() {
    return ( 
        <div className="header-nav">
            <Link to="/">
            <img src={HouseImage} alt="home icon" width="50px"/>
            </Link>
        </div>
     );
}

export default HeaderNav;