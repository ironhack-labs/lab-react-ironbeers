import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/")
      .then((response) => {
        setBeer(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      <ul className="grid grid-cols-3 gap-4 p-4 w-screen">
        {beer.map((beer) => (
          <li key={beer._id}>
            <img
              className=""
              src={beer.image_url}
              alt={beer.name}
              style={{ height: "100px" }}
            />
            <h2>
              <strong>{beer.name}</strong>
            </h2>
            <p>{beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
            <Link
              to={`/:id/${beer._id}`}
              className="text-orange-500 hover:underline"
            >
              Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
