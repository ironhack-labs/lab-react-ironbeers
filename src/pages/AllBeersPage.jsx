import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const beersAPI = "https://ih-beers-api2.herokuapp.com/beers";
function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  axios
  .get(beersAPI)
  .then((response) => {
    setBeers(response.data);
  });

  return (
    <div>
      <h1>All Beers</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer._id}>
          <img src={beer.image_url}/>
            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
