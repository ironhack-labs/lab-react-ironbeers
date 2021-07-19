import React, { Component } from 'react'
import {Link} from 'react-router-dom'

function RandomBeer () {
    
        return (
            <div>
              <img src={require('../assets/random-beer.png')} alt='check these beers'/>
              <h1>
                <Link to='/randombeer'>
                  Random beer
                </Link>
              </h1>
              <p1>Lorem Ipsum Lorem Ipsum</p1>
            </div>
        )    
}

export default RandomBeer