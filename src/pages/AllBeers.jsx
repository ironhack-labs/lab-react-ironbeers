import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBeers } from "../api";
import NavBar from "../components/NavBar";

function AllBeers() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    async function handleGetAllBeers() {
      const response = await getAllBeers();
      setBeers(response.data);
    }
    handleGetAllBeers();
  });
  return (
    <div>
      <NavBar />
      <ul>
        {beers.map((beer) => {
          return (
            <li key={beer._id}>
              <div>
                <img src={beer.image_url} alt={beer.name} width="10%" />
              </div>
              <Link to={`/beers/${beer._id}`}>
                <h2>{beer.name}</h2>
              </Link>
              <h4>{beer.tagline}</h4>
              <p>{beer.contributed_by}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllBeers;
