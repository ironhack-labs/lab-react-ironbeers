import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);


  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);

      console.log(response.data);
    });
  }, []);
  return (
    <div>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} />
            <Link to={`/beers/${beer._id}`}>
              <h3>{beer.name}</h3>
            </Link>

            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
