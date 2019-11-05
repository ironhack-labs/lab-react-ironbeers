import React, { Component } from "react";

import axios from "axios";

class Beers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.beers.map(e => {
          return (
            <div>
              <h1>{e.name}</h1>
              <img src={e.image_url} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Beers;
