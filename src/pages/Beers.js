import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logoHeader from "../assets/logoHeader.png";
import Header from '../components/Header';

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <Header className="App-header">
        <img src={logoHeader} alt="header" />
      </Header>

      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt="beer" width="100" />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>ABV: {beer.abv}</p>
          </Link>
        </div>
      ))}
    </div>
  );
      } 
      
      export default Beers;