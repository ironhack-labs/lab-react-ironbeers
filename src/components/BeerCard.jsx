import React from 'react';
import { Link } from 'react-router-dom';

const BeerCard = (props) => {
  const { beer } = props;
  let creator = null; 

  if (beer.contributed_by) {
    creator = beer.contributed_by.split('<')[0]; 
  }

  return (
    <div className='beer-card'>
      <div className='beer-card_img'>
        <img src={beer.image_url} alt={`bottle of ${beer.name}`} />
      </div>

      <div className='beer-card_details'>
        <Link to={`/beer/${beer._id}`}><h2>{beer.name}</h2></Link>
        <h3>{beer.tagline}</h3>
        {beer.contributed_by && <p><b>Created by:</b> {creator}</p>}
      </div>
    </div>
  )
}

export default BeerCard;
