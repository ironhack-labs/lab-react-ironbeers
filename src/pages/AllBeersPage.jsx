import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => setBeers(response.data))
      .catch(error => console.error("Error fetching beers:", error));
  }, []);

  return (
    <div>
      <h1>All Beers 🍻</h1>
      {beers.map((beer) => (
        <div key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt={beer.name} style={{ height: "100px" }} />
            <h3>{beer.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
