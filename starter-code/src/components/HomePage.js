import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBeers: []
    };
  }


  render() {
    return (
      <div>
        <div class="card" style={{ width: 400 }}>
          <img src="./images/beers.png" class="card-img-top" />
          <div class="card-body">
            <Link class="card-title" to={"/allbeers"}>
              <h3>All Beers</h3>
            </Link>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div class="card" style={{ width: 400 }}>
          <img src="./images/random-beer.png" class="card-img-top" />
          <div class="card-body">
            <Link class="card-title" to={"/allbeers"}>
              <h3>Random Beer</h3>
            </Link>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div class="card" style={{ width: 400 }}>
          <img src="./images/new-beer.png" class="card-img-top" />
          <div class="card-body">
            <Link class="card-title" to={"/allbeers"}>
              <h3>New Beer</h3>
            </Link>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
