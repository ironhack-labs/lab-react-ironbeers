import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import "./navigation.css"

export default class NavBar extends Component {
    render() {
        return (
            <Link to={"/"}>
          {" "}
          <h1>Welcome to Ironbirras</h1>
        </Link>
        )
    }
}
