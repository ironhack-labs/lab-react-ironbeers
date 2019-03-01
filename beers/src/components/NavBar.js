import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <NavLink to="/">
                    <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="Go home" width="100%" height="200px" />
                </NavLink>
            </nav>
        )
    }
}