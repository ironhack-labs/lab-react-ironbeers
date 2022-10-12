import React from "react";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mainHomeDiv">
      <div className="mainItem list-group list-group-flush border-bottom scrollarea">
        <Link
          to={"./beers"}
          className="mainLink border border-muted list-group-item list-group-item-action py-3 lh-sm"
        >
          <div>
            <img src={beers} alt="All Beeeeers"></img>
          </div>
          <div className="mainInnerText">
            <h3>All Beers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              imperdiet vel arcu nec fermentum. Nulla nisl elit, vestibulum at
              auctor a, suscipit nec sapien. Mauris rutrum lacus sit amet dictum
              venenatis. Phasellus neque odio, dictum sed lectus ut, facilisis
              volutpat est.
            </p>
          </div>
        </Link>
      </div>
      <div className="mainItem">
        <Link
          to={"./random-beer"}
          className="mainLink border border-muted list-group-item list-group-item-action py-3 lh-sm"
        >
          <div>
            <img src={randomBeer} alt="Random Beeeeers"></img>
          </div>
          <div className="mainInnerText">
            <h3>Random Beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              imperdiet vel arcu nec fermentum. Nulla nisl elit, vestibulum at
              auctor a, suscipit nec sapien. Mauris rutrum lacus sit amet dictum
              venenatis. Phasellus neque odio, dictum sed lectus ut, facilisis
              volutpat est.
            </p>
          </div>
        </Link>
      </div>
      <div className="mainItem">
        <Link
          to={"./new-beer"}
          className="mainLink border border-muted list-group-item list-group-item-action py-3 lh-sm"
        >
          <div>
            <img src={newBeer} alt="New Beeeeer"></img>
          </div>
          <div className="mainInnerText">
            <h3>New Beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              imperdiet vel arcu nec fermentum. Nulla nisl elit, vestibulum at
              auctor a, suscipit nec sapien. Mauris rutrum lacus sit amet dictum
              venenatis. Phasellus neque odio, dictum sed lectus ut, facilisis
              volutpat est.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
