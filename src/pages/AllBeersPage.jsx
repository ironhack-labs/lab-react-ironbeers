import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(function () {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(function (response) {
        setAllBeers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      {allBeers.map(function (beer) {
        return (
          <Link to={`/${beer._id}`}>
            <div key={beer._id}>
              <img src={beer.image_url} alt="" />
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <i>{beer.contributed_by}</i>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
