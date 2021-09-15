import React from 'react';
import '../beer/Beer.css';
import axios from 'axios';
import Header from '../header/Header';


export default class Beer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount ()  {
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((res) => {
              this.setState({ beer: res.data });
          })
    .catch(() => {
      console.log("Error");
    });
}

  render() {
    if (!this.state.beer) {
  return "Loading...";
    }
 
    return(
      <div className='Beer'>
      <Header />
        <img src={this.state.beer.image_url} className="Beer__img" alt={this.state.beer.name} />
        <div className="Beer__title">
          <h1>{this.state.beer.name}</h1>
          <h1 className="Beer__title__attenuation">{this.state.beer.attenuation_level}</h1>
        </div>
        <div className='Beer__subtitle'>
          <h3 className='Beer__subtitle__tagline'>{this.state.beer.tagline}</h3>
          <h4>{this.state.beer.first_brewed}</h4>
        </div>
        <div className='Beer__content'>
          <p><strong>{this.state.beer.description}</strong></p>
          <p className='Beer__content__contributed'>{this.state.beer.contributed_by}</p>
        </div>
      </div>
  ) 
}
}