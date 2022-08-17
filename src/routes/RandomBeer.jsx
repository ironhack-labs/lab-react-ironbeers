//https://ih-beers-api2.herokuapp.com/beers/random

import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../components/navBar";

export default function RandomBeer() {



  const [randomBeer, setrandomBeer] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setrandomBeer(() => response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []); 

  return loading ? (
    <p>Me estoy cargando. dame un momento</p>
  ) : (
<div> <NavBar/>

    <div style={{display:"flex", flexDirection:"column",alignItems: "center"}}>
    
      <img
        src={randomBeer.image_url}
        style={{ width: "100px", height: "auto" }}
        alt="RandomBeer"
      />

      <div style={{
        display:"flex",
      justifyContent:"center",
      alignItems: "center"}}>
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.attenuation_level}</p>
        </div>

<div style={{
 display:"flex",
justifyContent:"center",
      alignItems: "center"}}>
      <h5>{randomBeer.tagline}</h5>
      <p>{randomBeer.first_brewed}</p>
</div>

      <p>{randomBeer.description}</p>

      <p>
        <b>Created by:</b> {randomBeer.contributed_by}
      </p>

    </div>
    </div>
  );
}

