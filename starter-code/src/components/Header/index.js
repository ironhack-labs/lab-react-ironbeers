import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <Link to='/'>  <img src='../images/home.png' className="imgHeader" alt="home"/> </Link>
            </div>
        )
    }
}

export default Header;