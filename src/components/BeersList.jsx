import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";
export default function BeersList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // try {
      const res = await axios.get(API_URL);
      setBeers(res.data);
      // } catch (error) {
      //   console.log(error);
      // }
    };
    getData();
  }, []);

  const renderBeers = () => {
    return beers.map((beer) => (
      <div key={beer._id} className="card p-4 m-4 justify-content-center">
        <div className="d-flex justify-content-center">
          <img
            style={{ height: "200px", width: "70px" }}
            src={beer.image_url}
            alt=""
          />
        </div>
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>Created by: {beer.contributed_by}</p>
        <Link to={`/beers/${beer._id}`}>Ver detalle</Link>
      </div>
    ));
  };

  return (
    <div className="text-center d-flex justify-content-center align-items-center">
      <div className="d-inline-block">
        <Navbar />
        {beers.length ? renderBeers() : <p>No hay cervezas</p>}
      </div>
    </div>
  );
}
