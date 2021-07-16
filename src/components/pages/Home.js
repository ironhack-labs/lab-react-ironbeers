import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <h1>Bievenid@ a la Cerveceria!</h1>
            <hr></hr>
            <Link to="/cervezas">Ver Cerves</Link>
            <br></br>
            <Link to="/cervezas/random">Cerve Random</Link>
            <br></br>
            <Link to="/cervezas/crear">Nueva Cerve</Link>
        </div>
    )
}

export default Home