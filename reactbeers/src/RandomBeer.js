import React, { Component } from "react";
import Link from "react-router-dom/Link";
import Nav from './Nav.js'
import axios from "axios";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state =
     { randombeer: {} 
     };
  }



  componentDidMount() {
    axios.get('http://localhost:5000/random')
    .then(random => {
      const BeerRandom = random.data
      this.setState({
      
        ...this.state,
        randombeer: BeerRandom
      });
    });  }

  render() {

    return (
      <div>
        
        <div>
        <img src={this.state.randombeer.image_url} alt="imgbeer" />
        <h1>{this.state.randombeer.name}</h1>
        <p>{this.state.randombeer.first_brewed}</p>
        <p>{this.state.randombeer.attenuation_level}</p>
        <p>{this.state.randombeer.tagline}</p>
        <p>{this.state.randombeer.description}</p>
        <p>author: {this.state.randombeer.contributed_by}</p>

                  <Link to='/'>go home</Link>

        
        </div>
      </div>
    )  
   
    
  }
}

export default RandomBeer;