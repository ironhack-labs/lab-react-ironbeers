import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Beers.css";

class Beers extends Component {
  state = {
    allBeers: []
  };
  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(allBeers => {
      allBeers = allBeers.data;

      this.setState({
        allBeers: allBeers
      });
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <Link to="/">
              <img src="../images/home.png" alt="home" className="img-home" />
            </Link>
          </div>
        </nav>

        {this.state.allBeers.map(beer => (
          <React.Fragment key={beer._id}>
            <Link to={`/beer/${beer._id}`} className="link">
              <div className="row separator">
                <div className="col-3">
                  <img
                    src={beer.image_url}
                    alt={beer.name}
                    className="img-list"
                  />
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-12 name">{beer.name}</div>
                  </div>
                  <div className="row">
                    <div className="col-12 tagline">{beer.tagline}</div>
                  </div>
                  <div className="row">
                    <div className="col-12 created-by">
                      Created by: {beer.name}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Beers;
