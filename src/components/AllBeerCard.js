import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AllBeerCard extends Component {
  render() {
    const { beer } = this.props;
    return (
      <div>
        <div className="all-beer-card d-flex flex-row">
          <div className="all-beer-image-box d-flex align-items-center justify-content-center">
            <img src={beer.image_url} alt={beer.name} />
          </div>
          <div className="all-beer-info d-flex flex-column justify-content-center">
            <Link
              to={{
                pathname: '/beers/' + beer._id,
                state: beer,
              }}
            >
              <h5>{beer.name}</h5>
            </Link>
            <p>{beer.tagline}</p>
            <span>
              <b>Created by: </b>
              {beer.contributed_by}
            </span>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default AllBeerCard;
