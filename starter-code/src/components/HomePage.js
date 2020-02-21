import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/beers">
          <div
            className="section-image"
            style={{
              backgroundImage: "url(./images/beers.png)",
              backgroundSize: "cover",
              height: "20vh"
            }}
          ></div>
          <h3>All Beers</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            corrupti, blanditiis recusandae asperiores ad reiciendis hic
            corporis ipsam et distinctio, rerum repellendus esse harum ratione
            debitis magni sequi quibusdam delectus.
          </p>
        </Link>
        <Link to="/random-beer">
          <div
            className="section-image"
            style={{
              backgroundImage: "url(./images/random-beer.png)",
              backgroundSize: "cover",
              height: "20vh"
            }}
          ></div>
          <h3>Random Beer</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            corrupti, blanditiis recusandae asperiores ad reiciendis hic
            corporis ipsam et distinctio, rerum repellendus esse harum ratione
            debitis magni sequi quibusdam delectus.
          </p>
        </Link>
        <Link to="/new-beer">
          <div
            className="section-image"
            style={{
              backgroundImage: "url(./images/new-beer.png)",
              backgroundSize: "cover",
              height: "20vh"
            }}
          ></div>
          <h3>New Beer</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            corrupti, blanditiis recusandae asperiores ad reiciendis hic
            corporis ipsam et distinctio, rerum repellendus esse harum ratione
            debitis magni sequi quibusdam delectus.
          </p>
        </Link>
      </div>
    );
  }
}

export default HomePage;
