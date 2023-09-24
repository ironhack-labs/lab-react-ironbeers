import axios from "axios";
import { useEffect, useState } from "react";
import "./AllBeersPage.css";

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchAllBeers = async () => {
      try {
        const response = await axios.get(apiUrl);
        const parsedData = response.data.map(
          ({ _id, name, contributed_by, image_url, tagline }) => {
            return { id: _id, name, contributed_by, image_url, tagline };
          }
        );
        setBeers(parsedData);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };
    fetchAllBeers();
  }, []);

  return (
    <div>
      <ul className="allBeerList">
        {beers.map((beer) => (
          <li key={beer.id} className="allBeerListItem">
            <div className="left-container">
              <img src={beer.image_url} alt={beer.name} />
            </div>

            <div>
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
