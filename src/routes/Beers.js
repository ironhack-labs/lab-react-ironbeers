import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt={beer.name} />
          <Link to={`/beers/${beer._id}`}>
            <h2>{beer.name}</h2>
          </Link>
          <p>{beer.tagline}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
      ))}
    </div>
  );
}

export default Beers;
