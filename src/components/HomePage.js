import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to='/beers'>All beers</Link>
                <Link to='/random-beer'>Random beer</Link>
                <Link to="/new-beer">New beer</Link>
            </div>
        )
    }
}
