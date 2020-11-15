import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Beers extends Component {
  handleSearch = (event) => {
    this.props.searchTheBeer(event.target.value);
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          <div>
            <label htmlFor="">Search:</label>
            <input
              type="text"
              name="name"
              onChange={(e) => this.handleSearch(e)}
            />
          </div>
          {this.props.beers.map((beer, index) => {
            return (
              <div key={index}>
                <img src={beer.image_url} alt="" style={{ height: 180 }} />
                <div>
                  <Link to={`/beers/${beer.id}`}>
                    <h2>{beer.name}</h2>
                  </Link>
                  <h3>{beer.tagline}</h3>
                  <h6>
                    <b>Created by:</b> {beer.contributed_by}
                  </h6>
                </div>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Beers;
