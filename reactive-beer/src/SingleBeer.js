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
      <div style={{
        margin: "20px"
      }}>
      <img alt="" src={this.state.singleBeer.image_url} width="50"></img>
      <div style={{
        display:"flex",
        justifyContent:"space-between"
      }}>
      <h1>{this.state.singleBeer.name}</h1>
      <h2 style={{
        color:"lightgray"
      }}>{this.state.singleBeer.attenuation_level}</h2>
      </div>
      <div style={{
        display:"flex",
        justifyContent:"space-between"
      }}>
      <h3 style={{
        color:"lightgray"
      }}>{this.state.singleBeer.tagline}</h3>
      <h3><strong>{this.state.singleBeer.first_brewed}</strong></h3>
      </div>
      <div>
      <p style={{
        textAlign: "justify"
      }}>{this.state.singleBeer.description}</p>
      <p style={{
        color:"lightgray"
      }}>{this.state.singleBeer.contributed_by}</p>
      </div>
      </div>
    );
    
  };

  render() {
    return (
      <div>
        
        {this.singleBeer()}
      </div>
    );
  }
}

export default SingleBeer;
