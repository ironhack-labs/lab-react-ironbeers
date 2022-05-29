import React from "react";
import { Link } from "react-router-dom";
import BeersHome from "../assets/beers.png";
import NewBeerHome from "../assets/new-beer.png";
import RandomBeerHome from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="home">
      <div>
        <Link to={`/beers/`}>
          <img className="img1" src={BeersHome} alt="" />
          <h2 className="h2-home">All Beers</h2>
          <p className="p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            natus eos tempore atque distinctio, aut illum dolores nulla. Quia
            possimus facilis omnis porro sed quaerat dolor ducimus qui
            doloremque consequatur!
          </p>
        </Link>
      </div>
      <div>
        <Link to={`/beers/random/`}>
          <img className="img1" src={NewBeerHome} alt="" />
          <h2 className="h2-home">Random Beer</h2>
          <p className="p1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure nulla
            corrupti facilis delectus magnam itaque perferendis quos a, eum
            voluptatum omnis aliquid quas, atque at tenetur quae consequatur
            tempore inventore!
          </p>
        </Link>
      </div>
      <div>
        <Link to={`/beers/new/`}>
          <img className="img1" src={RandomBeerHome} alt="" />
          <h2 className="h2-home">New Beer</h2>
          <p className="p1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
            adipisci earum qui ut architecto quisquam dolore voluptatum
            consequatur laudantium id illo mollitia? Blanditiis fuga laborum
            eaque neque consequuntur fugit tempora.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
