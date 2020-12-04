import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Link to="/beers">All beers</Link>
                <Link to="/random">Random beer</Link>
                <Link to="/new-beer">New beer</Link>
            </div>
        )
    }
}
