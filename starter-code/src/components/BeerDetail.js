import React, { Component } from 'react';
import axios from 'axios';
import homeicon from '../images/homeicon.png';

export class BeerDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      specificBeer: {}
    }
  }
  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`).then(specificBeer => {
      this.setState({specificBeer: specificBeer.data})
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
            <img src={this.state.specificBeer.image_url} alt="" />
          </div>
          <div className="beer-details">
              <div className="beer-row">
              <h2>{this.state.specificBeer.name}</h2>
              <h2 className="graycolor">{this.state.specificBeer.attenuation_level}</h2>
              </div>
              <div className="beer-row">
              <h4 className="graycolor">{this.state.specificBeer.tagline}</h4>
              <h4><strong>{this.state.specificBeer.first_brewed}</strong></h4>
              </div>
              <p>{this.state.specificBeer.description}</p>
              <br />
              <p>{this.state.specificBeer.contributed_by}</p>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default BeerDetail
