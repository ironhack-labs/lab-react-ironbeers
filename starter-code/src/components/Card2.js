import React from 'react';
import { Link } from 'react-router-dom';

const Card2 = ({ title, text, imgSrc, route }) => (
  <div className="card m-4 " style={{ width: '18rem' }}>
    <img className="align-self-center mt-3" style={{ width: '50px', height: 'auto'}} src={imgSrc} alt="img"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      {console.log(route)}
      <Link className="btn btn-primary" to={route}>
        view detail
      </Link>
    </div>
  </div>
);

export default Card2;
