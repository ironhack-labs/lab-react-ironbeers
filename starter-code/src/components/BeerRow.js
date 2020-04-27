import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BeerRow extends Component {
  render() {
    const { image_url, _id, name, tagline, contributed_by} = this.props;
    return (
      <Link to={`/beers/${_id}`} className={'beerRow'} >
        <img src={image_url} alt=""/>
        <div className={'data'}>
          <h2>{name}</h2>
          <p>{tagline}</p>
          <b>Created by: {contributed_by}</b>
        </div>
      </Link>
    );
  }
}

export default BeerRow;