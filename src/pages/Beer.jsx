import axios from "axios";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackHome from "../components/BackHome";

function Beer() {
  const [beer, setBeer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setBeer(response.data);
      });
  }, [id]);

  return (
    <div>
      <BackHome />
      <div>
        <img src={beer.image_url} alt={beer.name} />
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>
          <strong>First brewed:</strong> {beer.first_brewed}
        </p>

        <p>
          <strong>Attenuation level:</strong> {beer.attenuation_level}
        </p>
        <p>
          <strong>Description:</strong> {beer.description}
        </p>
        <p>
          <strong>Contributed by:</strong> {beer.contributed_by}
        </p>
      </div>
    </div>
  );
}

export default Beer;
