//HomePage.jsx
import React from "react";
import {Link} from "react-router-dom";

function HomePage() {

    return(
        <div className="home-page">
            <Link to="/beers">
            <img src="/src/assets/beers.png" alt="beers" />
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum actu ut dignissim varius.</p>
            </Link>
            <Link to="/random-beer">
            <img src="/src/assets/random-beer.png" alt="random-beer" />
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum actu ut dignissim varius.</p>
            </Link>
            <Link to="/new-beer">
            <img src="/src/assets/new-beer.png" alt="new-beer" />
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum actu ut dignissim varius.</p>
            </Link>
        </div>
    )
}

export default HomePage;
