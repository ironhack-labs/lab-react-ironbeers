import React from 'react';
import { Link } from "react-router-dom";
import HomeImage from './../assets/home-image.png';


const Header = () => {

        return (
            <div>
            <Link to={'/'}><img src={HomeImage} alt="home" className="homepageLinks"/></Link>
            </div>
        )
    }

export default Header;
