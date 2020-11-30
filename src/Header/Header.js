import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
//Header moet in alle pagina's geimporteerd worden!

function Header(){
    return(
        <div className="header">
            <Link to="/">Home</Link>
        </div>
    )
}

export default Header;
