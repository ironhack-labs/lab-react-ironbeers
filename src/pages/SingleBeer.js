import { React, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Header from '../components/Header';


function SingleBeer() {
  const [beer, setBeer] = useState({});
  const { beerId } = useParams();


  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then((response) => {
      console.log("response.data", response.data);
      setBeer(response.data);
    });
  }, [beerId]);

  return (
    <div>
      <Header />
      <div className="card">
        <img src={beer.image_url} alt="beer" width="100" />
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p>Attenuation level: {beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>Contributed by: {beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default SingleBeer;
