import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../Header/Header"
import "./BeersDetails.css"


function BeersDetails(props) {
  const [beerState, setBeerState] = useState({
    _id: '',
    image: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: 0,
    description: '',
    contributed_by: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const beer = props.match.params.id;

        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beer}`
        );

        setBeerState({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [props]);

  return (
    <div className="detailspage">
    <Header />
      <div key={beerState._id} className="singleBeerContainer">
        <div>
          <img src={beerState.image_url} className="beerImgs" alt="details" />
        </div>
        <div>
          <h3>{beerState.name}</h3>
          <p>{beerState.tagline}</p>
          <p>{beerState.attenuation_level}</p>
          <p>{beerState.first_brewed}</p>
          <p>{beerState.description}</p>

          <small>
            <p>{beerState.contributed_by}</p>
          </small>
        </div>
      </div>
    </div>
  );
};

export default BeersDetails;