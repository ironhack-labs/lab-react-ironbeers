import React, { Component } from "react";

import axios from "axios";

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
      const id = this.props.match.params.id
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((err) => console.log(err));
  }

    render() {
    return (
      <>
            <h1>{this.state.beers.name}</h1>
      </>
    );
  }
}

export default BeerDetails;
