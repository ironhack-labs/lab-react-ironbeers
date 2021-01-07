import React, { Component } from 'react';
import axios from "axios";


class Randombeer extends Component {
    state = {
        beer: null,
      };
    
      componentDidMount() {
          
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((apiResponse) => {
          console.log(apiResponse);
          setTimeout(() => {
            this.setState({
              beer: apiResponse.data,
            });
          }, 1000);
        });
      }
    
      render() {
        if (!this.state.beer) {
          return <div>Looking for your beer..</div>;
        }
    
        return (
          <div>
              
            <h2>Here is your {this.state.beer.name} beer</h2>
            <div>
              
              <img src={this.state.beer.image_url} />
              <h3>{this.state.beer.tagline}</h3>
              <h4>{this.state.beer.first_brewed}</h4>
              <p>{this.state.beer.attenuation_level}</p>
              <p>{this.state.beer.description}</p>
              <p>{this.state.beer.contributed_by}</p>
            </div>
        
          </div>
        );
      }
    }
    

export default Randombeer;
