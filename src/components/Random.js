import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class Random extends Component {
    state = {
        random: []
    }

    componentDidMount() {
        this.getRandomBeer();
      }
      
      componentWillUnmount() {
        this.setState = (state, callback) => {
          return;
        };
      }
    
      getRandomBeer = () => {
        const { params } = this.props.match;
        console.log(params, 'params')
        axios
          .get(`https://api.punkapi.com/v2/beers/random`)
          .then(responseFromApi => {
            const randomBeer = responseFromApi.data;
            this.setState({random: randomBeer});
            console.log(randomBeer, 'esta es la random')
            
          })
          .catch(err => {
            console.log(err);
          });
      };

    render() {
        return (
            <div>
            <Header />
            <h1>RANDOM BEER</h1>
                <div>
                {this.state.random.map((random, index) =>{
                        return<div key={index}>
                        <img src={random.image_url} alt="beer" />

                        <div>
                            <h2>Name: {random.name}</h2>
                            <h3>Tagline: {random.tagline}</h3>
                            <p>Description: {random.description}</p>
                            <p>First brewed: {random.first_brewed} </p>
                            <p>Attenuation level: {random.attenuation_level} </p>
                            <p>Created by:{random.contributed_by}</p>
                        </div>
                        <hr></hr>
                        </div>
                    })}
                </div>
            </div>
        )
    }

}

export default Random;
