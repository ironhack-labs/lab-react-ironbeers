import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                <Link to={`/${beer._id}`} key={beer._id}>
                  <img src={beer.image_url} alt={beer.name}></img>
                  <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                  <p>{beer.contributed_by}</p>
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
