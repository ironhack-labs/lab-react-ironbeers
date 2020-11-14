import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

export class Beers extends Component {
  constructor() {
    super();
    this.state = {
      listOfBeers: [],
    };
  }

  getAllBeers = () => {
    axios
      .get(`https://api.punkapi.com/v2/beers`)
      .then((responseFromApi) => {
        this.setState({
            listOfBeers: responseFromApi.data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.state.listOfBeers.map((beer, index) => {
            console.log(beer);
            return (
              <div key={index}>
                <img src={beer.image_url} alt="Beer" />
                <div>
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <p>
                    <span>Created by: </span>
                    {beer.contributed_by}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Beers;
