import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'


const home = () => {

    return (
        <div>
            <article className="home">

                <Link to={`/beers`}> <img src="/images/beers.jpg" alt="beers" /></Link>
                <h4>All Beers</h4>
                <p>DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription</p>
                <hr></hr>
            </article>
            <article className="home">

                <Link to={`/random-beer`}> <img src="/images/beer2.jpg" alt="beers2" /></Link>
                <h4>Random Beer</h4>
                <p>DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription</p>
                <hr></hr>
            </article>
            <article className="home">

                <Link to={`/new-beer`}> <img src="/images/beer3.jpg" alt="beers3" /></Link>
                <h4>New Beer</h4>
                <p>DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription</p>
                <hr></hr>
            </article>
        </div>
    )
}

export default home