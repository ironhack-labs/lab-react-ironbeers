
import { Link } from "react-router-dom"

import beers from "../assets/beers.png"

import randomBeer from "../assets/random-beer.png"

import newBeer from "../assets/new-beer.png"



function HomePage() {

    return (
        <>

            <div>
                <Link to={'/beers'} style={{ color: "black" }}>

                    <img src={beers}></img>

                    <p>All Beers</p>

                </Link>

            </div>

            <div>

                <Link to={'/random-beer'} style={{ color: 'black' }}>

                    <img src={randomBeer}></img>

                    <p>Random Beer</p>

                </Link>

            </div>

            <div>
                <Link to={'/new-beer'} style={{ color: 'black' }}>

                    <img src={newBeer}></img>

                    <p> New Beer</p>

                </Link>


            </div>

        </>

    )
}

export default HomePage



