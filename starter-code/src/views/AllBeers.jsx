import React, { Component } from "react";
import BeerCard from "./../components/BeerCard";

export default class AllBeers extends Component {
  render() {
    const allBeers = this.props.beers;
    return (
      <div>
        <div className="list-group">
          {allBeers.length === 0
            ? "Loading..."
            : allBeers.map(beer => {
                return <BeerCard key={beer._id} beer={beer} />;
              })}
        </div>
        {JSON.stringify(allBeers)}
      </div>
    );
  }
}

/*
const beerService = axios.create({
  baseURL: "https://ironbeerapi.herokuapp.com/beers/all",
});
*/
