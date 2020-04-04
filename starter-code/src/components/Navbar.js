import React from 'react'
import {Link} from "react-router-dom";
import '../Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <Link to="/">
                <img className="navbarstyle" src="/images/navbar.jpg" alt="navbar"/>
            </Link>
        )
    }
}

export default Navbar
