import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            
            <nav className="navbar is-link" role="navigation" aria-label="main navigation">
                <Link to="/">
                <span className="icon">
                    <i className="fas fa-home" style={{backgroundColor: "white"}}></i>
                </span>
                </Link>
                {/* <Link  style={{color: "white"}} to = "/random-beer">Random Beer</Link>
                <Link  style={{color: "white"}} to = "/new-beer">New Beer</Link> */}
            </nav>

        )
    }
}

export default Nav
