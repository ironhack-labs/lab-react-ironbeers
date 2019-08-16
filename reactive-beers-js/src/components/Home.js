import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <Link to="/beers" ><img src="../img/beers.png" alt="beers" />Beers</Link>
            <Link to="/random-beer"><img src="../img/new-beer.png" alt="beers" />Random Beer</Link>
            <Link to="/new-beer"><img src="../img/random-beer.png" alt="beers" /> Create Beer</Link>
        </div>
    )
}

export default Home