import React, { Component } from 'react'
import { Link } from "react-router-dom"
import logo from "../components/house.png"

export class NavBar extends Component {
    render() {
        return (
            <div id="navbar">
                <Link to="/"><img src={logo}></img></Link>

            </div>
        )
    }
}

export default NavBar

// const NavMain = () => {
//         return (
//             <div>
//             <Link to="/">Home</Link>
//             <Link to="/beers">Beers</Link>
//             <Link to="/random-beers">Random Beers</Link>
//             <Link to="/new-beer">New Beer</Link>
//           </div>
//         )
// }

// export default NavLink
