//jshint esversion:9

import { Link } from "react-router-dom";
import allBeers from "./../assets/beers.png";
import randomBeer from "./../assets/random-beer.png";
import newBeer from "./../assets/new-beer.png";

export const HomePage = () => {

  return (
    <div className="HomePage">
      <ul>
        <>
          <img src={allBeers} alt="beers" />
          <Link to="/beers">
            <h2>All Beers</h2>
          </Link>
          <p>
            Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Donec sollicitudin molestie
            malesuada.
          </p>
        </>

        <>
          <img src={randomBeer} alt="random beer" />
          <Link to="/random-beer">
            <h2>Random Beer</h2>
          </Link>
          <p>
            Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
            auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis
            lorem ut libero malesuada feugiat.
          </p>
        </>

        <>
          <img src={newBeer} alt="new beer" />
          <Link to="/new-beer">
            <h2>New Beer</h2>
          </Link>
          <p>
            Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat,
            accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit
            amet quam vehicula elementum sed sit amet dui.
          </p>
        </>
      </ul>
    </div>
  );
};
