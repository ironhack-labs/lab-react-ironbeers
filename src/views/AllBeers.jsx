import { getNodeText } from '@testing-library/dom';
import React, { Component } from 'react';
import Header from './../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((beers) => {
        console.log(beers.data);
        this.setState({ beers: beers.data });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.beers.length === 0 && <h1>Loading...</h1>}
        {this.state.beers.length !== 0 && (
          <div
            id="beers-container"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {[...this.state.beers].map((beer, index) => {
              return (
                  <div className="single-beer" key={index} style={{display: 'flex', borderBottom: '1px solid black'}}>
                      <div style={{margin: '10px'}}>
                        <Link to={`/beers/${beer._id}`}>  <img src={beer.image_url} alt="image of beer" style={{height: '60px'}}/> </Link>
                      </div>
                      <div>
                        <p style={{fontSize: '21px', marginTop: '15px'}}>{beer.name}</p>
                        <p style={{fontSize: '11px', marginTop: '5px'}}>{beer.tagline}</p>
                      </div>
                  </div>
              )
            })}
          </div>
        )}
      </div>
    );
  }
}

export default AllBeers;
