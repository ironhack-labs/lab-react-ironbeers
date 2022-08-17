import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import NavBar from "../components/navBar";


export default function Beers() {
  const [beers, setBeers] = useState();
  const [loading, setLoading] = useState(true);

  const baseURL = "https://ih-beers-api2.herokuapp.com/beers";
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setBeers(() => response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return loading ? (
    <p>Estoy cargando, porfa espera! </p>
  ) : (
    <div>
    <NavBar/>
      <h1 style={{textAlign: 'center',
      marginTop:'40px',
      marginBottom:'40px'}}>List of beers</h1>
      {beers.map((beer) => {
        return (
          <div
            key={beer._id}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              borderBottom: "1px solid",
              justifyContent:"center"
            }}
          >
            <div>
            <Link to={`/beers/${beer._id}`}>
              <img
                src={beer.image_url}
                style={{ width: "100px", height: "auto" }}
                alt="beer"
              />
              </Link>
            </div>
            <div style={{ marginLeft: "50px" }}>
              <h3>{beer.name}</h3>
              <h5>{beer.tagline}</h5>
              <p>
                <b>Created by:</b> {beer.contributed_by}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// 
