import React from 'react';
import { Link } from 'react-router-dom'
import imgBeers from '../assets/beers.png'
import imgRandomBeer from '../assets/random-beer.png'
import imgNewBeer from '../assets/new-beer.png'
import './App.css'


const Home = () => {
    return (
       <>
        <article className="home">
        <div>
            <Link to= "/beers" >All Beers</Link>
            <img src={imgBeers} alt="imagen"></img>
            <h3 >All Beers</h3>
            <p>lorem ipsdum sdcsdcbmsdsafdsfbhsdjfa</p>
        </div>

        <div>
            <Link to= "/random-beer"></Link>
            <img src={imgRandomBeer} alt="imagen"></img> 
            <h3>Random Beer</h3>
            <p>lorem ipsdum sdcsdcbmsdsafdsfbhsdjfa</p>
        </div>

        <div>
            <Link to= "/new-beer"></Link>
            <img src={imgNewBeer} alt="imagen"></img>
            <h3>New Beer</h3>
            <p>lorem ipsdum sdcsdcbmsdsafdsfbhsdjfa</p>
        </div>   
        </article>
     </>
    )
}

export default Home