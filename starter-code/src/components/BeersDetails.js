import React, { Component } from "react";
import axios from "axios";
import Nav from "./Nav";
import DetailsCard from "./DetailsCard";

class BeersDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params._id}`
      )
      .then(response => {
        this.setState({
          beers: response.data
        });
      });
  }

  render() {
    return (
      <div>
        <Nav />
        <DetailsCard
          name={this.state.beers.name}
          image={this.state.beers.image_url}
          tagline={this.state.beers.tagline}
          brewed={this.state.beers.first_brewed}
          level={this.state.beers.attenuation_level}
          contributed={this.state.beers.contributed_by}
          description={this.state.beers.description}
        />
      </div>
    );
  }
}

export default BeersDetails;
