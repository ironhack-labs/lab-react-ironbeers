import React from "react"
import Logo from "../Logo/Logo"
import "./Header.css"

export default function Header(){
    return(
        <nav>
            <div className="Header">
                <Logo/>
            </div>
        </nav>
    )
}