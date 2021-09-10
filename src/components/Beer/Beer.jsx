import React, { Component } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Beer.css';

export default class Beer extends Component {
  state = {
    beer: null,
  };
  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        console.log(res.data)
        this.setState({ beer: res.data.find((beer) => beer._id === this.props.match.params._id) });
      })
      .catch(() => {
        console.log('Error');
      });
  }

   render() {
    console.log(this.state.beer)
      if(!this.state.beer) {
          return (
            <Loader type="Oval" className='Loader' color="#3dc4fc" height={100} width={100} />)
      }

      return(
        <div className='Beer'>
          <div className="cardId" >
            <img src={this.state.beer.image_url} className="card-img-top beer-image" alt={this.state.beer.name} />
            <div className="card-body">
              <div className='card-titles'>
                <div className='title-name'>
                  <h3>{this.state.beer.name}</h3>
                  <h3>{this.state.beer.attenuation_level}</h3>
                </div>
                <div className='subtitle'>
                  <h6>{this.state.beer.tagline}</h6>
                  <h6>{this.state.beer.first_brewed}</h6>
                </div>
              </div>
              <div className='content'>
                <p><strong>{this.state.beer.description}</strong></p>
                <p>{this.state.beer.contributed_by}</p>
              </div>
            </div>
          </div>
        </div>
      ) 
   }
}

