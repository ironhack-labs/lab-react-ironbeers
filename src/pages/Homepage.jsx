import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Beers from "./Beers";
import NewBeer from "./NewBeer";

function Homepage() {
  return (
    <div>
      <div>
        <img src="./assets/beers.png" alt="Beers" />
        <Link to="/beers">Beers</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
          porro quia magnam inventore dolore est atque maiores ad harum incidunt
          nostrum amet ab nulla, rerum possimus aut similique. A, quisquam.
        </p>
        <div>
          <img src="./assets/random-beer.png" alt="Random Beer" />
          <Link to="/random-beer">Random Beer</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit debitis quis, neque veritatis minus laborum odit
            fugiat perspiciatis nam ut dicta laboriosam sint temporibus expedita
            repellat. Quo unde hic nemo?
          </p>
        </div>
      </div>
      <div>
        <img src="./assets/new-beer.png" alt="New Beer" />
        <div>
          <Link to="/new-beer">New Beer</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            repudiandae! Harum laudantium, eius dolorum, nemo error ut veritatis
            soluta unde molestiae dicta ipsa tenetur suscipit. Deleniti ipsam
            esse quas dolore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
