import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {
  

  return (
    <div>
      <img src={beersImg} alt="beers" />
      <h1>All Beers</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et incidunt
        possimus, officia quam asperiores repellendus nihil voluptas. Aliquid,
        dolorum sequi saepe reprehenderit error similique facere quod? Molestias
        accusantium nobis ab!
      </p>

      <Link to="/beers">
        <button>Go to Beers</button>
      </Link>
      <hr />
      <img src={newBeer} alt="newBeer" />
      <h1>New Beer</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et incidunt
        possimus, officia quam asperiores repellendus nihil voluptas. Aliquid,
        dolorum sequi saepe reprehenderit error similique facere quod? Molestias
        accusantium nobis ab!
      </p>

      <Link to="/random-beer">
        <button>Random Beer</button>
      </Link>
      <hr />
      <img src={randomBeer} alt="newBeer" />
      <h1>New Beer</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et incidunt
        possimus, officia quam asperiores repellendus nihil voluptas. Aliquid,
        dolorum sequi saepe reprehenderit error similique facere quod? Molestias
        accusantium nobis ab!
      </p>

      <Link to="/beers/newbeer">
        <button>New Beer</button>
      </Link>
    </div>
  );
}

export default HomePage;
