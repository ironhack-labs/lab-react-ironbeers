import React, { Component } from 'react';
import axios from 'axios';
import homeicon from '../images/homeicon.png';

export class Random extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomBeer: {}
    }
  }
  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(randomBeer => {
      this.setState({randomBeer: randomBeer.data})
    })
  }
  render() {
    return (
      <div>
        <header className="homeiconbar">
          <a className="header-nav" href="/"><img src={homeicon} alt="" /></a>
        </header>
        <div className="container">
        <div className="singlebeerbox">
          <div className="singlebeerimg">
            <img src={this.state.randomBeer.image_url} alt="" />
          </div>
          <div className="beer-details">
              <div className="beer-row">
              <h2>{this.state.randomBeer.name}</h2>
              <h2 className="graycolor">{this.state.randomBeer.attenuation_level}</h2>
              </div>
              <div className="beer-row">
              <h4 className="graycolor">{this.state.randomBeer.tagline}</h4>
              <h4><strong>{this.state.randomBeer.first_brewed}</strong></h4>
              </div>
              <p>{this.state.randomBeer.description}</p>
              <br />
              <p>{this.state.randomBeer.contributed_by}</p>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Random
