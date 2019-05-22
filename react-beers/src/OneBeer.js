import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class OneBeer extends Component {
  state = {
    OneBeer: []
  };

  componentDidMount() {
    console.log(this.props)
    axios.get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.beer_id}`)
        .then(onlyBeer => {
      console.log(onlyBeer);

      this.setState({
        OneBeer: onlyBeer.data
      });
    });
  }

  OneBeer = () => {
    return (
    <div>
      <img alt="one" src={this.state.OneBeer.image_url} width="50"></img>
      <h3>{this.state.OneBeer.name}</h3>
      <p>{this.state.OneBeer.tagline}</p>
      <p>{this.state.OneBeer.first_brewed}</p>
      <p>{this.state.OneBeer.attenuation_level}</p>
      <p>{this.state.OneBeer.description}</p>
      <p>{this.state.OneBeer.contributed_by}</p>
    </div>
    );

  };

  render() {
    return (
      <div>
        {this.OneBeer()}
      </div>
    );
  }
}

export default OneBeer;