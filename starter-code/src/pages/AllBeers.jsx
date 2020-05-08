import React, { Component } from "react";
import BeerCard from "./../components/BeerCard.jsx";

export default class AllBeers extends Component {
  state = {
    filter: "",
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };
  render() {
    if (!this.props.beers) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="beer-list">
          <input
            type="text"
            name="filter"
            id="filter"
            onChange={this.handleFilter}
            placeholder="🔍 Filter"
          />
          {this.props.beers.map((beer) => {
            if (beer.name.toLowerCase().includes(this.state.filter)) {
              return <BeerCard beer={beer} />;
            }
          })}
        </div>
      );
    }
  }
}
