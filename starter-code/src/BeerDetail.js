import React, { Component } from "react";
import axios from "axios";

class BeerDetail extends Component {
  state = {
    beerId: this.props.match.params.id,
    beer: {}
  };

  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${this.state.beerId}`)
      .then(response => {
        console.log(response);
        this.setState({
          beer: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.beer);
    
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={this.state.beer.image_url} style={{height:"auto", width:"8rem"}} alt="" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5>{this.state.beer.name}</h5>
          <h5>{this.state.beer.attenuation_level}</h5>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{this.state.beer.tagline}</p>
          <p>{this.state.beer.first_brewed}</p>
        </div>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    );
  }
}

export default BeerDetail;
