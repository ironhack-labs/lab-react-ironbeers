import React, { Component } from "react";
import "react-router-dom";
import axios from "axios";
import BeerDetails from "../../BeerDetails/BeerDetails";

export class RandomBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: [],
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/beers/random`)
      .then(response =>
        this.setState({
          beer: response.data
        })
      )
      .catch(error => error);
  }

  render() {
    console.log(this.state.beer);
    if (Object.entries(this.state.beer).length === 0) {
      return <h6>LOADING</h6>;
    } else {
      return (
        <div>
          <BeerDetails
            key={this.state.beer.name}
            name={this.state.beer.name}
            tagline={this.state.beer.tagline}
            image_url={this.state.beer.image_url}
            description={this.state.beer.description}
            created_by={this.state.beer.contributed_by}
            first_brewed={this.state.beer.first_brewed}
            id={this.state.beer._id}
          />
        </div>
      );
    }
  }
}

export default RandomBeer;
