import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import React from "react";

function HomePage() {
  return (
    <>
      <div>
        <Link to={"/beers"}>
          <img src={beers} alt="beers" />
          <h1>All Beers</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ipsam eaque aut, minima eos magni cupiditate laboriosam, at voluptates dolor quasi impedit dolore mollitia, eveniet eius deserunt amet voluptate aliquid.</p>
        </Link>
      </div>

      <div>
        <Link to={"/random-beer"}>
        <img src={randomBeer} alt="randomBeer" />
          <h1>Random Beer</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ipsam eaque aut, minima eos magni cupiditate laboriosam, at voluptates dolor quasi impedit dolore mollitia, eveniet eius deserunt amet voluptate aliquid.</p>

        </Link>
      </div>

        <div>
        <Link to={"/new-beer"}>
        <img src={newBeer} alt="newBeer" />
          <h1>New Beer</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ipsam eaque aut, minima eos magni cupiditate laboriosam, at voluptates dolor quasi impedit dolore mollitia, eveniet eius deserunt amet voluptate aliquid.</p>
        </Link>
      </div>
    </>

  )
}

export default HomePage;
