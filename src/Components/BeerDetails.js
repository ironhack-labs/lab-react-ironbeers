import axios from 'axios';
import NavMain from './NavMain'

import React, { Component } from 'react';

export class BeerDetails extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    const beerId = this.props.match.params.beerId;
    console.log(beerId);
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
      .then((res) => {
        console.log(res.data)
        this.setState({ beer: res.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    if (this.state.beer === null) return <div>Loading...</div>;

    return (
      <div>
      <NavMain />
      <div className="details">
      <img style={{width:"10vh", paddingTop: "7vh", marginRight: "4vh",}} alt="r" src={this.state.beer.image_url}/>
        <div className="info-onebeer">
        <div className="first-raw">
        <div className="first">
        <h3>{this.state.beer.name}</h3>
        <p style={{color:"grey", fontWeight: "600", paddingTop: "1vh"}}>{this.state.beer.tagline}</p>
        </div>
        <div className="second">
        <p style={{fontSize: "3vh", color:"grey"}}>{this.state.beer.attenuation_level}</p>
        <p style={{paddingTop: "1vh"}}><b>{this.state.beer.first_brewed}</b></p>
        
        </div>
        </div>
        <div className="text">
        <p>{this.state.beer.description}</p>
        <p style={{paddingTop: "1vh"}}><b>{this.state.beer.contributed_by}</b></p>
        </div>
        </div>
      </div>
      </div>
    )
  }
}

export default BeerDetails;
