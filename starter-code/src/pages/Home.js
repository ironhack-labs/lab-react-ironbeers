import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img src="/images/beers.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <Link to="/AllBeers">All Beers</Link>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card"s
            content.
          </p>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img src="/images/random-beer.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <Link to="/RandomBeer">Random Beer</Link>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card"s
            content.
          </p>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img src="  /images/new-beer.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">New Beer</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card"s
            content.
          </p>
      
        </div>
      </div>
    </div>
  );
};

export default Home;
