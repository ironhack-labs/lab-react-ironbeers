import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (
            <nav>
                <h3><Link to={`/`}>Home</Link></h3>
            </nav>
        )
    }
}
