import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MyCards extends Component {
  render() {
    const { beers } = this.props;
    return (
      <div>
        {beers.map((beer, i) => {
          return (
            <div key={i} style={{ border: '1px solid gray' }}>
              <img
                src={beer.image_url}
                style={{ height: '80px' }}
                alt="beers"
              ></img>
              <Link to={`/all-beers/${beer._id}`} style={{ color: 'black' }}>
                {beer.name}
              </Link>
              <h5>{beer.tagline}</h5>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MyCards;
