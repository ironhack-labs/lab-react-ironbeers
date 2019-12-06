import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to={"/"}>
                    <img width="1000" src="../images/home-link.png" alt="home link"/>
                </Link>
            </div>
        )
    }
}
