import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { loadAll, getOne } from "../services/beer";
import BeerDetails from "../components/beerDetails";

export class beers extends Component {
  constructor(props) {
    console.log("Constructed");
    super(props);
    this.state = {
      beersList: []
    };
  }

  componentDidMount() {
    loadAll().then(list => {
      //console.log(list);
      this.setState({
        beersList: list
      });
    });
    /* console.log(loadAll; */
    console.log("Mounted");
  }

  render() {
    console.log("rendered");

    return (
      <div>
        <nav>
          <Link to="/">
            <img
              src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
              alt="Home icon"
            />
          </Link>
        </nav>
        {this.state.beersList.map(beer => {
          return (
            <div key={beer._id}>
              <Link to={`/${beer._id}`}>
                <BeerDetails {...beer} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default beers;
