import React from 'react';
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import newBeersImage from '../assets/new-beer.png';
import randomBeersImage from '../assets/random-beer.png'

function HomePage() {
  return (
    <>
      <div className="container-1">
        <p>This is HomePage</p>

        <section>
                 <img src={beersImage} alt="Beers" />
            <div className="text-container">
                <h2><Link to="/beers">All Beers</Link></h2>
                <p>Lorem ipsum dolor sit amet, consetetur 
                sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero 
                eos et accusam et</p>
            </div>

        </section>

        <section>
                <img src={newBeersImage} alt="Beers" />
            <div className="text-container">
                <h2><Link to="/beers/search">Random Beer</Link></h2>
                <p>Lorem ipsum dolor sit amet, consetetur 
                sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero 
                eos et accusam et</p>
            </div>
        </section>

        <section>
                <img src={randomBeersImage} alt="Beers" />
            <div className="text-container">
                <h2><Link to="/beers/new">New Beer</Link></h2>
                 <p>Lorem ipsum dolor sit amet, consetetur 
                sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero 
                eos et accusam et</p>
            </div>
        </section>

      </div>
    </>
  );
}

export default HomePage;

