import React from "react";
import { Link } from "react-router-dom";
import beers from "../../assets/beers.png";
import newBeer from "../../assets/new-beer.png";
import randomBeer from "../../assets/random-beer.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-1 g-4 mt-2">
        <div className="col">
          <div className="card">
            <img src={beers} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="homeLinks" to="/beers">
                All Beers
              </Link>
              <p className="card-text">
                The Wolverine Beer from a dude barely satiates the dreamlike
                Honey Brown. When a grizzly beer hesitates, a Keystone beyond
                the dude wakes up. A blood clot slurly gives lectures on
                morality to the bud dry. The line dancer self-flagellates, but a
                greasy miller makes love to a pool table. A chain saw toward the
                miller learns a hard lesson from a Stella Artois living with a
                Luna Sea ESB.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={newBeer} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="homeLinks" to="/random">
                Random Beer
              </Link>
              <p className="card-text">
                The Wolverine Beer from a dude barely satiates the dreamlike
                Honey Brown. When a grizzly beer hesitates, a Keystone beyond
                the dude wakes up. A blood clot slurly gives lectures on
                morality to the bud dry. The line dancer self-flagellates, but a
                greasy miller makes love to a pool table. A chain saw toward the
                miller learns a hard lesson from a Stella Artois living with a
                Luna Sea ESB.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={randomBeer} className="card-img-top" alt="..." />
            <div className="card-body">
              <Link className="homeLinks" to="/new-beer">
                Add new beers
              </Link>
              <p className="card-text">
                The Wolverine Beer from a dude barely satiates the dreamlike
                Honey Brown. When a grizzly beer hesitates, a Keystone beyond
                the dude wakes up. A blood clot slurly gives lectures on
                morality to the bud dry. The line dancer self-flagellates, but a
                greasy miller makes love to a pool table. A chain saw toward the
                miller learns a hard lesson from a Stella Artois living with a
                Luna Sea ESB.
              </p>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Home;
