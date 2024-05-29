import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    const getRandomBeer = async () => {
      try {
        const response = await axios.get(API_URL);
        setRandomBeer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getRandomBeer();
  }, []);

  console.log(randomBeer);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "40vw",
        textAlign: "center",
        margin: "auto",
        border: "solid, 1px, black",
        padding: "20px",
      }}
    >
      <h1>Beer Details</h1>
      {randomBeer ? (
        <div>
          <img
            src="https://www.melandrose.com/prodimages/11161-DEFAULT-l.jpg"
            alt="beer image"
            style={{
              height: "20vh",
              width: "20vh",
              marginTop: "2vh",
            }}
          />
          <h1>{randomBeer.name}</h1>
          <h3>{randomBeer.tagline}</h3>
          <h3>Attenuation Level: {randomBeer.attenuation_level}</h3>
          <p>Desctiption: {randomBeer.description}</p>
          <p>Created By: {randomBeer.contributed_by}</p>
        </div>
      ) : (
        <p>No beer to show</p>
      )}
      <Link to="/beers">Back</Link>
    </div>
  );
}

export default RandomBeersPage;
