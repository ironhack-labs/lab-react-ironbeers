import React from 'react'
import { Link } from 'react-router-dom';
import './BeerListItem.css'
//import 'bootstrap/dist/css/bootstrap.css'

const BeerListItem = (props) => {
  return (
    <div className="beer-list-item">
      <div className="beer-list-img-container">
        <img className="beer-list-img" src={props.image_url} alt={props.name} />
      </div>
      <div className="beer-list-text">
        <div className="beer-list-text-cont">
        <Link to={`/beer/${props._id}`}>
          <h3>{props.name}</h3>
        </Link>
        </div>
        <div className="beer-list-text-cont">
          <span className="tagline">{props.tagline}</span>
        </div>
        <div className="beer-list-text-cont">
          <small className="contributed-by">Created by: {props.contributed_by}</small>
        </div>
      </div>
    </div>
  );
}

export default BeerListItem;