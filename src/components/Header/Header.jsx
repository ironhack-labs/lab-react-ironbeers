import React from "react"
import {Link} from "react"
import './Header.css'
//Acceder a comandos Ctrl+shift+P para luego acceder a emojis
export default function Header() {
    return (<nav className="Header">
        <span role="img" aria-label="home">🏠</span>
    </nav>)
}