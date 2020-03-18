import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class AllBeer extends Component {
  constructor() {
    super();
    this.state = { beer: undefined };
  }

  componentDidMount() {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => response.json())
      .then(beersArray => this.setState({ beer: beersArray }));
  }
  render() {
    return (
      <div>
        {this.state.beer ? (
          <div>
            {this.state.beer.map(beer => (
              <div className="prueba">
                <Link className="link" to={`/${beer._id}`} key={beer._id}>
                  <img src={beer.image_url} alt={beer.name}></img>
                  <h3>{`Name: ${beer.name}`}</h3>
                  <p>{`Tagline: ${beer.tagline}`}</p>
                  <p>{`Contributed By: ${beer.contributed_by}`}</p>
                  <hr></hr>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
  }
}

export default AllBeer;
