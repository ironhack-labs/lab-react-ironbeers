import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default class NewBeer extends Component {
    render() {
        return (
            <div>
            <h1>New Beers</h1>
            <Link to="./HomePage">
                <Navbar />
            </Link>
            </div>
        )
    }
}
