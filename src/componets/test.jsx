import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../componets/Header';

function test() {
  return (
    <React.Fragment>
      <Header />
      <div className="beers">
        {this.state.beers.map((beer) => {
          return (
            <Link key={beer._id} to={'/beers/' + beer._id}>
              <img
                style={{ width: '100px' }}
                src={beer.image_url}
                alt={beer.name}
              />
              <span>{beer.name}</span>
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default test;
