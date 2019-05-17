import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class SingleBeer extends Component {
  state = {
    singleBeer: []
  };

  componentDidMount() {
    console.log(this.props)
    axios.get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.beer_id}`)
        .then(onlyBeer => {
      console.log(onlyBeer);

      this.setState({
        singleBeer: onlyBeer.data
      });
    });
  }

  singleBeer = () => {
    return (
    <div>
    <img alt="" src={this.state.singleBeer.image_url} width="50"></img>
    {this.state.singleBeer.name}
    <p>{this.state.singleBeer.tagline}</p>
    <p>{this.state.singleBeer.first_brewed}</p>
    <p>{this.state.singleBeer.attenuation_level}</p>
    <p>{this.state.singleBeer.description}</p>
    <p>{this.state.singleBeer.contributed_by}</p>
    </div>
    );
    
  };

  render() {
    return (
      <div>
        single!!!!
        {this.singleBeer()}
      </div>
    );
  }
}

export default SingleBeer;
