import React from 'react';
import { Link } from 'react-router-dom';
import beers from './assets/beers.png';
import newBeer from './assets/new-beer.png';
import randomBeer from './assets/random-beer.png';


export default function HomePage() {
  return (
    <div>
      <div>
        <img src={beers} alt="All Beers" width="100%" />
        <Link to="/beers">
          <h3>All Beers</h3>
        </Link>
        <p style={{width: "90%", textAlign: "justify"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
        duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        </div>
      <div>
        <img src={randomBeer} alt="Random Beer" width="100%" />
        <Link to="/random-beer">
          <h3>Random Beer</h3>
        </Link>
        <p style={{width: "90%", textAlign: "justify"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
        duo dolores et ea rebum. Stet clita kasd gubergren.</p>
      </div>
      <div>
        <img src={newBeer} alt="new beer" width="100%" />
        <Link to="/new-beer">
          <h3>New Beer</h3>
        </Link>
        <p style={{width: "90%", textAlign: "justify"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
        duo dolores et ea rebum. Stet clita kasd gubergren.</p>
      </div>
    </div>
  );
}

