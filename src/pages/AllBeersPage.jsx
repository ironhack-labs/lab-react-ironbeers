import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  console.log(beers);

  useEffect(() => {
    const fetchAllBeers = async () => {
      try {
        const response = await axios.get(apiUrl);
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };
    fetchAllBeers();
  }, []);

  return (
    <div>
      <h1>All beers page </h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer._id}>
            <h2>{beer.name}</h2>
            <img src={beer.image_url} alt={beer.name} width="150" />
            <p>{beer.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
