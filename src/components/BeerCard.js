import React from 'react';

function ItemList(props) {
  console.log(props);
  return (
    <div>
      <img src={props.element.image_url} alt="beer" width="100" height="150" />
      <h3>{props.element.name}</h3>
      <h4>{props.element.tagline}</h4>
      <h4>{props.element.first_brewed}</h4>
      <h4>{props.element.attenuation_level}</h4>
      <h4>{props.element.description}</h4>
      <h4>{props.element.contributed_by}</h4>
    </div>
  );
}

export default ItemList;

//tres btn all beers, random beer, new beer
