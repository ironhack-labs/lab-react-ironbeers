import React, { useState, useEffect } from "react";
import Header from "../Components/Navbar";
import axios from "axios";
import {useParams} from 'react-router-dom'

function RandomBeerPage() {
  const [thisBeer, setThisBeer] = useState([]);
  const {id} = useParams()

  const getThisBeer = async () => {
    let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
    setThisBeer(response.data);
  };

  useEffect(() => {
    getThisBeer();
  }, []);

  return (
    <div>
      <Header />
      <div className="beerCard">
              <div className="beerImg">
                <img src={thisBeer.image_url} alt={thisBeer.name} />
              </div>
              <div className="beerText">
                <h1>{thisBeer.name}</h1>
                <h2>{thisBeer.tagline}</h2>
                <p><b>Fisrt brewed:</b> {thisBeer.first_brewed}</p>
                <p><b>Attenuation level:</b> {thisBeer.attenuation_level}</p>
                <p><b>Brewer Tips:</b> {thisBeer.brewers_tips}</p>
                <p>{thisBeer.description}</p>
                <p><b>Contributed by:</b> {thisBeer.contributed_by}</p>
              </div>
            </div>
    </div>
  );
}

export default RandomBeerPage;