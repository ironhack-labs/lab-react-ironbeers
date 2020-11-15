import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class BeersDetails extends Component {
    state = {
        beer: []
    }

    componentDidMount() {
      this.getSingleBeer();
    }
    
    componentWillUnmount() {
      this.setState = (state, callback) => {
        return;
      };
    }
  
    getSingleBeer = () => {
      const { params } = this.props.match;
      console.log(params, 'params')
      axios
        .get(`https://api.punkapi.com/v2/beers/${params.id}`)
        .then(responseFromApi => {
          const theBeer = responseFromApi.data;
          this.setState({beer: theBeer});
          console.log(theBeer, 'esta es the beer')
        })
        .catch(err => {
          console.log(err);
        });
    };

    render() {
        console.log(this.state.name, 'nombre')
            return (
                <div>
                <Header />
                <h1>BEER DETAILS</h1>
                    <div>
                    {this.state.beer.map((beer, index) =>{
                            return<div key={index}>
                            <img src={beer.image_url} alt="beer" />
    
                            <div>
                                <h2>Name: {beer.name}</h2>
                                <h3>Tagline: {beer.tagline}</h3>
                                <p>Description: {beer.description}</p>
                                <p>First brewed: {beer.first_brewed} </p>
                                <p>Attenuation level: {beer.attenuation_level} </p>
                                <p>Created by:{beer.contributed_by}</p>
                            </div>
                            <hr></hr>
                            </div>
                        })}
                    </div>
                </div>
            )
        }
    
    }

export default BeersDetails;