import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

function Home() {
    return (
      <React.Fragment>
        <h1 className="home-title">IRONBEERS</h1>
        <div className="home-page">
          <article className="article-home">
            <figure>
              <img className="image-home" src="images/beers.png" alt="beers" />
            </figure>
            <Link className="link-home" to="/list-beers">All beers</Link>
            <p>
              Because we are passionate about beers, we gathered on this website
              and for you, the best beers coming from all around the world.
              Whatever your tastes are, we have the perfect beer for you!
            </p>
          </article>
          <article className="article-home">
            <figure>
              <img
                className="image-home"
                src="images/random-beer.png"
                alt="beers"
              />
            </figure>
            <Link className="link-home" to="/random-beer">One random beer</Link>
            <p>
              If you like trying new beer, if you have no idea, or if chosing is
              too hard for you, let fate chose for you! (all our beers are good,
              so you won't be disappointed)
            </p>
          </article>
          <article className="article-home">
            <figure>
              <img
                className="image-home"
                src="images/new-beer.png"
                alt="beer"
              />
            </figure>
            <Link className="link-home" to="/new-beer">Add a new beer</Link>
            <p>
              You found a new beer you want to add at our catalog, please be our
              guest!
            </p>
          </article>
        </div>
      </React.Fragment>
    );
}

export default Home;
