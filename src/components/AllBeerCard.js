import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AllBeerCard extends Component {
  render() {
    const { beer } = this.props;
    const { image_url, name, _id, tagline, contributed_by } = this.props.beer;
    return (
      <div>
        <div className="all-beer-card d-flex flex-row">
          <div className="all-beer-image-box d-flex align-items-center justify-content-center">
            <img src={image_url} alt={name} />
          </div>
          <div className="all-beer-info d-flex flex-column justify-content-center">
            <Link
              to={{
                pathname: '/beers/' + _id,
                state: beer,
              }}
            >
              <h5>{name}</h5>
            </Link>
            <p>{tagline}</p>
            <span>
              <b>Created by: </b>
              {contributed_by}
            </span>
            >
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default AllBeerCard;
