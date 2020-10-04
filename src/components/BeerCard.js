// import packages
import React from 'react';
import { Link } from 'react-router-dom';

const BeerCard = (props) => {
  // retrieves 'info' property
  const { info } = props;

  // renders beer cards
  return (
    <Link to={`/beers/${info._id}`} >
      <div className='beer-card'>
        <aside className='beer-img'>
          <img alt={info.name} src={info.image_url} />
        </aside>
        <div className='beer-card-content'>
          <h3>{info.name}</h3>
          <p>{info.tagline}</p>
          <small><b>Created by: {info.contributed_by}</b></small>
        </div>
      </div>
    </Link>
  )
}

export default BeerCard;