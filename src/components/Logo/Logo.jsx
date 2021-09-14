import React from "react"
import "./Logo.css"
import { NavLink } from "react-router-dom";

export default function Logo(){
    return(
        <div className="Logo">
            <NavLink to="/" exact><img src="/home-7-32.png"/></NavLink>
        </div>
    )
}