import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <ul style={{listStyleType: 'none'}}>
                    <li><Link to="/beers">Beers</Link></li>
                    <li><Link to="/random-beer">Random Beer</Link></li>
                    <li><Link to="/new-beer">Create a beer</Link></li>
                </ul>
            </div>
        )
    }
}
