import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
function SingleBeer() {
  const [single, setSingle] = useState(null);
  const { beerId } = useParams();
  const getSingle = async () => {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setSingle(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingle();
  }, []);
  return (
    <div>
      <Header />
      {single && (
        <div>
          <img src={single.image_url} alt="beer" />
          <h6>Name:{single.name}</h6>
          <h6>Tagline:{single.tagline}</h6>
          <h6>Contributed by:{single.contributed_by}</h6>
          <h6>First brewed:{single.first_brewed}</h6>
          <h6>Attenuation level:{single.attenuation_level}</h6>
          <h6>Description:{single.description}</h6>
          <h6>First brewed:{single.first_brewed}</h6>
        </div>
      )}
    </div>
  );
}

export default SingleBeer;
