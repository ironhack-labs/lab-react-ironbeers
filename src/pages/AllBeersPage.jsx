import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";



function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
      .get("https://beers-api.edu.ironhack.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the beers:", error);
      });
  }, []); 

  return (
    <div>
      <h1>All Beers</h1>
      {beers.map((beer) => (
        <div key={beer._id} className="beer-card">
          <img src={beer.image_url} alt={beer.name} style={{ height: "100px" }} />
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>Created by: {beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
