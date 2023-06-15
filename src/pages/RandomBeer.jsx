import axios from "axios";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random";

export default function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(API_URL);
        setBeer(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      {beer ? (
        <div className="card row">
          <img
            style={{ height: "450px", width: "150px" }}
            src={beer.image_url}
            alt=""
          />
          <h1>Name: {beer.name}</h1>
          <h2>Tagline: {beer.tagline}</h2>
          <h3>First Brewed: {beer.first_brewed}</h3>
          <p>Description: {beer.description}</p>
          <p>{beer.attenuation_level}</p>
        </div>
      ) : (
        <div>
          <h1>No existe esa cerveza</h1>
        </div>
      )}
    </div>
  );
}
