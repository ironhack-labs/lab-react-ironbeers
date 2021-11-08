import React from 'react';
import Header from './Header'
import { Link } from 'react-router-dom';


const BeersList = (props) => {
  return (
    <div>
      <Header />
      <p>Hello beers list</p>
      
      {props.beers.map((elm) => {
        return (
          <div className="container">
          <img className="picture" src={elm.image_url} alt="beer"/>
            <div>
              <h2>{elm.name}</h2>
              <p>{elm.tagline}</p>
              <p>{elm.contributed_by}</p>
              <Link to={`/beers/${elm._id}`}>See details</Link>
              <hr/>
            </div>
          
          

          
          
          </div>
          )}
        )
      }
        
      
      
      
    </div>
  );
};

export default BeersList;
