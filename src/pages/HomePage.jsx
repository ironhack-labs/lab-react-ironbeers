import React from "react";

import image1 from "../assets/beers.png";
import image2 from "../assets/random-beer.png";
import image3 from "../assets/new-beer.png";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to={"/beers"} className='card'>
        <div className="card">
          <img src={image1} alt="beers" />
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            facilis quia iste possimus optio deserunt inventore, asperiores
            excepturi consequatur sint, quae, vero perferendis aperiam eveniet
            doloremque magni assumenda! Ducimus, odit.
          </p>
        </div>
      </Link>

      <Link to={"/random-beer"} className='card'>
        <div className="card">
          <img src={image2} alt="randomBeer" />
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            facilis quia iste possimus optio deserunt inventore, asperiores
            excepturi consequatur sint, quae, vero perferendis aperiam eveniet
            doloremque magni assumenda! Ducimus, odit.
          </p>
        </div>
      </Link>

      <Link to={"/new-beer"} className='card'>
        <div className="card">
          <img src={image3} alt="newBeer" />
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            facilis quia iste possimus optio deserunt inventore, asperiores
            excepturi consequatur sint, quae, vero perferendis aperiam eveniet
            doloremque magni assumenda! Ducimus, odit.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
