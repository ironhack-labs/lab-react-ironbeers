import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => {
        console.log(error);
      }, []);

    return (
      <div>
        {beers.map((beer) => {
          return (
            <div>
              key={beer._id}
              <img src={beer.image_url} alt={beer.name} />
              <h1>{beer.name}</h1>
              <h2>{beer.tagline}</h2>
              <p>contribution: {beer.contributed_by}</p>
              <Link to={`/beers/${beer._id}`}>the details</Link>
            </div>
          );
        })}
      </div>
    );
  });
}

export default AllBeersPage;
