import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return(
        <div className="container">
            <article >
                <Link to="/beers" >
                    <img src="/images/beers.png" alt="beers"></img>
                    <h2>All Beers</h2>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </article>

            <article >
                <Link to="/random-beer" >
                    <img src="/images/random-beer.png" alt="beers"></img>
                    <h2>Random Beer</h2>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </article>

            <article >
                <Link to="/new-beer" >
                    <img src="/images/new-beer.png" alt="beers"></img>
                    <h2>New Beer</h2>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </article>

        </div>
    )
}

export default HomePage