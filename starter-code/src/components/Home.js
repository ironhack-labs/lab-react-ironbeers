import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            <article>
               <Link to='/beers'><img alt="photo" src="/images/beers.png"></img></Link>
                <h1>All Beers</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </article>

            <article>
               <Link to='/random-beer'><img alt="photo" src="/images/random-beer.png"></img></Link>
                <h1>Random Beer</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </article>

            <article>
               <Link to='/new-beer'><img alt="photo" src="/images/new-beer.png"></img></Link>
                <h1>New Beer</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </article>
        </div>
    )
}

export default Home
