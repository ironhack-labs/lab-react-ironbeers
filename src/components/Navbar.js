import { useState, useEffect } from "react";     // <== IMPORT useEffect
import Home from '../assets/Home.png';
import {Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import HomePic from "../assets/Home.png";

function Navbar(){
    return(
        <nav>
            <Link to="/">
                <img src={HomePic} />
            </Link>
        </nav>
    )
}

export default Navbar;