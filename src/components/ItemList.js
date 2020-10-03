import React from 'react';
import { Link } from 'react-router-dom';

function ItemList(props) {
  console.log(props.element);
  return (
    <div>
      <Link to={`/beers/${props.element._id}`}>
        <img
          src={props.element.image_url}
          alt="beer"
          width="100"
          height="150"
        />
        <h3>{props.element.name}</h3>
        <h4>{props.element.description}</h4>
        <p>Created by: {props.element.name}</p>

        <i class="fas fa-arrow-alt-circle-right" />
      </Link>
    </div>
  );
}

export default ItemList;

//tres btn all beers, random beer, new beer
