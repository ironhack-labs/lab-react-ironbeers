import React from 'react';
import { Link } from "react-router-dom";
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'

function HomePage() {
  return (
    <div className="container">
       <div className="col-6 mx-auto">
        <Link to="/beers">
            <img src={beers} alt=""/>
            <h3>All Beers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac auctor diam. Curabitur vehicula massa quis lorem gravida mattis. 
              Nullam vehicula, sem ac finibus vulputate, ipsum justo interdum urna, eu congue elit nibh vel massa. 
              Morbi pretium est ac quam lobortis, et ultrices mauris consequat.</p>
        </Link>
        <Link to="/random-beer">
            <img src={randomBeer} alt=""/>
            <h3>All Beers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac auctor diam. Curabitur vehicula massa quis lorem gravida mattis. 
              Nullam vehicula, sem ac finibus vulputate, ipsum justo interdum urna, eu congue elit nibh vel massa. 
              Morbi pretium est ac quam lobortis, et ultrices mauris consequat.</p>
        </Link>
        <Link to="/new-beer">
            <img src={newBeer} alt=""/>
            <h3>All Beers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac auctor diam. Curabitur vehicula massa quis lorem gravida mattis. 
              Nullam vehicula, sem ac finibus vulputate, ipsum justo interdum urna, eu congue elit nibh vel massa. 
              Morbi pretium est ac quam lobortis, et ultrices mauris consequat.</p>
        </Link>

    </div>
    </div>
  );
}

export default HomePage;
