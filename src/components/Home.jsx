import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                <Link to={'/beers'}><img src={beers} alt="" style={{width: '500px'}}/></Link>
                </div>
                <div>
                <h2>All Beers</h2>
                </div>
                <div>
                <Link to={'/random-beer'}><img src={randomBeer} alt="" style={{width: '500px'}}/></Link>
                </div>
                <div>
                <h2>Random Beer</h2>
                </div> 
                <div>
                <Link to={'/new-beer'}><img src={newBeer} alt="" style={{width: '500px'}}/></Link>
                </div>
                <h2>New Beer</h2>
            </div>
        )
    }
}

export default Home
