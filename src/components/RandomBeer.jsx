import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logoHome from '../assets/home-icon.png';
import '../index.css';

function DetailBeer() {
  const [oneBeer, setOneBeer] = useState(null);

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setOneBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">
          <img src={logoHome} alt="logo home" />
        </Link>
      </nav>
      {oneBeer && (
        <div className="random-flex">
          <section className="image-flex">
            <div>
              <img className="random-image" src={oneBeer.image_url} alt="" />
            </div>
          </section>
            <div className='each-flex'>
              <h2>{oneBeer.name}</h2>
              <h2 className='color-grey'>{oneBeer.attenuation_level}</h2>
            </div>
            <div className='each-flex'>
              <h4 className='color-grey'>{oneBeer.tagline}</h4>
              <h4>{oneBeer.first_brewed}</h4>
            </div>
            <div>
              <h4>{oneBeer.description}</h4>
            </div>
            <div>
              <h5 className='color-grey'>{oneBeer.contributed_by}</h5>
            </div>
        </div>
      )}
    </div>
  );
}

export default DetailBeer;
