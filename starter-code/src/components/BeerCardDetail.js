import React from 'react';
import { Link } from 'react-router-dom';

const beerCardDetail = ({ title, text, imgSrc, route,description }) => (
  <div className="card m-4 " style={{ width: '20rem' }}>
    <img className="align-self-center mt-3" style={{ width: '100px', height: 'auto'}} src={imgSrc} alt="img"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <p className="card-text">{description}</p>
      <Link className="btn btn-info" to='/beers'>
        See all the bears!
      </Link>
    </div>
  </div>
);

export default beerCardDetail;