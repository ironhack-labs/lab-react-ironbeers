import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to='/beers'><h2>All Beers</h2></Link>
                <img src="./images/beers.png" alt="beersbild"></img>

                <Link to='/random-beer'><h2>All Random Beers</h2></Link>
                <img src="./images/random-beer.png" alt="randombild"></img>

                <Link to='/new-beer'><h2>All New Beers</h2></Link>
                <img src="./images/new-beer.png" alt="newbeerbild"></img>
                
            </div>
        )
    }
}
