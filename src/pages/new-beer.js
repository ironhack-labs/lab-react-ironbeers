import React from "react";
import {Link} from "react-router-dom";
import HomePage from "./HomePage";
import Home from "../assets/home.png";

const NewBeer = () => {
    return (
        <>
        <header>
        <Link to="/">
            <img src={Home} />
        </Link>
        </header>
        </>
    )
}

export default NewBeer