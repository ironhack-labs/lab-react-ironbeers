import React from 'react';
import { NavLink } from 'react-router-dom'
import beers from './../../assets/beers.png'
import newBeer from './../../assets/new-beer.png'
import randomBeer from './../../assets/random-beer.png'

function HomePage(props) {
    return (
        <div className="container">
            <article>
                <img src={ beers } alt="listOfBeers" />
                <div className="belowImg">
                    <NavLink className="navLink" to="/beers" exact><h1>All Beers</h1></NavLink>
                    <p>Ea tempor labore duis cillum sint. Irure commodo velit mollit excepteur id do. Duis tempor culpa in voluptate elit labore amet amet ut veniam sint consectetur.</p>
                </div>
            </article>            
            <article>
                <img src={ randomBeer } alt="randomBeer" />
                <div className="belowImg">
                    <NavLink className="navLink" to="/random-beer" exact><h1>Random Beer</h1></NavLink>
                    <p>Ea tempor labore duis cillum sint. Irure commodo velit mollit excepteur id do. Duis tempor culpa in voluptate elit labore amet amet ut veniam sint consectetur.</p>
                </div>
            </article>
            <article>
                <img src={ newBeer } alt="newBeer" />
                <div className="belowImg">
                    <NavLink className="navLink" to="/new-beer" exact><h1>New Beer</h1></NavLink>
                    <p>Ea tempor labore duis cillum sint. Irure commodo velit mollit excepteur id do. Duis tempor culpa in voluptate elit labore amet amet ut veniam sint consectetur.</p>
                </div>
            </article>
        </div>
    )
}

export default HomePage;