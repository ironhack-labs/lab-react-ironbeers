import {Link} from "react-router-dom"
import React from "react"

export default function NavBar() {
    return (
        <header className="layoutHead"><Link to="/"><img src="assets/house.png" alt="house"/></Link></header>
    )
}
