import React, { Component } from 'react';
import Header from '../components/Header';
import beerAPI from '../API/beerApi';
import { Link } from 'react-router-dom';


export default class beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      selectedBeer: null,
    };
  }

  async componentDidMount() {
    beerAPI
      .getBeers()
      .then((apiResponse) => {
        this.setState({ beers: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Beers</h1>
        {this.state.beers.map((beer) => {
          return ( 
            <div key={beer._id} style={{display:"flex", margin: "5px", border:"2px solid black", padding: "4px", width:"50%"}}>
              <img style={{height:"15vh"}} src={beer.image_url} alt="" />
              <div>
              <Link exact to={`/beers/${beer._id}`}>
                <p>{beer.name}</p>
              </Link>
                <p>{beer.tagline}</p>
                <p>Contributed by: {beer.contributed_by.split("<")[0]}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
