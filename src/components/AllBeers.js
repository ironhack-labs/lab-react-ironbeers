import React, { Component } from 'react';
import {
  Link,
} from "react-router-dom";

export default class AllBeers extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then(res => res.json())
      .then(beersRaw => {
        return beersRaw.map(beerRaw => {
          const {_id: id, image_url: image, name, tagline, contributed_by: contributor} = beerRaw;
          return {id, image, name, tagline, contributor};
        })
      })
      .then(beers => this.setState({
        beers
      }))
  }

  render() {
    if(this.state.beers.length===0) {
      return (
        <div>
          <p>Sorry, no data</p>
        </div>
      )
    }

    return (
      <>
        <div className="container">
          {this.state.beers.map(beer => {
            return <div key={beer.name}>
              <img src={beer.image} alt={beer.name} />
              <div>
                <Link to={`/beers/${beer.id}`}>
                  <h2>{beer.name}</h2>
                </Link>              
                <span>{beer.tagline}</span>
                <h6>{beer.contributor}</h6>
              </div>
            </div>
          })}
        </div>
      </>
    )
  }
}
