import React, { Component } from "react";
import "react-router-dom";
import axios from "axios";
import BeerDetails from "../../BeerDetails/BeerDetails";

export class SelectedBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api.herokuapp.com/beers/")
      .then(response =>
        this.setState({
          beers: response.data
        })
      )
      .catch(error => error);
  }

  render() {
    console.log(this.state.beers);
    return (
      <div>
        {this.state.beers
          .filter(result => result._id.includes(this.state.id))
          .map(beer => (
            <BeerDetails
              key={beer.name}
              name={beer.name}
              tagline={beer.tagline}
              image_url={beer.image_url}
              description={beer.description}
              created_by={beer.contributed_by}
              first_brewed={beer.first_brewed}
              id={beer._id}
            />
          ))}
      </div>
    );
  }
}

export default SelectedBeer;
