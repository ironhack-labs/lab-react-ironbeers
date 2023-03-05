import React from 'react'
import BeersPic from "../assets/beers.png";
import RandomBeersPic from "../assets/random-beer.png";
import NewBeerPic from "../assets/new-beer.png";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <div>
        <Link to={`/beers`}>
          <img src={BeersPic} alt="Picture of all beers" />
        </Link>
        <h2>Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>{" "}
        <br></br>
      </div>

      <div>
        <Link to={`beers/random-beer`}>
          <img src={RandomBeersPic} alt="Picture of random beer" />
        </Link>
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>{" "}
        <br></br>
      </div>

      <div>
        <Link to={`beers/new-beer`}>
          <img src={NewBeerPic} alt="Picture of new beer" />
        </Link>
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>{" "}
        <br></br>
      </div>
    </section>
  );
}

export default Home