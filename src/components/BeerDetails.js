import React from 'react';
import Header from './Header';

const BeerDetails = (props) => {
  let findTheBeer = () => {
    const { params } = props.match;
    console.log(params);
    return props.beers.find((beer) => beer.id === params.id);
  };
  
  const theBeer = findTheBeer();
  return (
    <div>
      <Header />
      <div className="beers">
        <div>
          <img src={theBeer.image_url} alt="" style={{ height: 180 }} />
          <div>
            <div>
              <h2>{theBeer.name}</h2> <span>{theBeer.first_brewed}</span>
            </div>
            <div>
              <h3>{theBeer.tagline}</h3>{' '}
              <span>{theBeer.attenuation_level}</span>
            </div>
            <p>{theBeer.description}</p>
            <p>{theBeer.brewers_tips}</p>
            <h6>
              <b>Created by:</b> {theBeer.contributed_by}
            </h6>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default BeerDetails;
