import React from 'react';

function Beer(props) {
  return (
    <div>
      <img src={props.beer.image_url} alt={props.beer.name} />
    </div>
  );
}

export default Beer;
