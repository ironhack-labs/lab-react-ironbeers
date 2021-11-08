import React from 'react';
import Nav from './Nav';

function RandomBeer(props) {
  console.log(props);
  return (
    <div className="single-beer">
      <Nav />
      <div>
        <div>
          <img src={props.image_url} alt="beer" style={{ height: '400px' }} />
        </div>
        <div>
          <h2>{props.name}</h2>
          <h3>{props.tagline}</h3>
          <h4>First brewed: {props.first_brewed}</h4>
          <h5>Attenuation level: {props.attenuation_level}</h5>
          <p>{props.description}</p>
          <p>By: {props.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}
export default RandomBeer;
