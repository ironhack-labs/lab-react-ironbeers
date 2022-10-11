import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Beer = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => setBeer(response.data))
      .catch((err) => console.log(err));
  }, [id]);

  const {
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
    image_url,
  } = beer;

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <img
        style={{ maxHeight: "300px", margin: "15px" }}
        src={image_url}
        alt=""
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h2>{name}</h2>
        <h4 style={{ color: "grey" }}>{attenuation_level}</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p style={{ color: "grey" }}>{tagline}</p>
        <p style={{ fontWeight: "bold" }}>{first_brewed}</p>
      </div>
      <p>{description}</p>
      <p style={{ color: "grey" }}>{contributed_by}</p>
    </div>
  );
};

export default Beer;
