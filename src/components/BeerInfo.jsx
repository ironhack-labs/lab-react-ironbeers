import React from 'react';

const BeerInfo = (props) => {
  const { beer } = props;
  let creator = null; 

  if (beer.contributed_by) {
    creator = beer.contributed_by.split('<')[0]; 
  }

  return (
    <div className='beer-info'>
      <div className='beer-info_img'>
        <img src={beer.image_url} alt={`bottle of ${beer.name}`} />
      </div>

      <div className='beer-info_details'>
        <div>
          <h2>{beer.name}</h2>
          <h4>{beer.attenuation_level}</h4>
        </div>

        <div>
          <h3>{beer.tagline}</h3>
          <p>{beer.first_brewed}</p>
        </div>

        <div>
          <p>{beer.description}</p>
        </div>

        <div>
          {beer.contributed_by && <p>
            <b>Created by:</b> {creator}
          </p>}
        </div>
      </div>
    </div>
  )
}

export default BeerInfo;
