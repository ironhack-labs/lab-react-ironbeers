import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <Link to={"/"}>
                    <nav>
                        <img src="/images/beer-house.png" width = "100px"alt="home-logo"/>
                    </nav>
                    </Link>
                </header>
            </React.Fragment>
        )
    }
}
