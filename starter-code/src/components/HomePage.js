import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <ul>
            <li><Link to={`/AllBeers`}>Todas las cervezas</Link></li>
            <li><Link to={`/RandomBeer`}>Cerveza aleatoria</Link></li>
            <li><Link to={`/NewBeer`}>Nueva cerveza</Link></li>
        </ul>
    )
}


export default Home