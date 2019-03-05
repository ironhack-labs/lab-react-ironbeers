import React from 'react';
import { NavLink } from 'react-router-dom';

const CardItem = (props) => {
  return (
    <NavLink to={props.route} className="card">
      <div className="card-image">
        <img src={ `https://source.unsplash.com/${props.image}/1600x900`} alt="all beers" className="home-img"/>
      </div>
      <div className="card-content has-padding-10">
        <div className="media has-margin-bottom-5">
          <div className="media-left">
            <p className="title is-5">{props.title}</p>
          </div>
        </div>
        <div className="content is-size-7">
        {props.description} 
        </div>
      </div>
    </NavLink>

  );
}

export default CardItem;