import React from 'react';
import { Link } from 'react-router-dom';

// Images
import beers from '../images/beers.png'
import randomBeer from '../images/random-beer.png'
import newBeer from '../images/new-beer.png'

export const Home = () => {
    return (
        <div className="row">
            <section className="beer-card">
                <Link to="/beers">
                    <img className="beer-card__image" src={beers} alt="" />
                </Link>
                <div className="beer-card__text">
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque error ad, nemo ea itaque voluptates earum facilis laboriosam voluptatem amet! Quos inventore unde saepe nemo aliquam, reiciendis architecto numquam doloribus?</p>
                </div>
            </section>
            <section className="beer-card">
                <Link to="/random-beer">
                    <img className="beer-card__image" src={randomBeer} alt="" />
                </Link>
                <div className="beer-card__text">
                    <h2>Random Beer</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque error ad, nemo ea itaque voluptates earum facilis laboriosam voluptatem amet! Quos inventore unde saepe nemo aliquam, reiciendis architecto numquam doloribus?</p>
                </div>
            </section>
            <section className="beer-card">
                <Link to="/new-beer">
                    <img className="beer-card__image" src={newBeer} alt="" />
                </Link>
                <div className="beer-card__text">
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque error ad, nemo ea itaque voluptates earum facilis laboriosam voluptatem amet! Quos inventore unde saepe nemo aliquam, reiciendis architecto numquam doloribus?</p>
                </div>
            </section>
        </div>
    )
}