import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink exact to="/">
                        <h3>Come back Home</h3>
                    </NavLink>
                </nav>
            </div>
        )
    }
}
