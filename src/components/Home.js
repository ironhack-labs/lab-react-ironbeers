
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (

        <div>
            <img src='beers.png' />
            <Link to="/beers">All Beers</Link>
            <p>lorem ipsum</p>
            <br></br>
            <img src='./../assets/random-beer.png' />
            <h3><Link to="/random-beer">Random Beer</Link></h3>

            <p>lorem ipsum</p>
            <br></br>
            <img src='new-beer.png' />
            <h3><Link to="/new-beer">New Beer</Link></h3>

            <p>lorem ipsum</p>


        </div>
    )
}

export default Home