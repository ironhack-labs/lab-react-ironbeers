import React, { useState, useEffect } from "react";
import axios from "axios";
import NavMain from "./NavMain";

function BeerDetail(props) {
  const [beer, setBeer] = useState([]);
  let id = props.match.params._id;
  useEffect(() => {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers/" + id)
      .then(response => {
        setBeer(response.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="container">
      <NavMain />
      <div className="onebeer">
        <div className="imgcontainer">
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <h1>{beer.name}</h1>
        <span className="attenuation">{beer.attenuation_level}</span>
        <h2>{beer.tagline}</h2>
        <span className="firstbrew">{beer.first_brewed}</span>
        <p>{beer.description}</p>
        <p className="contributor">{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetail;
