import React from "react";

import BeerImg from "../../assets/beers.png";
import NewbeerImg from "../../assets/new-beer.png";
import RandombeerImg from "../../assets/random-beer.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div>
        <Link to={"/beers"}>
          <img src={BeerImg} alt="beer" />
          <h2>All Beers</h2>
        </Link>
        <p className="description-to-beers">
          Veniam minim ex minim nostrud non Lorem laborum sit Lorem aliquip
          eiusmod aliquip labore. Do sunt dolore esse ad dolor eiusmod ut id.
          Duis laborum est dolor officia nostrud amet eiusmod in incididunt.
          Deserunt elit tempor excepteur ex quis. Nisi consectetur excepteur
          nulla eiusmod exercitation fugiat non aliquip commodo laborum non.
        </p>
      </div>

      <div>
        <Link to={"/random-beer"}>
          <img src={RandombeerImg} alt="random-beer" />
          <h2>Random Beer</h2>
        </Link>
        <p className="description-to-beers">
          Velit velit cillum ea dolor tempor non. Cillum veniam non sit commodo
          laborum eu. Aliqua tempor voluptate sunt Lorem voluptate proident
          excepteur nostrud nulla velit ea commodo.
        </p>
      </div>

      <div>
        <Link to={"/new-beer"}>
          <img src={NewbeerImg} alt="new-beer" />
          <h2>New beer</h2>
        </Link>
        <p className="description-to-beers">
          Nostrud Lorem quis ex esse deserunt adipisicing irure. Commodo est
          tempor Lorem amet aliqua sint. Ea commodo eu proident ad eu. Excepteur
          id nostrud elit excepteur aliqua anim tempor in in ea voluptate minim.
          Excepteur ut officia dolor velit occaecat Lorem adipisicing. Deserunt
          eiusmod adipisicing fugiat deserunt aliqua. Labore elit consectetur ea
          exercitation ipsum sunt.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
