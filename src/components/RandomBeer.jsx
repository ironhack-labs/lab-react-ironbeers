import React from 'react';
import axios from 'axios';
import '../styles/Beers.css';
import Header from './Header';


class RandomBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((response) => {
      this.setState({ beer: response.data });
    });
  }

  render() {
    if (!this.state.beer) return (<img className="center" src="https://i.gifer.com/4V0b.gif"></img>)
    return (
      
    <div className="col">
      <Header />
      <div className="card" key={this.state.beer._id}>
        <img
          className="card-img-top mx-auto beers"
          src={this.state.beer.image_url}
          alt={this.state.beer.name}
        ></img>
        <h5 className="card-title">{this.state.beer.name}</h5>
        <p className="card-text">{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>
          <small>
            <strong>Created by:</strong> {this.state.beer.contributed_by}
          </small>
        </p>
      </div>
    
    </div>
    )
  
    
  }
}

export default RandomBeer;
