import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class RandomBeer extends Component {
  state = {
    allBeers: []
  };

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers/random").then(allBeers => {
      console.log(allBeers);

      this.setState({
        allBeers: allBeers.data
      });
    });
  }

  randomBeer = () => {
    return (
    <div style={{
      margin: "20px"
    }}>
    <img alt="" src={this.state.allBeers.image_url} width="50"></img>
    <div style={{
      display:"flex",
      justifyContent:"space-between"
    }}>
    <h1>{this.state.allBeers.name}</h1>
    <h2 style={{
      color:"lightgray"
    }}>{this.state.allBeers.attenuation_level}</h2>
    </div>
    <div style={{
      display:"flex",
      justifyContent:"space-between"
    }}>
    <h3 style={{
      color:"lightgray"
    }}>{this.state.allBeers.tagline}</h3>
    <h3><strong>{this.state.allBeers.first_brewed}</strong></h3>
    </div>
    <div>
    <p style={{
      textAlign: "justify"
    }}>{this.state.allBeers.description}</p>
    <p style={{
      color:"lightgray"
    }}>{this.state.allBeers.contributed_by}</p>
    </div>
    </div>
    );
    
  };

  render() {
    return (
      <div>
       
        {this.randomBeer()}
      </div>
    );
  }
}

export default RandomBeer;
