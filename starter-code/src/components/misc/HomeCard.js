import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeCard = (props) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-3by1">
        <img src={props.img}/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <NavLink to={props.link}>
            <p className="title is-4">{props.name}</p>
          </NavLink>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. 
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeCard;