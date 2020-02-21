import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>Salut c'est la Home page</p>

                <NavLink to="/all-beers"> All beers</NavLink>
                <NavLink to="/random-beer"> Get a random beer</NavLink>
                <NavLink to="/new-beer"> Create a new beer</NavLink>
                
            </div>
        )
    }
}
