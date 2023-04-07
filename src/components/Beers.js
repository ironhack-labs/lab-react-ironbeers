import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const [beers, setBeers] = useState(null);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((e) => {
        console.log("error with API...", e);
      });
  }, []);

  function renderBeers(){
    return beers.map((beer) => {
      return (
        <Link to={`/beers/${beer._id}`}>
          <div className="beersDiv">
            <img src={beer.image_url} alt="beerImg" />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </div>
        </Link>
      );
    });
  };

  return (
    <>
      <Navbar />
      <h1>BEERS</h1>
      {beers ? renderBeers() : "loading..."}
    </>
  );
}

export default Beers;
