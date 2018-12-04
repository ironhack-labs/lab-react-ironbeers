import React, { Component } from "react";

import axios from "axios";

import Header from "./Header.js";

class BeerDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      beer: [],
    }
  }

     componentDidMount(){
      const { params } = this.props.match;
      // retrieve the info from the API as soon as the component loads
      axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params.beerId}`)
        .then(response => {
          console.log("Beer Details", response.data)
          this.setState({beer : response.data})
        })
        .catch(err => {
          console.log("Beer Details ERROR", err);
          alert("Sorry! Something went wrong.");
        })
    }

  render(){
    const { beer } = this.state;
    return(
      <section className="BeerDetails">
        <Header />
        <h2>Beer Details</h2>
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

export default BeerDetails;