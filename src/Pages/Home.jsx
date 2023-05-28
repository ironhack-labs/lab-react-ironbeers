import allBeersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

import React from "react";

function Home() {
  return (
    <div>
        <h1>IronBeers</h1>
        <img src={allBeersImg} className="all-beers-img"/>
        <br></br>
        <a href="/beers">All Beers</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ultrices neque. Praesent mollis blandit neque a euismod. Phasellus ac elementum nibh. Nullam ultricies enim quis condimentum lobortis. Ut vel volutpat orci, at ullamcorper magna. Etiam et rutrum massa. Duis convallis lacus justo, id blandit mauris accumsan sollicitudin. In scelerisque dui at lectus feugiat posuere.</p>
        <img src={randomBeerImg} className="random-beer-img"/>
        <br></br>
        <a href="/random">Random Beer</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ultrices neque. Praesent mollis blandit neque a euismod. Phasellus ac elementum nibh. Nullam ultricies enim quis condimentum lobortis. Ut vel volutpat orci, at ullamcorper magna. Etiam et rutrum massa. Duis convallis lacus justo, id blandit mauris accumsan sollicitudin. In scelerisque dui at lectus feugiat posuere.</p>
        <img src={newBeerImg} className="new-beer-img"/>
        <br></br>
        <a href="/new-beer">New Beer</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ultrices neque. Praesent mollis blandit neque a euismod. Phasellus ac elementum nibh. Nullam ultricies enim quis condimentum lobortis. Ut vel volutpat orci, at ullamcorper magna. Etiam et rutrum massa. Duis convallis lacus justo, id blandit mauris accumsan sollicitudin. In scelerisque dui at lectus feugiat posuere.</p>
    </div>
  )
}

export default Home;