import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Beer = (props) => {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  const getPost = () => {         
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        const oneBeer = response.data;
        setBeer(oneBeer);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {               
    getPost();
  }, [] );
 

  return (
      <div>
      {beer && (
        <>
          <div>
              <img src={beer.image} alt="beer" className="beer-img" />
            </div>
            <div>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>{beer.first_brewed}</p>
              <p>{beer.attenuation_level}</p>
              <p>{beer.description}</p>
              <p>{beer.contributed_by}</p>
            </div>
        </>
      )}
      </div>
        );
};

export default Beer;