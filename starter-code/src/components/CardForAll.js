import React from 'react';
import { Link } from 'react-router-dom';

const CardForAll = ({ title, text, imgSrc, route }) => (
  <div className="card m-4 " style={{ width: '180px' }}>
    <img className="align-self-center mt-3" style={{ width: '100px', height: 'auto'}} src={imgSrc} alt="img"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      {console.log(route)}
    </div>
  </div>
);

export default CardForAll;