import React from "react";

function SingleBeer(props) {
  return (
    <div className='single-beer'>
      <div className='single-beer__img-container'>
        <img src={props.beer.image_url} alt='Beer visual' />
      </div>
      <div className='single-beer__text'>
        <h3>{props.beer.name}</h3>
        <h4>{props.beer.tagline}</h4>
        <p>Created by</p>
        <p>{props.beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default SingleBeer;
