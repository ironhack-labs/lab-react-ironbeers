import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ImageBeer from './../assets/beers.png'
import ImageNewBeer from './../assets/new-beer.png'
import ImageRandomBeer from './../assets/random-beer.png'


 class Home extends Component {
    render() {
        return (
            <div className="SuperContainer">
                
                <Link to={'/beers'}> <p className='textLink'>All Beers</p>
                <img src={ImageBeer} alt="beers"/></Link>
                <Link to={'/random-beer'}> <p className='textPink'>Random Beers</p>
                <img src={ImageRandomBeer} alt="randoBeers"/>
                </Link>
                <Link to={'/new-beer'}> <p className='textSink'>New Beers</p>
                <img src={ImageNewBeer} alt="newBeers"/></Link>
                
                

                
            </div>
        )
    }
}


export default Home
