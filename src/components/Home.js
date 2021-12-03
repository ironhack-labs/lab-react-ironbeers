import React from 'react'
import { Link } from 'react-router-dom'
import BeersImg from '../assets/beers.png'
import RandomBeerImg from '../assets/random-beer.png'
import NewBeerImg from '../assets/new-beer.png'

export default function Home() {
    return (
        <div>
            <h1>IronBeers Home</h1>
            <Link className="link" to={`/beers`}>
                <div>
                    <img src={BeersImg} alt="All Beers Img" width="500" height="600" />
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum iure earum error similique veniam magni eius nam tenetur maiores cum ducimus at ipsa, officiis asperiores voluptates eum labore atque!</p>
                </div>
            </Link>
            <Link className="link" to={`/random-beer`}>
                <div>
                    <img src={RandomBeerImg} alt="Random Beer Img" width="500" height="600" />
                    <h2>Random Beer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum iure earum error similique veniam magni eius nam tenetur maiores cum ducimus at ipsa, officiis asperiores voluptates eum labore atque!</p>
                </div>
            </Link>
            <Link className="link" to={`/new-beer`}>
                <div>
                    <img src={NewBeerImg} alt="New Beer Img" width="500" height="600" />
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum iure earum error similique veniam magni eius nam tenetur maiores cum ducimus at ipsa, officiis asperiores voluptates eum labore atque!</p>
                </div>
            </Link>
        </div>
    )
}
