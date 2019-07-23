import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers/random")
      .then(({ data }) => {
        setBeer(prevState => {
          return {
            ...prevState,
            ...data
          };
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>{beer.name}</h2>
      <img src={beer.image_url} />
      <p>{beer.description}</p>
    </div>
  );
}

export default RandomBeer;
