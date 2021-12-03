import React, { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from '../Navbar/Navbar';

const RandomBeer = () => {

  const [beer, setBeer] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const beerRandom = await axios(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log(beerRandom.data)
      setBeer(beerRandom.data);
      setLoaded(true);
    };
    fetchData()
  }, []);

  return (
    loaded && <div>
      <Navbar />
      <div className="row d-flex justify-content-center m-0 p-0">
        <div className="col-3 m-5">
          <img className="img-fluid" src={beer.image_url} alt={beer.name} />
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-10">
              <p className="h2">{beer.name}</p>
            </div>
            <div className="col-2 text-end">
              <p className="h2">{beer.attenuation_level}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <p className="text-secondary">{beer.tagline}</p>
            </div>
            <div className="col-4 text-end">
              <p>{beer.first_brewed}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="fs-5 lh-1">{beer.description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="text-secondary">{beer.contributed_by}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;
