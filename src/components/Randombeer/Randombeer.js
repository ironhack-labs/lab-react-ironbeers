import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

const BeerDetails = (props) => {
  const [beerDetails, setBeerDetails] = useState({});

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((res) => {
      const beerDetails = res.data;
      setBeerDetails(beerDetails);
    });
  });
  return (
    <div>
      <Navbar />
      <img src={beerDetails.image_url} alt="beersimage"></img>
      <h2> {beerDetails.name} </h2>
      <h4> {beerDetails.tagline} </h4>
      <br />
      <h4> First Brewed Year and Month:</h4> {beerDetails.first_brewed}
      <br />
      <h4> Attenuation Level:</h4> {beerDetails.attenuation_level}
      <br />
      <h4> Description:</h4> {beerDetails.description}
      <br />
      <h4> Contributed By:</h4> {beerDetails.contributed_by}
      <br />
    </div>
  );
};

export default BeerDetails;
