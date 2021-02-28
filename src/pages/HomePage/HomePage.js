import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <section>
                <h1>WELCOME TO IRONTAVERN</h1>
                <article>
                    <Link className="link" to="/allbeers">
                        <div id="all-beers"></div>
                        <h2>All Beers</h2>
                    </Link>
                    <p>Click to list all the beers available in the tavern</p>
                </article>
                <article>
                    <Link className="link" to="/randombeer">
                        <div id="random-beer"></div>
                        <h2>Random Beer</h2>
                    </Link>
                    <p>Click to pick a random beer from our wide array of beers</p>
                </article>
                <article id="bottom-article">
                    <Link className="link" to="/newbeer">
                        <div id="new-beer"></div>
                        <h2>New Beer</h2>
                    </Link>
                    <p>Click to add a new beer to our collection and make it available to fellow drunkards</p>
                </article>
            </section>
        )
    }
}

export default HomePage;