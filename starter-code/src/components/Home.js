import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <article>
               <Link to='/beers'><img alt="photo" src="/images/beers.png"></img></Link>
                <h1>All Beers</h1>
                <p>pendejadas dice charly.............</p>
            </article>

            <article>
               <Link to='/random-beer'><img alt="photo" src="/images/random-beer.png"></img></Link>
                <h1>Random Beer</h1>
                <p>más pendejadas dice charly.............</p>
            </article>

            <article>
               <Link to='/new-beer'><img alt="photo" src="/images/new-beer.png"></img></Link>
                <h1>New Beer</h1>
                <p>y unas extras pendejadas dice charly.............</p>
            </article>


        </div>
    )
}

export default Home
