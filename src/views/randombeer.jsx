import { NavLink } from "react-router-dom";
import React, { Component } from 'react';
import axios from "axios";

export default class randombeer extends Component {
state = {
  random : []
}


  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then((responseFromApi) => {
    console.log("random",responseFromApi.data);
      this.setState({
        random: responseFromApi.data,
      });
    });
  }

  render() {
    return (
      <div >
      <h1>Random beer</h1>
      <NavLink exact to="/">Maison logo</NavLink>
      <div>
                <h1>Hello</h1>
               <img src={this.state.random.image_url} alt=""/>
               <h1>{this.state.random.name}</h1> 
               <h1>{this.state.random.attenuation_level}</h1>
               <h2>{this.state.random.tagline}</h2>
               <strong>{this.state.random.first_brewed}</strong>
               <p>{this.state.random.description}</p>
               <h3>{this.state.random.contributed_by}</h3>
            </div>

    </div>
    )
  }
}
