import React, { Component } from 'react'
import './home.css';
import { Link } from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div class="home">
                <h1>THE REAL IRONBEERS</h1>
                <div className="section"><Link to="/beers"><img src="images/beers.png" alt="" className="src"/><h2>All Beers</h2></Link></div>
                <div className="section"><Link to="/randombeer"><img src="images/random-beer.png" alt="" className="src"/><h2>Random Beer</h2></Link></div>
                <div className="section"><Link to="/newbeer"><img src="images/new-beer.png" alt="" className="src"/><h2>New Beer</h2></Link></div>
            </div>
        )
    }
}
