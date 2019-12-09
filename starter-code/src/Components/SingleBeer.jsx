import React, { Component } from "react";
import Navbar from "./Navbar";
import { beers } from "./../Services/ListBeers";

export class SingleBeer extends Component {
  constructor() {
    super();
    this.state = {
      singleBeer: []
    };
  }

  componentDidMount() {
    const beerId = this.props.match.params.id;
    beers()
      .then(beers => {
        for (let i = 0; i < beers.data.length; i++) {
          if (beers.data[i]._id === beerId) {
            this.setState({ singleBeer: beers.data[i] });
          } 
        }

        this.setState({ sinngleBeers: beers.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const beerId = this.props.match.params.id;
    let beer = this.state.singleBeer;
    console.log("props", beerId);
    return (
      <div>
        <Navbar />
        {beer && <div className='card-group text-center'>
        <img src={beer.image_url} alt={beer.name} className='card-img-top' style={{maxWidth: '25%'}}/>
        <div className='d-flex justify-content-between'> <h2 className='card-title'>{beer.name}</h2>  <p className="card-text p-3"> {beer.attenuation_level}</p></div>
        <div className='d-flex justify-content-between'> <p className="card-text">Tagline: {beer.tagline}</p>        <p className="card-text"> {beer.first_brewed}</p></div>
        <p className="card-text">Description: {beer.description}</p>
        <p className="card-text">Created by {beer.contributed_by}</p>
        </div>}
      </div>
    );
  }
}

export default SingleBeer;
