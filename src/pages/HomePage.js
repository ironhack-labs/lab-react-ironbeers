import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function HomePage() {
  return (
    <div>
      <div className="homeContainer">
        <img src={beers} alt="All Beers" width="360px" />
        <Link to="/beers" className="home-link">
          <h3>All Beers</h3>
        </Link>
        <p>Integer aliquet, est eget iaculis varius, risus nibh dapibus ipsum,
            nec vestibulum ligula tellus quis ante. Nulla quis massa nunc.
            Proin et libero et est placerat aliquet ac at erat.</p>
        </div>
      <div className="homeContainer">
        <img src={randomBeer} alt="Random Beer" width="360px" />
        <Link to="/random-beer" className="home-link">
          <h3>Random Beer</h3>
        </Link>
        <p>Sed in magna non velit semper condimentum non at tortor. 
            Aenean congue magna dignissim nunc ultrices, 
            volutpat congue nunc porttitor. </p>
      </div>
      <div className="homeContainer">
        <img src={newBeer} alt="New Beer" width="360px" />
        <Link to="/new-beer" className="home-link">
          <h3>New Beer</h3>
        </Link>
          <p>Ut a velit id lectus rhoncus dictum vel at arcu. 
          Cras tristique vestibulum ipsum, non blandit nisl scelerisque a. 
          Proin aliquam semper nulla eu lacinia. </p>
      </div>
    </div>
  );
}

export default HomePage;