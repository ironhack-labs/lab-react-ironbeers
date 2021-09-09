import { HomeIcon } from "@heroicons/react/solid"
import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

export default function Header () {
    return(
        <div className="Header">
        <Link to="/">
            <HomeIcon className = "HomeIcon"/>
        </Link>
        </div>
    )

}