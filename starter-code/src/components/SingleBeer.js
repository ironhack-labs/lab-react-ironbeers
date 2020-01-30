import React, { Component } from "react";
import { Link } from "react-router-dom";
import home from '../images/Home.png';
import axios from 'axios';

export default class SingleBeer extends Component {
    state={
        oneBeer:{}
    }

    beerId = this.props.match.params.beerId;

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.beerId}`)
        .then(response => {
            this.setState({oneBeer: response.data})
            console.log("One Beer delivered from API");
            console.log(response.data);
        })
    }

  render() {
    return (
      <div>
        <h1>Single Beer</h1>
        <header>
          <Link to="/"><img src={home} alt="Banner" className="banner"/></Link>
        </header>
        <h1>{this.state.oneBeer.name}</h1>
        <img src={this.state.oneBeer.image_url} alt ="SingleBierBild" className="oneBeerListImage"/>
        <p>{this.state.oneBeer.tagline}</p>
        <p>{this.state.oneBeer.first_brewed}</p>
        <p>{this.state.oneBeer.attenuation_level}</p>
        <p>{this.state.oneBeer.description}</p>
        <p>{this.state.oneBeer.contributed_by}</p>
      </div>
    );
  }
}

/* 

    image
    name
    tagline
    first_brewed
    attenuation_level
    description
    contributed_by

*/