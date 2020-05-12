import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <Link to="/"><i uk-icon="icon: home; ratio: 2.5" className="header-icon"></i></Link>
        </div>
    )
}

export default Header;