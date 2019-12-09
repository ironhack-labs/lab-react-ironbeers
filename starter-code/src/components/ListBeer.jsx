import React, { Component } from "react";
import Header from "./Header";
import { load } from "./../services/beers";
import { Link } from "react-router-dom";

class ListBeer extends Component {
  constructor() {
    super();

    this.state = {
      beers: null
    };
  }

  componentDidMount() {
    load()
      .then(beers => {
        this.setState({
          beers
        });
      })
      .catch(error => {
        console.log(error);
        console.log("Error in service.");
      });
  }
  render() {
    const beerArray = this.state.beers;
    return (
      <div>
        <Header />
        <h3>List of beers</h3>
        <div>
          {beerArray && (
            <ul>
              {beerArray.map(beer => (
                <ul>
                  <li>
                    <img
                      src={beer.image_url}
                      alt=""
                      style={{ width: "15%", height: "15%" }}
                    />
                  </li>
                  <li>{beer.tagline}</li>
                  <li>
                    <Link exact to={`/single-beer/${beer._id}`}>
                      {beer.name}
                    </Link>
                  </li>
                  <li>{beer.contributed_by}</li>
                </ul>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default ListBeer;
