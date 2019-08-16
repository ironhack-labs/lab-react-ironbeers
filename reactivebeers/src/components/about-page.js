import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return(
        <div className = "home">
            <Link to = '/allBeers'><img src="../img/beers.png" alt = "" /><h2>All Beers</h2></Link><br></br>
            <Link to = '/random'><img src="../img/random-beer.png" alt = "" /><h2>Random Beer</h2></Link><br></br>
            <Link to = '#'><img src="../img/new-beer.png" alt = "" /><h2>New Beer</h2></Link>
        </div>
    )
}

export default Home