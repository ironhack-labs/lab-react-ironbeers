import React from "react";
import { Link } from "react-router-dom";
import beer from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <img src={beer} alt="" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, esse
          similique soluta asperiores rem rerum pariatur reprehenderit eligendi
          quo cumque dolorem, recusandae debitis ex. Atque qui debitis minus
          iure voluptates.
        </p>
      </Link>

      <Link to="/random">
        <img src={randomBeer} alt="" />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum soluta
          tenetur amet dignissimos debitis aspernatur, voluptates cupiditate
          sapiente quod error assumenda quis maiores autem laudantium. Quaerat
          nobis ullam mollitia iusto?
        </p>
      </Link>

      <Link to="/new-beer">
        <img src={newBeer} alt="" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquam
          repellat vero et, quis illum doloribus quidem rerum iusto doloremque
          a, fugiat saepe labore sit? Repellendus veniam corporis voluptatum
          doloribus.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;
