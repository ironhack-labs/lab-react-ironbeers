import React from 'react';
import beer from './assets/beers.png';
import newbeer from './assets/new-beer.png';
import randombeer from './assets/random-beer.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section>
        <img src={ beer } alt="Bar" />
        <div className="text">
          <Link to="/beers" ><h1>All Beers</h1></Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolor quae inventore aut explicabo natus.
          </p>
        </div>
      </section>
      <section>
        <img src={ randombeer } alt="tab" />
        <div className="text">
          <Link to="/beers/random" ><h1>Random Beer</h1></Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolor quae inventore aut explicabo natus.
          </p>
        </div>

      </section>
      <section>
        <img src={ newbeer } alt="beer" />
        <div className="text">
          <Link to="/beers/new" ><h1>New Beer</h1></Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolor quae inventore aut explicabo natus.
          </p>
        </div>
      </section>
    </main>
  )
}
