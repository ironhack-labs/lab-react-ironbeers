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
            <div className="AllBeersImg">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="AllBeersInfo">
              <h1>{beer.name}</h1>
              <h2>{beer.tagline}</h2>
              <p><b>Created by:</b> {beer.contributed_by}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
