import React from 'react';
import {Link} from 'react-router-dom';

const BeerListItem = ({_id, image_url, name, tagline, contributed_by}) => (
  <div className='beers-list'>
    <Link className='beer-list-item' to={`/beers/${_id}`}>
      <div>
        <img src={image_url} alt={name}/>
      </div>
      <div>
        <h4>Name {name}</h4>
        <p> Tag {tagline}</p>
        <p><strong>Contributed {contributed_by}</strong></p>
      </div>
    </Link>
  </div>
)

export default BeerListItem;