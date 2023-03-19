import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const BeerForList = ({ beer }) => {
  return (
    <Link to={`/beers/${beer._id}`}>
      <div className='BeerForList in-link'>
        <div className='image-div'>
          <img src={beer.image_url} alt={beer.name}/>
        </div>
        <div>
          <h3>{beer.name}</h3>
          <h5 style={{color: 'grey'}}>{beer.tagline}</h5>
          <p><b>Created by: </b>{beer.contributed_by.split('<')[0]}</p>
        </div>
      </div>
    </Link>
  );
};

export default BeerForList;