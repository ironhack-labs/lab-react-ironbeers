import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-section">
                    <h2><Link to={`/beers`}>All Beers</Link></h2>
                </div>
                <div className="home-section">
                    <h2><Link to={`/random-beer`}>Random Beer</Link></h2>
                </div>
                <div className="home-section">
                    <h2><Link to={`/new-beer`}>New Beer</Link></h2>
                </div>
                
            </div>
        )
    }
}
