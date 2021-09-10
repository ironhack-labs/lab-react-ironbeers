import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import allBeersImg from "../../assets/beers.png"
import randomBeerImg from "../../assets/random-beer.png"
import newBeerImg from "../../assets/new-beer.png"

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Link to="/beers">
                    <img src={allBeersImg}/>
                    <h1>All beers</h1>
                </Link>
                <Link to="/random-beer">
                    <img src={randomBeerImg}/>
                    <h1>Random beer</h1>
                </Link>
                <div>
                    <img src={newBeerImg}/>
                    <h1>New beer</h1>
                </div>
            </div>
        )
    }
}

export default Home