import React, { Component } from "react";
import axios from "axios";

export default class Beer extends Component {
  state = {
    beer: null
  };

  //   if (this.props.match.params.jola) {

  getBeerData = () => {
    const { jola } = this.props.match.params;
    console.log(jola);
    if (jola) {
      axios
        .get(`https://ih-beer-api.herokuapp.com/beers/${jola}`)
        .then(response => {
          const beer = response.data;
          console.log(beer);

          this.setState({
            beer: beer
          });
        });
    } else {
      axios
        .get(`https://ih-beer-api.herokuapp.com/beers/random`)
        .then(response => {
          const beer = response.data;
          console.log(beer);

          this.setState({
            beer: beer
          });
        });
    }
  };

  componentDidMount = () => {
    console.log("Individual Beer Mounted");
    this.getBeerData();
  };

  // componentDidUpdate = () => {
  //  this.getBeerData();
  // };

  //   componentDidUpdate() {
  //     console.log("DETAIL UPDATE");
  //     if (this.state.individualBeer._id !== this.props.match.params.jola) {
  //       this.getCountryData();
  //     }
  //   }
  render() {
    console.log("1");
    const { beer } = this.state;

    if (!beer) return <></>;

    return (
      <div>
        <img src={beer.image_url} />
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
        {/* <img src={}/> */}
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
