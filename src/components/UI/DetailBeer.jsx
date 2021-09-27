import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

const DetailBeer = (props) => {
  console.log('this is the passed on beerObj in details view', props.beerObj);
  return (
    <div>
      <Navbar />
      <div className="flexwrapper">
        <div>
          <img
            className="detailbeer-img"
            src={props.beerObj.image_url}
            alt=""
          />
        </div>
        <div>
          <h2>{props.beerObj.name}</h2>
          <h5>{props.beerObj.tagline}</h5>
        </div>
        <div>
          <p>{props.beerObj.description}</p>
        </div>
        <div>
          <p>by {props.beerObj.contributed_by}</p>
        </div>
        <div>
          <Link to={`/${props.backlink}`}>Back!</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailBeer;
