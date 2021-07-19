import React, { Component } from 'react'
import {Link} from 'react-router-dom'

function NewBeer () {
    
        return (
            <div>
              <img src={require('../assets/new-beer.png')} alt='check these beers'/>
              <h1>
                <Link to='/newbeer'> 
                  New beer
                </Link>
              </h1>
              <p1>Lorem Ipsum Lorem Ipsum</p1>
            </div>
        )
}

export default NewBeer
