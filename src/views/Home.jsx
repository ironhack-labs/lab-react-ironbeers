import React from 'react';
import { Link } from 'react-router-dom';
import apiHandler from '../api/apiHandler';

const Home = () => {
  return (
    <div>
    <div className="all-beers">
      <Link to={'/beers/'}>
        <img
          src="https://images.unsplash.com/photo-1551046394-ade451f541d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="all beers"
        />
        <h1>All Beers</h1>
      </Link>
    
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas
          quisquam enim, ea, adipisci tenetur, sit sunt commodi iure saepe
          veritatis asperiores quo? Magni id distinctio ipsum eos illum
          corrupti?
        </p>
      </div>
      <div className="rdm-beer">
      <Link to={'/random-beer/'}>
        <img
          src="https://images.unsplash.com/photo-1551046394-ade451f541d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="Random beer"
        />
        <h1>Random Beer</h1>
      </Link>
    
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas
          quisquam enim, ea, adipisci tenetur, sit sunt commodi iure saepe
          veritatis asperiores quo? Magni id distinctio ipsum eos illum
          corrupti?
        </p>
      </div>
      <div className="new-beer">
      <Link to={'/new-beer/'}>
        <img
          src="https://images.unsplash.com/photo-1551046394-ade451f541d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="Random beer"
        />
        <h1>New Beer</h1>
      </Link>
    
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas
          quisquam enim, ea, adipisci tenetur, sit sunt commodi iure saepe
          veritatis asperiores quo? Magni id distinctio ipsum eos illum
          corrupti?
        </p>
      </div>
    </div>
  );
};

export default Home;
