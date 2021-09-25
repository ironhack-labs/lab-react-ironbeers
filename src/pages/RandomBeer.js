import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function RandomBeer(props) {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        console.log('this is the response data', response.data);
        setBeer(response.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header />
      <div>
      <div key={beer._id} className='single-beer-container'>
              <img  height='250px' src={beer.image_url} alt="beers" />
              <div className="beer-detail">
                  <div className="first-line">
                    <h3>{beer.name}</h3>
                    <p>{beer.attenuation_level}</p>
                  </div>
                  <div className="second-line">
                    <p>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>
                  </div>
                  <div className="third-line">
                    <p>{beer.description}</p>
                  </div>
                  <div className="fourth-line">
                    <p>{beer.contributed_by}</p>
                  </div>
              </div>
            </div>
      </div>
    </div>
  );
}