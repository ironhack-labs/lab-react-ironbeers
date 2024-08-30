import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the beers!", error);
      });
  }, []);

  return (
    <div>
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt={beer.name} style={{ width: "50px" }} />
          <div>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>
              <strong>Created by:</strong> {beer.contributed_by}
            </p>
            <Link to={`/beers/${beer._id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
