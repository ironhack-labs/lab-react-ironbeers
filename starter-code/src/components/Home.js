import React from 'react'
import {Link} from "react-router-dom"

const Home = () =>{
    return (
    <div className='home'>
        <Link to='/all-beers'>
        <img src='../images/beers.png' alt="all beers"/>
        <h2>All Bears that you can imagine</h2>
        <p>lo que sea lo que sea lo que sea</p>
        </Link>
        <Link to='/random'>
        <img src='../images/random-beer.png' alt="random beer"/>
        <h2>One Random beer prepare yourself to be Amaze</h2>
        <p>lo que sea lo que sea lo que sea</p>
        </Link>
        <Link to='/new'>
        <img src='../images/new-beer.png' alt="new beer"/>
        <h2>Add one beer to the amazing universe</h2>
        <p>lo que sea lo que sea lo que sea</p>
        </Link>

    </div>
    )
} 
export default Home
