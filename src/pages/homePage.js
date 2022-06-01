import React from 'react'
import "../home.css"
import beers from "../assets/beers.png"
import newBer from "../assets/new-beer.png"
import random from "../assets/random-beer.png"

export const homePage = () => {
  return (
    <div className='homePage'>
        <div className='divs'>
            <img src={beers} alt='foto'/>
            <h1>All beers</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className='divs'>
            <img src={random} alt='foto'/>
            <h1>Random Beer</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className='divs'>
            <img src={newBer} alt='foto'/>
            <h1>Random Beer</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
    </div>
  )
}
