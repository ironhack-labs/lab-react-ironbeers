import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, text, imgSrc, route }) => (
  <div className="card m-4" style={{ width: '180px' }}>
    <img style={{ width: '178px', height: 'auto' }} src={imgSrc} alt="img"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      {console.log(route)}
      <Link className="btn btn-info" to={route}>
      ↪️
      </Link>
    </div>
  </div>
);

export default Card;