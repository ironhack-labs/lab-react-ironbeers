import React, { Component } from 'react';
import axios from 'axios';
import './BeerDetails.css';


export default class BeerDetails extends Component {

  state = {
      beer: null
    }

  getBeerData = () => {
    const id = this.props.match.params.id;
    console.log("BeerId", id);

    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(response => {
        const beer = response.data;
        this.setState({
            beer: beer
        })
    })
  }

  componentDidMount() {
    this.getBeerData();
  }

  render() {

  const ClickedBeer = this.state.beer;
  if (!ClickedBeer) return <>Loading...</>

    return (
      <>
        <div className="details">
          <div className="beer-image">
            <img className="details-img" src={ClickedBeer.image_url} alt="{ClickedBeer.name}" />
          </div>
          <div className="headings">
            <h2>{ClickedBeer.name}</h2>
            <p>{ClickedBeer.tagline}</p>
            <h2 className="right">{ClickedBeer.attenuation_level}</h2>
            <p className="right"><strong>{ClickedBeer.first_brewed}</strong></p>
          </div>
          
          <p>{ClickedBeer.description}</p>
          <h6>Created by: {ClickedBeer.contributed_by}</h6>
        </div>
      </>
    )
  }
}