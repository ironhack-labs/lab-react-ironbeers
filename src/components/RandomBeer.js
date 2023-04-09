import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

function RandomBeer() {

  const [beer, setBeer] = useState(null);
  const url="https://ih-beers-api2.herokuapp.com";

  useEffect(() => {
    axios.get(url + `/beers/random`)
    .then((response) => {
      console.log(response);
      setBeer(response.data);
    })
    .catch((e) => {
      console.log("error getting random beer from API", e);
    });
}, []);


  
  return (
    <div>
      <Header />
      <h1>Random Beer</h1>
      {beer ? (
        <div>
          <img src={beer.image_url} alt="beer-img" />
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
          <p>First brewed: {beer.first_brewed}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>
        </div>
      ) : (
        <p>loading random beer...</p>
      )}
    </div>
  )
}

export default RandomBeer;