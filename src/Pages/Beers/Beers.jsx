import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Beers() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBeers();
  }, []);

  return (
    <>
      <Link to={`/`}>
        <img
          src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
          alt="Back"
        />
      </Link>
      <div>
        {beers.map((beer) => (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt="" />
              <h1>{beer.name}</h1>
            </Link>
            <p>{beer.tagline}</p>
            <h3>Created by: </h3>
            <p>{beer.contributed_by}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Beers;
