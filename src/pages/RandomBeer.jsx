import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  //console.log(beerId)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const randomBeer = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(randomBeer.data);
      setRandomBeer(randomBeer.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (isFetching) {
    <p>Loading...</p>;
  } else {
  }
  return (
    <div>
    <NavBar />
  <div style={{ display: "flex",flexDirection:"column", justifyContent: "center",alignItems:"center", margin: "50px" }}>
    <div
      style={{
        width: "20%",
        border: "1px solid",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <img
        src={randomBeer.image_url}
        alt=""
        style={{ width: "100px", height: "250px" }}
      />
      <h1>{randomBeer.name}</h1>
      <h5>{randomBeer.tagline}</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nihil
        veritatis animi, quas minus quo ab! Voluptates error suscipit
        dignissimos nesciunt cum quis optio, magnam, numquam sequi, modi
        aperiam dicta.
      </p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  </div>
  </div>
  )
}

export default RandomBeer