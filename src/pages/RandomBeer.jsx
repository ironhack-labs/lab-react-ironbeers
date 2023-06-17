import axios from "axios";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "../App.css"


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
      <div className="body">
        {beer ? (
          <div className="row">
            <div className="row d-flex justify-content-center">
              <img
                style={{ height: "400px", width: "200px" }}
                src={beer.image_url}
                alt=""
              />
            </div>
            <div className="row">
              <div className="col">
                <p>{beer.name}</p>
              </div>
              <div className="col">
                <p className="right-text">{beer.attenuation_level}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>{beer.tagline}</p>
              </div>
              <div className="col">
                <p className="right-text">{beer.first_brewed}</p>
              </div>
            </div>
            <div className="row">
              <p>{beer.description}</p>
            </div>
            <div className="row">
              <p>{beer.contributed_by}</p>
            </div>
          </div>
        ) : (
          <div>
            <h1>No beer found</h1>
          </div>
        )}
      </div>
    </div>
  );
}
