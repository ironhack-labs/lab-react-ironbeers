import React from "react"
import { Link } from "react-router-dom"
import beers from "../assets/beers.png"
import newbeer from "../assets/new-beer.png"
import randombeer from "../assets/random-beer.png"

function HomePage() {
    return (
        <div>
            <Link to="/beers">
                <img src={beers} alt="Beers" />
                <h2>All Beers</h2>
            </Link>
            <Link to="/random-beer">
                <img src={randombeer} alt="Random beer" />
                <h2>Random Beer</h2>
            </Link>
            <Link to="/new-beer">
                <img src={newbeer} alt="New Beer" />
                <h2>New Beer</h2>
            </Link>
        </div>
    )
}

export default HomePage
