import React from "react"

import { LoremIpsum } from 'react-lorem-ipsum'
import { Link }       from 'react-router-dom'

import './Home.css'

import beers      from '../../assets/beers.png'
import newBeer    from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'


const Home = () => {

    return(
            <div className="home col">
             <div className="list-group m-1 ">
                <img src={beers} alt="beers" />
                <Link className="text-decoration-none m-2" to="/beers">
                    <h2>All beers</h2>
                </Link>
                    <LoremIpsum p={1} />
                <img src={randomBeer} alt="random beer" />
                <Link className="text-decoration-none m-2" to="/random-beer">
                    <h2>Random Beer</h2>
                </Link>
                    <LoremIpsum p={1} />
                <img src={newBeer} alt="new beer" />
                <Link className="text-decoration-none m-2" to="/new-beer">
                    <h2>New Beer</h2>
                </Link>
                    <LoremIpsum p={1} /> 
             </div>  
            </div>
    )
}

export default Home