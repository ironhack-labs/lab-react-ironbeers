import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>{
    return(
        <div>
            Hola
            <Link to='beers/all'>Ver todas las cervecitas</Link>
        </div>
    )
}

export default Home