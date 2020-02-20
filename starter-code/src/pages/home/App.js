import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  state = {};

  redirection = value => {
    console.log("Redireccion", this.props);
    switch (value) {
      case "all":
        return this.props.history.push("/beers");
      case "random":
        return this.props.history.push("/");
      default:
    }
  };
  render() {
    return (
      <>
        <Link to="/beers">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="/images/beers.png"
              className="card-img-top"
              alt="allbeers"
            />
            <div className="card-body">
              <h5 className="card-title">All Beers</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/random-beer">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="/images/random-beer.png"
              className="card-img-top"
              alt="randomBeer"
            />
            <div className="card-body">
              <h5 className="card-title">Random Beer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/new-beer">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="/images/new-beer.png"
              className="card-img-top"
              alt="newBeer"
            />
            <div className="card-body">
              <h5 className="card-title">New Beer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default App;
