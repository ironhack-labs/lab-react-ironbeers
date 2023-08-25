import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching API data (all beer): ", error);
      });
  }, []);

  return (
    <div className="AllBeersPage">
      {beers.map((beer) => {
        return (
          <Link to={`/beers/${beer._id}`} key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <div className="AllBeersInfo">
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <h4>{beer.contributed_by}</h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
