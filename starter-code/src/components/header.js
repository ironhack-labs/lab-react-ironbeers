import React, { Component } from "react"
import { Link } from "react-router-dom";
import home from "../images/home.png";

class Header extends Component {
    render(){
        return(
            <header className="bg-primary">
                <Link to="/">
                    <img src={home} alt="icon"></img>
                </Link>
            </header>
        )
    }
}

export default Header