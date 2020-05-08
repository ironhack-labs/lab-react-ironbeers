import React from 'react';
import { Link } from 'react-router-dom';

const beerCardDetail = ({ title, text, imgSrc, route,description }) => (
  <div className="card m-4 " style={{ width: '20rem' }}>
    <img className="align-self-center mt-3" style={{ width: '50px', height: 'auto'}} src={imgSrc} alt="img"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <p className="card-text">{description}</p>

      {console.log(route)}
      <Link className="btn btn-primary" to='/beers'>
        view all!
      </Link>
    </div>
  </div>
);

export default beerCardDetail;
