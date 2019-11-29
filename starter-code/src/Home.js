import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/beers" className="row" style={{color:"inherit"}}>
          <div className="card col-12" style={{ width: "18rem" }}>
            <img src="./images/beers.png" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">All Beers</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Link>

        <div className="row">
          <div className="card col-12" style={{ width: "18rem" }}>
            <img
              src="./images/random-beer.png"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">Random Beer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card col-12" style={{ width: "18rem" }}>
            <img src="./images/new-beer.png" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">New Beer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
