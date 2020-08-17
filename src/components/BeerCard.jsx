import React from 'react';


const BeerCard = (props) => {
  return (
    
      <div className="card border-bottom">
        <div>
          <img src={props.beerImg} alt="Beer bottle" />
        </div>
        <div className="card-body">
          <h1>{props.name}</h1>
          <h3>{props.tagline}</h3>
          <h6>
            <strong>Created by: </strong>
            {props.createdBy}
          </h6>
        </div>
      </div>
    
  );
};

export default BeerCard;
