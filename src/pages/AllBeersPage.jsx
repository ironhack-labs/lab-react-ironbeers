import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((beersList) => {
        setBeers(beersList.data);
        console.log(beersList.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img
                src={beer.image_url}
                alt={beer.name}
                style={{ width: "40px", marginRight: "10px" }}
              />
              <h4>{beer.name}</h4>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
