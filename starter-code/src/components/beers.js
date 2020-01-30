import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class beers extends Component {
    render() {
        return (
            <div>
                <h1>All Beers</h1>
                <Link to='/'>Back to Main Page</Link>
            </div>
        )
    }
}
