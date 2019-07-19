import React, { Component } from "react";
import BeerCard from "./BeerCard";
import axios from "axios";

class BeersList extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      filterStr: ""
    };
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
      this.setState({ beers: response.data });
    });
  }

  handleChange = text => {
    this.setState({ filterStr: text });
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/search?q=${text}`)
      .then(response => {
        console.log(response.data);
        this.setState({ beers: response.data });
      });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="filterStr"
          onChange={e => this.handleChange(e.target.value)}
          value={this.state.filterStr}
        />
        <div className="card-container">
          {!this.state.beers.length ? (
            <p>Loading beers...</p>
          ) : (
            this.state.beers.map((el, index) => (
              <BeerCard key={index} {...el} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default BeersList;
