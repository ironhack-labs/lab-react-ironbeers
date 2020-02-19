import React, { Component } from 'react';
import axios from "axios";

class RandomBeer extends Component {
  state = {
    beer: []
  };

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(res => {
    this.setState({
        beer: res.data
      });
    });
  }

  showTheRandomBeer = () => {
      console.log(this.state.beer)
    for (let i in this.state.beer) {
        return (
        <div className="container row beers">
          <img alt={this.state.beer.name} src={this.state.beer.image_url} />
          <div className="col">
            <div className="row">{this.state.beer.name}</div>
            <div className="row">{this.state.beer.tagline}</div>
            <div className="row">Created by: {this.state.beer.contributed_by}</div>
          </div>
        </div>
      );
    }

    
      
    
  };

  render() {
    return <div>
            {this.showTheRandomBeer()}
           </div>;
  }
}

export default RandomBeer;