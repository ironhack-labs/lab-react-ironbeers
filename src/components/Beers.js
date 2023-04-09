import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Beers() {
  const [beers, setBeers] = useState([]);
  const URL = "https://ih-beers-api2.herokuapp.com";

  useEffect(() => {
    axios
      .get(URL + "/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Beers</h1>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt="" />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link to={`/beer/${beer._id}`}>More Details</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
