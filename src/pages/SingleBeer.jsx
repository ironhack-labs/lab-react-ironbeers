import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";

const SingleBeer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    //! it renders twice, in dev mode => solution: run in production mode
    if (id) {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then(response => {
        console.log(response.data);
        setBeer(response.data);
      });
    } else {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(response => {
        console.log(response.data);
        setBeer(response.data);
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <section className="single-beer">
        <img src={beer.image_url} alt={beer.name} />
        <div>
          <h2>
            {beer.name} <span className="greyed">{beer.attenuation_level}</span>
          </h2>
          <p className="greyed">
            {beer.tagline}
            <span>{beer.first_brewed}</span>
          </p>
          <p>{beer.description}</p>
          <p className="greyed">{beer.contributed_by}</p>
        </div>
      </section>
    </div>
  );
};

export default SingleBeer;
