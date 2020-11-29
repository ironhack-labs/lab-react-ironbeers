import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

export class Beers extends Component {
  state = {
    listOfBeers: [],
  };

  componentDidMount() {
    this.getAllBeers();
  }
/*
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
*/
  getAllBeers = async () => {
    try {
      const getBeers = await axios.get(`https://api.punkapi.com/v2/beers`)
      this.setState({
        listOfBeers: getBeers.data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.state.listOfBeers.map((beer, index) => {
            return (
              <div key={index}>
                <img src={beer.image_url} alt="Beer" />
                <div>
                <Link to={`/beer/${beer.id}`}><h2>{beer.name}</h2></Link>
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
