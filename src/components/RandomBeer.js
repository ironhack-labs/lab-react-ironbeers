import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default class RandomBeer extends Component {
    render() {
        return (
            <div>
            <h1>Random Beers</h1>
            <Link to="./HomePage">
                <Navbar />
            </Link>
            </div>
        )
    }
}
