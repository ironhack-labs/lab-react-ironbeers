import axios from "axios";
import React, { useEffect, useState } from "react";

export const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState({});
  const getRandomBeer = async () => {
    try {
      let { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(data);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getRandomBeer();
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <div class="card" style={{ margin: 40, width: "40%" }}>
      <div class="card-body">
      <div style={{display:'flex',justifyContent:'center'}} >
        <img
          style={{ width: 80, height: 300 }}
          src={randomBeer.image_url}
          alt="imageBeer"
        />
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}} >
          <p style={{fontSize:40}} >{randomBeer.name}</p>
          <p style={{fontSize:40,color:'#D3D3D3'}} >{randomBeer.attenuation_level}</p>
        </div>
        <div style={{display:'flex',justifyContent:'space-between'}} >
          <p style={{fontSize:25,color:'#9C9C9C'}}>{randomBeer.tagline}</p>
          <p style={{fontWeight:'bolder',fontSize:20}} >{randomBeer.first_brewed}</p>
        </div>
        <div style={{fontWeight:500,fontSize:20}} >{randomBeer.description}</div>
        <div style={{color:'#959595',fontWeight:'bolder'}} >{randomBeer.contributed_by}</div>
      </div>
    </div>
  </div>
  );
};
