import React, { Component } from 'react';
import Header from '../components/Header';
import beerAPI from '../API/beerApi';


export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: [],
    };
  }

  async componentDidMount() {
    beerAPI
      .getRandom()
      .then((apiResponse) => {
        this.setState({ beer: apiResponse.data });
        console.log(this.state.beer);
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Random Beer</h1>
            <div style={{display:"flex", margin: "5px", border:"2px solid black", padding: "4px", width:"50%"}}>
              <img style={{height:"15vh"}} src={this.state.beer.image_url} alt="" />
              <div>
                <p>{this.state.beer.name}</p>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>Contributed by: {this.state.beer.contributed_by}</p>
              </div>
            </div>
            </div>
          );
    };
  }