import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import logoHome from '../assets/home-icon.png';
import '../index.css';

function DetailBeer() {
  const [oneBeer, setOneBeer] = useState(null);
  const { beerId } = useParams();

  const getBeer = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setOneBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, [beerId]);

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
              <img
                className="random-image"
                src={oneBeer.image_url}
                alt="imageBeer"
              />
            </div>
          </section>
          <div className="each-flex">
            <h2>{oneBeer.name}</h2>
            <h4>{oneBeer.attenuation_level}</h4>
          </div>
          <div className="each-flex">
            <h3>{oneBeer.tagline}</h3>
            <h4>{oneBeer.first_brewed}</h4>
          </div>
          <div>
            <h4>{oneBeer.description}</h4>
          </div>
          <div>
            <h4>{oneBeer.contributed_by}</h4>
          </div>
          <Link className='backto-link' to="/beers">Back to list of beers</Link>
        </div>
      )}
    </div>
  );
}

export default DetailBeer;
