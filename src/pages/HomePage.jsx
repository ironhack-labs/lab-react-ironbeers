import React from "react";
import RandomBeer from "./RandomBeer";
import AllBeers from "./AllBeers";
import NewBeer from "./NewBeer";
import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeersImg from "../assets/beers.png";
import randomBeersImg from "../assets/beers.png";

function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="beer-info">
        <Link className="home-header" to="/beers">
          <img src={beersImg} alt="" />
          <h1>All Beers</h1>
        </Link>
        <p className="home-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum
          voluptatem deserunt neque, voluptas porro atque magnam corporis
          pariatur illo praesentium saepe! Quisquam iste impedit cum incidunt
          saepe repellat nemo.
        </p>
      </div>

      <div className="beer-info">
        <Link className="home-header" to="/new-beer">
          <img src={newBeersImg} alt="" />
          <h1>New Beer</h1>
        </Link>
        <p className="home-info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          assumenda reiciendis laboriosam amet provident delectus aliquam
          nesciunt eligendi harum quia consequuntur, magnam repudiandae! Labore
          libero necessitatibus, nam facere corporis perferendis.
        </p>
      </div>

      <div className="beer-info">
        <Link className="home-header" to="/random-beer">
          <img src={randomBeersImg} alt="" />
          <h1>Random Beer</h1>
        </Link>
        <p className="home-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo
          iure doloremque cum omnis ipsa, amet quis nostrum. Tempore nulla ipsam
          necessitatibus corrupti consequuntur architecto tenetur recusandae
          similique, assumenda corporis.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
