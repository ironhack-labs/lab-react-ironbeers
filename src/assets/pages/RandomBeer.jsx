import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function RandomBeer() {
  // generar estado
  const [beer,setBeer] = useState([]);
  const [isFetching,setIsFetching] = useState(true);

  // llamar a api
  useEffect(()=>{
    getData()
  },[])

  let getData = async ()=>{

    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      )
      console.log(response.data)
      // actualizar estado
      setBeer(response.data)
      // loading 
      setIsFetching(false)
    } catch (error) {
      console.log(error)
    }
  };

  if(isFetching === true){
    return <h3>...loading</h3>
  }
  // render 

  return (
    <div>
      <nav style={{backgroundColor:'lightblue', height: '80px', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Link to={"/"}>
          <img src={require("../home.png")} alt="Home" width={"30px"} />
        </Link>
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <img
          src={beer.image_url}
          alt="img-beer"
          style={{ width: "100px" }}
        />
        <div >
          <h2>{beer.name}</h2>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <p><b>{beer.first_brewed}</b></p>
            <p>{beer.attenuation_level}</p>
          </div>
          <h5>{beer.tagline}</h5>
          <p></p>
          <p>{beer.description}</p>
          <p> Created by: {beer.contributed_by.split("<", 1)}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
