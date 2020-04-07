import React from "react";
import axios from "axios";

import DetailView from "../components/DetailView";

export class RandomBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    const selectedBeer = this.props.match.params.id;
    axios
      .get("https://ih-beers-api.herokuapp.com/beers/random")
      .then(response => {
        console.log("one beer response: ", response);
        this.setState({ beer: response.data });
        console.log(this.state.beer);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {!this.state.beer && <h1>Loading...</h1>}
        {this.state.beer && (
          <DetailView beer={this.state.beer}/>
        )}
      </div>
    )
  }
}

export default RandomBeer;
