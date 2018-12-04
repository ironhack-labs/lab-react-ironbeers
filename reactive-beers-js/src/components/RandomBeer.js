import React, { Component } from "react";

import axios from "axios";

import Header from "./Header.js";

class RandomBeer extends Component {

  constructor(props){
    super(props);
    this.state = {
      beer: [],
    }
  }

     componentDidMount(){
      // retrieve the info from the API as soon as the component loads
      axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
        .then(response => {
          console.log("Random Beer", response.data)
          this.setState({beer : response.data[0]})
        })
        .catch(err => {
          console.log("Random Beer ERROR", err);
          alert("Sorry! Something went wrong.");
        })
    }

  render(){
    const { beer } = this.state;
    return(
      <section className="RandomBeer">
        <Header />
        <h2>Random Beer</h2>
        <img src={beer.image_url} alt={beer.name} />
        <h3>{beer.name}</h3>
        <h5>{beer.tagline}</h5>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <h6>{beer.contributed_by}</h6>
      </section>
    )
  }
}

export default RandomBeer;