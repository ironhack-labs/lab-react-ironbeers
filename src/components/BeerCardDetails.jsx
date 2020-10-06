import React from 'react';
import '../stylesheets/BeerCardDetails.css'

const BeerCardDetails = (props) => {
    const beer = props.beer;
  return (
    <main className="BeerCardDetails">
      <div className="BeerCardDetails__img-wrapper">
        <img className="BeerCardDetails__img" alt="beer" src={beer.image_url} />
      </div>
      <article className="BeerCardDetails__content">
        <div className="BeerCardDetails__header">
          <div className="header-line1">
            <h2>{beer.name}</h2>
            <p className="BeerCardDetails__attenuation">{beer.attenuation_level}</p>
          </div>
          <div className="header-line2">
            <h3 className="tagline">{beer.tagline}</h3>
            <p className="BeerCardDetails__date">{beer.first_brewed}</p>
          </div>
        </div>
        <div className="BeerCardDetails__body">
          <p>{beer.description}</p>
        </div>
        <div className="BeerCardDetails__footer">
          <p>{beer.contributed_by}</p>
        </div>
      </article>
    </main>
  );
};

export default BeerCardDetails