import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiHandler from '../api/apiHandler';
import Header from './../components/Header';

export class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    apiHandler
      .getAllBeers()
      .then((apiRes) => {
        this.setState({ beers: apiRes.data });
      })
      .catch((apiError) => console.log(apiError));
  }

 
  render() {
    return (
      <div className="disp-beers">
        <Header />
        <div className="beers-container">
          {this.state.beers.map((beer) => {
            return (
            <div className="one-beer" key={beer._id}>
              <img src={beer.image_url} alt="beer" />
              <h2>{beer.name}</h2>
              <p className="tagline">{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
              <Link to={"/beers/" + beer._id} key={beer._id}> More Details</Link>
           
            </div>
          )})
          })
        </div>
      </div>
    );
  }
}

export default Beers;
