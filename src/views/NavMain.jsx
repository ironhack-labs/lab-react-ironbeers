import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavMain extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/">
                    Home
                </NavLink>
                <br></br>
                <NavLink exact to="/beers">
                    Beers
                </NavLink>
                <NavLink exact to="/random-beer">
                    Random Beer
                </NavLink>
                <NavLink exact to="/new-beer">
                    New Beer
                </NavLink>
            </nav>
        )
    }
}
