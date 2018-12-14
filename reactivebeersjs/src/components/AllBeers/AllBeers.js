import React, { Component } from "react";
import { getAllBeers } from "../../services/ApiBeers";
import { Link } from "react-router-dom";

class AllBeers extends Component {
  state = {
    beers: []
  };

  componentWillMount = () => {
    getAllBeers()
      .then(beers => {
        this.setState({ beers });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { beers } = this.state;
    return (
      <div>
        <div>
          <Link to="/"> Home</Link>
        </div>
        <div>
          {beers.map(beer => {
            return (
              <div key={beer._id}>
                <img src={beer.image_url} alt="beer_image" />
                <Link to={`/single/${beer._id}`}>
                  <h3>{beer.name}</h3>
                </Link>
                <h4>{beer.tagline}</h4>
                <p>{beer.contributed_by}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllBeers;
