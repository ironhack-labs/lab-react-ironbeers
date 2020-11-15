import React from 'react'
import CardHome from './CardHome'
import beers from "../images/beers.jpg"
import newbeer from "../images/new.jpg"
import random from "../images/random.jpg"


function Home() {
    return (
        <div>
        <CardHome image={beers} title="All Beers" to="/beers"/>
        <CardHome image={random} title="Random Beer" to="/random-beer"/>
        <CardHome image={newbeer} title="New Beer" to="/new-beer"/>
        </div>
    )
}

export default Home
