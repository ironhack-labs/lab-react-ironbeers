import React from 'react'
import {Link} from 'react-router-dom'

function Home() {

    return (
        <div>
            IRON BEEEEEERS
            <div>
                <img src={require('../assets/beers.png')} alt='check these beers'/>
                <h1>
                    <Link to='/beers'>
                        All beers           
                    </Link>
                </h1>
                <p1>Lorem Ipsum Lorem Ipsum</p1>
            </div>
            <div>
              <img src={require('../assets/random-beer.png')} alt='check these beers'/>
              <h1>
                <Link to='/randombeer'>
                  Random beer
                </Link>
              </h1>
              <p1>Lorem Ipsum Lorem Ipsum</p1>
            </div>
            <div>
              <img src={require('../assets/new-beer.png')} alt='check these beers'/>
              <h1>
                <Link to='/newbeer'> 
                  New beer
                </Link>
              </h1>
              <p1>Lorem Ipsum Lorem Ipsum</p1>
            </div>    
        </div>
    )
}

export default Home
