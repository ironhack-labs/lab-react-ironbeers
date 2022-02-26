import React from "react";
import { Link } from "react-router-dom";
import RandomBeer from "./BeerDetails";
import Beers from "./Beers";
import NewBeer from "./NewBeer";
import beer from "../assets/beers.png";
import newbeer from "../assets/new-beer.png";
import randombeer from "../assets/random-beer.png";

export default function HomePage() {
  return (
    <div>
      <div className="HomepageBox">
        <Link to="/beers" element={<Beers />}>
          <img src={beer} alt="beers" />
          <h1>All Beers</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            aspernatur officia a tempore totam! Repellat ea repudiandae quos,
            totam quisquam odit perferendis fugiat harum molestias aliquam,
            alias sint expedita quibusdam.
          </p>
        </Link>
      </div>

      <div className="HomepageBox">
        <Link to="/random-beer" element={<RandomBeer />}>
          <img src={randombeer} alt="beers" />
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            aspernatur officia a tempore totam! Repellat ea repudiandae quos,
            totam quisquam odit perferendis fugiat harum molestias aliquam,
            alias sint expedita quibusdam.
          </p>
        </Link>
      </div>

      <div className="HomepageBox">
        <Link to="/new-beer" element={<NewBeer />}>
          <img src={newbeer} alt="beers" />
          <h1>New Beer</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            aspernatur officia a tempore totam! Repellat ea repudiandae quos,
            totam quisquam odit perferendis fugiat harum molestias aliquam,
            alias sint expedita quibusdam.
          </p>
        </Link>
      </div>
    </div>
  );
}
