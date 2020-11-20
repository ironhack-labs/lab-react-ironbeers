import React from 'react';
import { Link } from 'react-router-dom';
import './OneBeer.css';
function OneBeer(props) {
  return (
    <div>
      <div className="onebeer">
        <img src={props.image_url}></img>
        <div className="beer-div">
          <Link to={`/beers/${props._id}`} style={{ textDecoration: 'none' }}>
            <h2>{props.name}</h2>
          </Link>
          <h4>{props.tagline}</h4>
          <p>
            <strong>Created By: </strong>
            {props.contributed_by}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default OneBeer;
