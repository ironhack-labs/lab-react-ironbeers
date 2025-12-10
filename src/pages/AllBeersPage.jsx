import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get("https://beers-api.edu.ironhack.com/beers");
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div>
      <h1>All Beers</h1>

      <div className="beers-list">
        {beers.map((beer) => (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
      
            <p>Created by: {beer.contributed_by}</p>

           
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBeersPage;