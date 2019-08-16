import React from 'react'
import { Link } from 'react-router-dom'



const HomePage = ({ props}) => {

    return (
        <div className="col-md-3">
            <article>
                <section className="section-homepage">
                    <img src='/image/beers.png' />
                    <Link to={'/beers'}>All Beers</Link>
                </section>
                <section>
                    <img src='/image/random-beer.png'/>
                    <Link to={'/random-beer'}>Random Beer</Link>
                </section>
                <section>
                    <img src='/image/new-beer.png'/>
                    <Link to={'/new-beer'}>New Beer</Link>
                </section>
            </article>
        </div>
    )
}

export default HomePage