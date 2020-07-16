import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
    return (
        <>
            <div className="homeSection">
                <Link to="/beers">All Beers</Link>
                <p>Blabla</p>

            </div>

            <div className="homeSection">
                <Link to="/beers/random">Random Beer</Link>
                <p>Blabla</p>
            </div>

            <div className="homeSection">
                <Link to="/beers/new-beer">New Beer</Link>
                <p>Blabla</p>

            </div>

        </>

    )
}

export default HomePage